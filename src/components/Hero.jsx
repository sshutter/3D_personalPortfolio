import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { useState, useEffect } from "react";
import picture from "../assets/My project.png";
import { resume } from "../assets";

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

  /*
    If collapse 
   */
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

  /**
   * If mobile
   */
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 639px)");

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

  /**
   * Resize Circle
   */
  const [circleWidth, setCircleWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setCircleWidth(window.innerWidth * 0.5); // Adjust the percentage as needed
    };

    // Initial resize on component mount
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
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
            <p className={`${styles.heroSubText} mt-2 text-wood`}>
              I develop 3D visuals, user <br className="sm:block hidden" />
              interfaces and web applications
            </p>
          </div>
        </div>
      </div>
      {isCollapse && !isMobile ? (
        <>
          <div
            className="absolute inset-0 top-[80px]"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-end",
            }}
          >
            <a
              id="collapseCircle"
              href={resume}
              download="Phakin_Resume"
              className="c_circle text-wood text-[25px] font-bold"
              style={{
                height: `${circleWidth * 0.55}px`,
                width: `${circleWidth * 0.55}px`,
                fontSize: `${circleWidth * 0.05}px`,
              }}
            >
              Download Resume
            </a>
            <a
              className="c_smCircle"
              style={{
                height: `${circleWidth * 0.3}px`,
                width: `${circleWidth * 0.3}px`,
              }}
            ></a>
            <img
              src={picture}
              alt="animation picture"
              style={{ width: `auto`, height: "70%" }}
              className="animation_img"
            />
          </div>
        </>
      ) : isMobile ? (
        <>
          <div
            className="absolute inset-0"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-end",
            }}
          >
            <a
              id="collapseCircle"
              href={resume}
              download="Phakin_Resume"
              className="m_circle text-wood text-[25px] font-bold"
              style={{
                height: `${(645 - circleWidth) * 0.5}px`,
                width: `${(645 - circleWidth) * 0.5}px`,
                right: `10px`,
                top: `30%`,
                fontSize: `${(643 - circleWidth) * 0.05}px`,
                animation: " animateCircle_m 9s linear infinite",
              }}
            >
              Download Resume
            </a>
            <a
              className="m_smCircle"
              style={{
                height: `${circleWidth * 0.3}px`,
                width: `${circleWidth * 0.3}px`,
              }}
            ></a>
            <img
              src={picture}
              alt="animation picture"
              className="animation_img"
            />
          </div>
        </>
      ) : (
        <>
          <div
            className="absolute inset-0 top-[80px]"
            style={{ display: "flex", justifyContent: "flex-end" }}
          >
            <a
              href={resume}
              download="Phakin_Resume"
              className="circle text-wood text-[40px] font-bold"
              style={{
                height: `${circleWidth * 0.7}px`,
                width: `${circleWidth * 0.7}px`,
                fontSize: `${circleWidth * 0.06}px`,
              }}
            >
              Download Resume
            </a>
            <a
              className="smCircle"
              style={{
                height: `${circleWidth * 0.3}px`,
                width: `${circleWidth * 0.3}px`,
              }}
            ></a>

            <img
              src={picture}
              alt="animation picture"
              className="animation_img"
            />
          </div>
        </>
      )}
    </section>
  );
};

export default Hero;
