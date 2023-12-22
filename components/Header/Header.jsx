import Image from "next/image";
import React from "react";
import style from "./header.module.css";
import { FaPhone } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa";

const Header = ({ popUp, setPopUp }) => {
  return (
    <header className={style.header}>
      <div className={style.left}>
        <Image
          src={"/assets/reservoirlogo.png"}
          width={130}
          height={40}
          alt="logo"
        />
        <div className={style.desc}>Energy Ltd.</div>
        <button onClick={() => setPopUp(!popUp)}>SCHEDULE A MEETING</button>
      </div>
      <div className={style.right}>
        <div className={style.top}>
          <a href="#">
            <FaPhone className={style.phone} /> 09088330022
          </a>
          <a
            href="mailto:reservoir598@gmail.com"
            target={"_blank"}
            rel="noreferrer noopener"
          >
            <FaEnvelope className={style.envelope} /> reservoir598@gmail.com
          </a>
        </div>
        <div className={style.line}></div>
        <div className={style.bottom}>
          <button onClick={() => setPopUp(!popUp)}>SCHEDULE A MEETING</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
