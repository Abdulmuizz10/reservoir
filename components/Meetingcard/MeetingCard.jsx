"use client";
import React, { useEffect, useState, useRef } from "react";
import style from "./meetingcard.module.css";
import Image from "next/image";
import { FaX } from "react-icons/fa6";
import emailjs from "@emailjs/browser";

const MeetingCard = ({ popUp, setPopUp }) => {
  const formRef = useRef();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (date || phonenumber || time) {
      setMessage(
        `Hi there this is my Email: ${email} & Phonenumber: ${phonenumber}, I will like to have a meeting with you on this Date: ${date} and this specific Time: ${time}`
      );
    }
  }, [date, phonenumber, time]);

  const [loading, setLoading] = useState(false);

  const user = { message };
  console.log(user);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_bp6nezk",
        "template_vaacxid",
        {
          from_name: user.username,
          to_name: "Abdul Hakeem",
          from_email: user.email,
          to_email: "info@reservoirltd.com",
          message: user.message,
        },
        "uTYqa9Z2TDlJ-RjdT"
      )
      .then(
        () => {
          setLoading(false);
          alert(
            "We appreciate your effort in scheduling this meeting. Looking forward to our conversation."
          );
          setUsername("");
          setEmail("");
          setPhonenumber("");
          setDate("");
          setTime("");
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
          <FaX className={style.cancel} onClick={() => setPopUp(!popUp)} />
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
                placeholder="info@reservoirltd.com"
                required
              />
            </div>

            <div className={style.formsection}>
              <p>Phonenumber: </p>
              <input
                type="text"
                name="phonenumber"
                value={phonenumber}
                onChange={(e) => setPhonenumber(e.target.value)}
                required
              />
            </div>

            <div className={style.formsection}>
              <p>Schedule Meeting Date:</p>
              <input
                type="date"
                placeholder="Date for meeting"
                name="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
              />
            </div>

            <div
              className={style.formsection}
              style={{ marginBottom: "0.5rem" }}
            >
              <p>Schedule Meeting Time:</p>
              <input
                type="text"
                name="time"
                placeholder="00 : 00 : AM/PM"
                value={time}
                onChange={(e) => setTime(e.target.value)}
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

export default MeetingCard;
