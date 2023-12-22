"use client";
import React, { useState } from "react";
import Header from "@/components/Header/Header";
import styles from "./page.module.css";
import Hero from "@/components/Hero/Hero";
import Footer from "@/components/Footer/Footer";
import MeetingCard from "@/components/Meetingcard/MeetingCard";

export default function Home() {
  const [popUp, setPopUp] = useState(false);
  return (
    <>
      <Header popUp={popUp} setPopUp={setPopUp} />
      <Hero />
      <Footer />
      {popUp && <MeetingCard popUp={popUp} setPopUp={setPopUp} />}
    </>
  );
}
