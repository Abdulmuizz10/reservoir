"use client";
import React from "react";
import style from "./hero.module.css";
import { PiDownloadSimpleBold } from "react-icons/pi";
import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";

const Hero = ({ popUp, setPopUp }) => {
  return (
    <section className={style.section}>
      <div className={style.hometext}>
        <h1>Powering Tomorrow's Progress.</h1>
        <div className={style.buttons}>
          <button>
            <Link
              href="https://drive.google.com/file/d/1n_OSLSKxLFrhlgrZy4DK0TUH0N5IrMDr/view"
              target="_blank"
              download={false}
            >
              OUR SERVICES
              <FaExternalLinkAlt className={style.link} />
            </Link>
          </button>
          <div className={style.line}></div>
          <button onClick={() => setPopUp(!popUp)} className={style.active}>
            SCHEDULE A MEETING
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
