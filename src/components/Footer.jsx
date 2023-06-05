import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaEnvelope,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
import { styles } from "../styles";

const Footer = () => {
  const openGmail = () => {
    window.location.href = "mailto:phakin.buddhal@gmail.com";
  };

  return (
    <footer
      className={`${styles.paddingX} w-full items-center bg-primary`}
      style={{ borderTop: "1px solid #9E9E9E" }}
    >
      <div className="container" style={styles}>
        <div className="row py-5" style={styles}>
          <div
            className="col-md-6 text-secondary align-items-center justify-content-center flex-col"
            style={(styles, { borderRight: "1px solid #9e9e9e" })}
          >
            <div className="d-flex align-items-center py-3">
              <AiOutlineMail
                color="#1A1A1A"
                size={25}
                className="inline pr-2"
              />
              phakin.buddha@gmail.com
            </div>

            <div className="d-flex align-items-center py-3">
              <BsFillTelephoneFill
                color="#1A1A1A"
                size={25}
                className="inline pr-2"
              />
              086-398-5005
            </div>
          </div>
          <div
            className="col-md-6 text-secondary align-items-center justify-content-center flex"
            style={styles}
          >
            <button
              href="https://www.facebook.com/phakin.buddha/"
              className="text-dark m-1"
            >
              <FaFacebookF color="#1A1A1A" size={25} />
            </button>
            <button
              href="https://www.instagram.com/_sshutter/"
              className="text-dark m-1"
            >
              <FaInstagram color="#1A1A1A" size={25} />
            </button>
            <button href="#" className="text-dark m-1" onClick={openGmail}>
              <FaEnvelope color="#1A1A1A" size={25} />
            </button>
            <button
              href="https://www.linkedin.com/in/phakin-buddha-a24b4823b/"
              className="text-dark m-1"
            >
              <FaLinkedin color="#1A1A1A" size={25} />
            </button>
            <button
              href="https://github.com/sshutter"
              className="text-dark m-1"
            >
              <FaGithub color="#1A1A1A" size={25} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
