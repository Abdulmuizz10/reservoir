"use client";
import React, { useState } from "react";
import Header from "@/components/Header/Header";
import styles from "./page.module.css";
import Hero from "@/components/Hero/Hero";
import Footer from "@/components/Footer/Footer";
import MeetingCard from "@/components/Meetingcard/MeetingCard";
import MessageCard from "@/components/Messagecard/MessageCard";
import { FaEnvelope } from "react-icons/fa6";

export default function Home() {
  const [popUp, setPopUp] = useState(false);
  const [msgPopup, setMsgPopup] = useState(false);
  return (
    <div style={{ position: "relative" }}>
      <Header popUp={popUp} setPopUp={setPopUp} />
      <Hero popUp={popUp} setPopUp={setPopUp} />
      <Footer />
      {popUp && <MeetingCard popUp={popUp} setPopUp={setPopUp} />}
      {msgPopup && (
        <MessageCard msgPopup={msgPopup} setMsgPopup={setMsgPopup} />
      )}
      <div className="fixedbutton" onClick={() => setMsgPopup(!msgPopup)}>
        <FaEnvelope className="msgbutton" />
      </div>
    </div>
  );
}
