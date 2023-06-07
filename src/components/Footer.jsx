import React from "react";
import { FaInstagram, FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillTelephoneFill, BsFacebook } from "react-icons/bs";
import { styles } from "../styles";

const Footer = () => {
  const openGmail = () => {
    window.location.href = "mailto:phakin.buddhal@gmail.com";
  };

  const handleFacebookClick = () => {
    window.open("https://www.facebook.com/phakin.buddha/", "_blank");
  };

  const handleInstagramClick = () => {
    window.open("https://www.instagram.com/_sshutter/", "_blank");
  };

  const handleLinkedinClick = () => {
    window.open(
      "https://www.linkedin.com/in/phakin-buddha-a24b4823b/",
      "_blank"
    );
  };

  const handleGithubClick = () => {
    window.open("https://github.com/sshutter", "_blank");
  };

  return (
    <footer className="bg-primary" style={{ borderTop: "1px solid #9E9E9E" }}>
      <div className="container-custom">
        <div className="row-custom py-3">
          <div
            className="col-custom py-3"
            style={{
              borderRight: "1px solid #9E9E9E",
              "@media (min-width: 768px)": {
                borderRight: "0px",
              },
            }}
          >
            <div className="text-secondary justify-content-center align-content-center">
              <div className="pb-3">
                <AiOutlineMail
                  color="#1A1A1A"
                  size={25}
                  className="inline-flex pr-2"
                />
                phakin.buddha@gmail.com
              </div>
              <div className="pt-3">
                <BsFillTelephoneFill
                  color="#1A1A1A"
                  size={25}
                  className="inline-flex pr-2"
                />
                086-398-5005
              </div>
            </div>
          </div>
          <div className="col-custom py-3">
            <div className="text-secondary justify-content-center align-content-center">
              <button
                className="text-dark m-1 px-2"
                onClick={handleFacebookClick}
              >
                <BsFacebook color="#1A1A1A" size={25} />
              </button>

              <button
                className="text-dark m-1 px-2"
                onClick={handleInstagramClick}
              >
                <FaInstagram color="#1A1A1A" size={25} />
              </button>

              <button className="text-dark m-1 px-2" onClick={openGmail}>
                <FaEnvelope color="#1A1A1A" size={25} />
              </button>

              <button
                className="text-dark m-1 px-2"
                onClick={handleLinkedinClick}
              >
                <FaLinkedin color="#1A1A1A" size={25} />
              </button>

              <button
                className="text-dark m-1 px-2"
                onClick={handleGithubClick}
              >
                <FaGithub color="#1A1A1A" size={25} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
