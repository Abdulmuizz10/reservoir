import React from "react";
import style from "./footer.module.css";
import {
  FaClock,
  FaLocationArrow,
  FaLocationDot,
  FaMap,
  FaMapLocation,
  FaMapLocationDot,
  FaPhone,
} from "react-icons/fa6";
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
              Email Us
            </h4>
            <a
              href="mailto:reservoir598@gmail.com"
              target={"_blank"}
              rel="noreferrer noopener"
              style={{ color: "white" }}
            >
              <p>
                {" "}
                <FaEnvelope className={style.envelope} />
                info@reservoirltd.com
              </p>
            </a>
          </div>
          <div className={style.call}>
            <h4 style={{ display: "flex", alignItems: "center", gap: "3px" }}>
              {" "}
              Contact Us
            </h4>
            <p>
              {" "}
              <FaLocationDot /> 4th Floor, Building 2, Rivers House, <br />
              Central Business District, Abuja.
            </p>
            <p style={{ display: "flex", alignItems: "center" }}>
              {" "}
              <FaPhone className={style.phone} /> +234 (0)9088330022
            </p>

            <p style={{ display: "flex", alignItems: "center" }}>
              {" "}
              <FaClock className={style.envelope} />
              8:00am - 5:00pm WAT, Monday - Friday.
            </p>
          </div>
        </div>
      </div>
      <div className={style.bottom}>
        <p>© {date} Reservoir Energy Ltd. | All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
