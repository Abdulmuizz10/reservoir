import React from "react";
import style from "./footer.module.css";
import { FaPhone } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa";

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <footer className={style.footer}>
      <div className={style.top}>
        <h3>Contact us today!</h3>

        <div className={style.contact}>
          <div className={style.email}>
            <h4 style={{ display: "flex", alignItems: "center", gap: "3px" }}>
              <FaEnvelope className={style.envelope} /> EMAIL US
            </h4>
            <a
              href="mailto:reservoir598@gmail.com"
              target={"_blank"}
              rel="noreferrer noopener"
              style={{ color: "white" }}
            >
              <h2>reservoir598@gmail.com</h2>
            </a>
          </div>
          <div className={style.call}>
            <h4 style={{ display: "flex", alignItems: "center", gap: "3px" }}>
              {" "}
              <FaPhone className={style.phone} />
              CALL US ON
            </h4>
            <h2>+234 09088330022</h2>
          </div>
        </div>
      </div>
      <div className={style.bottom}>
        <p>©{date} Reservoir Energy Ltd. | All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
