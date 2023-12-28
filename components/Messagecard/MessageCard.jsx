"use client";
import React, { useEffect, useState, useRef } from "react";
import style from "./messagecard.module.css";
import Image from "next/image";
import { FaX } from "react-icons/fa6";
import emailjs from "@emailjs/browser";

const MessageCard = ({ msgPopup, setMsgPopup }) => {
  const formRef = useRef();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [note, setNote] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (note || phonenumber) {
      setMessage(
        `Hi there this is my Email: ${email} & Phone number: ${phonenumber}. MESSAGE: ${note}`
      );
    }
  }, [note, phonenumber]);

  const [loading, setLoading] = useState(false);

  const user = { message };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_bp6nezk",
        "template_dqf1qki",
        {
          from_name: user.username,
          to_name: "Abdul Hakeem",
          from_email: user.email,
          to_email: "info@reservoirltd.com",
          message: user.message,
        },
        "Kn3Kb-BxWhWaFE1mT"
      )
      .then(
        () => {
          setLoading(false);
          alert(
            "Thank you for sending us message, We will reach out to you soon."
          );
          setUsername("");
          setEmail("");
          setPhonenumber("");
          setNote("");
          setMessage("");
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <main className={style.main}>
      <div className={style.wrapper}>
        <div className={style.card}>
          <div className={style.logos}>
            <Image
              src={"/assets/reservoirlogo.png"}
              width={130}
              height={40}
              className={style.logo}
              alt="logo"
            />

            <div className={style.desc}>Energy Ltd.</div>
          </div>
          <FaX
            className={style.cancel}
            onClick={() => setMsgPopup(!msgPopup)}
          />
          <form className={style.form} ref={formRef} onSubmit={handleSubmit}>
            <div className={style.formsection}>
              <p>Name: </p>
              <input
                type="text"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>

            <div className={style.formsection}>
              <p>Email:</p>
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className={style.formsection}>
              <p>Phone Number: </p>
              <input
                type="text"
                name="phonenumber"
                value={phonenumber}
                onChange={(e) => setPhonenumber(e.target.value)}
                required
              />
            </div>

            <div
              className={style.formsection}
              style={{ marginBottom: "0.5rem" }}
            >
              <p>Message:</p>
              <textarea
                type="text"
                name="note"
                rows={5}
                value={note}
                onChange={(e) => setNote(e.target.value)}
                required
              />
            </div>

            {loading ? (
              <button disabled className={style.button}>
                Submitting...
              </button>
            ) : (
              <button className={style.button}>Submit</button>
            )}
          </form>
        </div>
      </div>
    </main>
  );
};

export default MessageCard;
