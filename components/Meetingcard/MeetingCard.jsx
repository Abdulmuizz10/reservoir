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
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (date && phonenumber) {
      setMessage(
        `this is my phone number: ${phonenumber} and i will like to have a meeting with you on ${date}`
      );
    }
  }, [date, phonenumber]);

  const [loading, setLoading] = useState(false);

  const user = { username, email, message };
  console.log(user);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_l8nrkjr",
        "template_tob7n7i",
        {
          from_name: user.username,
          to_name: "Abdul Hakeem",
          from_email: user.email,
          to_email: "reservoir598@gmail.com",
          message: user.message,
        },
        "hD8AdP2uG0lxvzj0M"
      )
      .then(
        () => {
          setLoading(false);
          alert(
            "We appreciate your effort in scheduling this meeting. Looking forward to our conversation."
          );

          setForm({
            username: "",
            email: "",
            phonenumber: "",
            date1: "",
          });
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
                placeholder="Username"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            <div className={style.formsection}>
              <p>Email:</p>
              <input
                type="email"
                placeholder="email@gmail.com"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className={style.formsection}>
              <p>Phone number: </p>
              <input
                type="text"
                placeholder="Phone number"
                name="phonenumber"
                value={phonenumber}
                onChange={(e) => setPhonenumber(e.target.value)}
              />
            </div>

            <div className={style.formsection}>
              <p>Shedule Meeting Date:</p>
              <input
                type="date"
                placeholder="Date for meeting"
                name="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
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
