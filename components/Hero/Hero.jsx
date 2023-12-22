import React from "react";
import style from "./hero.module.css";
import { PiDownloadSimpleBold } from "react-icons/pi";
import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";

const Hero = () => {
  return (
    <section className={style.section}>
      <div className={style.hometext}>
        <h1>Powering Tommorow's Progress.</h1>
        <div className={style.buttons}>
          <button>
            <Link href="/assets/PROFILE.pdf" target={"_blank"}>
              Our services <FaExternalLinkAlt className={style.link} />
            </Link>
          </button>
          <div className={style.line}></div>
          <button className={style.active}>
            <Link href="/assets/PROFILE.pdf" download={true}>
              Download PDF <PiDownloadSimpleBold className={style.link} />
            </Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
