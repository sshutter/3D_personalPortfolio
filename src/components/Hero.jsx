import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { useState, useEffect } from "react";
import picture from "../assets/My project.png";

const Hero = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["Shutter", "Phakin"];
  const [text, setText] = useState("");
  const period = 2000;
  const [delta, setDelta] = useState(800 - Math.random() * 100);
  const [isVisible, setIsVisible] = useState(true);

  // Blink Cursor
  useEffect(() => {
    const timer = setInterval(() => {
      setIsVisible((prevVisible) => !prevVisible);
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, [500]);

  // Typing Text
  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  // if collapse
  const [isCollapse, setIsCollapse] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 1300px)");

    // Set the initial value of the `isMobile` state variable
    setIsCollapse(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsCollapse(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 640px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7x1 mx-auto flex flex-row items-start gap-5 rol-2`}
      >
        <div>
          <div className="relative">
            <h1 className={`${styles.heroHeadText}`}>
              Hi, I'm{" "}
              <span className="text-[#6F171C]">
                {text}
                <span style={{ visibility: isVisible ? "visible" : "hidden" }}>
                  |
                </span>
              </span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-wood-100`}>
              I develop 3D visuals, user <br className="sm:block hidden" />
              interfaces and web applications
            </p>
          </div>
        </div>
      </div>
      {isCollapse && !isMobile ? (
        <div
          className="absolute inset-0 top-[80px]"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-end",
          }}
        >
          <img
            src={picture}
            alt="animation picture"
            style={{ width: `auto`, height: "70%" }}
          />
        </div>
      ) : isMobile ? (
        <div
          className="absolute inset-0 top-[80px]"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-end",
          }}
        >
          <img
            src={picture}
            alt="animation picture"
            style={{ width: `100%`, height: "auto" }}
          />
        </div>
      ) : (
        <div
          className="absolute inset-0 top-[80px]"
          style={{ display: "flex", justifyContent: "flex-end" }}
        >
          {/* <ComputersCanvas /> */}
          <img src={picture} alt="animation picture" />
        </div>
      )}
    </section>
  );
};

export default Hero;
