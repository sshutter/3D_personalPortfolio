import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { certificates } from "../constants";

const CertificateCard = ({ index, name, image, link }) => {
  return (
    <div className="w-full black-nobg-gradient p-[2px] rounded-[20px]">
      <div className="bg-primary rounded-[20px] py-5 px-12 space-y-2">
        <img
          src={image}
          alt={name}
          className="w-auto h-[95%] object-contain"
          onClick={() => window.open(link, "_blank")}
        />

        <h3 className="text-secondary text-[20px] font-bold text-center">
          {name}
        </h3>
      </div>
    </div>
  );
};

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Certificates = ({ deviceType }) => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Accomplishments</p>
        <h2 className={styles.sectionHeadText}>Certificates</h2>
      </motion.div>

      <Carousel
        className="bg-primary mt-10 py-1 flex flex-wrap align-items-center w-full h-auto"
        responsive={responsive}
        infinite={true}
        ssr={true}
        keyBoardControl={true}
        autoPlay={deviceType !== "mobile"}
        swipeable={deviceType !== "mobile"}
        removeArrowOnDeviceType={["mobile"]}
        autoPlaySpeed={3000}
        customLeftArrow={
          <BsFillArrowLeftCircleFill
            size="40"
            color="#1A1A1A"
            style={{
              position: "absolute",
              left: 4,
              cursor: "pointer",
              opacity: 0.5,
            }}
          />
        }
        customRightArrow={
          <BsFillArrowRightCircleFill
            size="40"
            color="#1A1A1A"
            style={{
              position: "absolute",
              right: 4,
              cursor: "pointer",
              opacity: 0.5,
            }}
          />
        }
        pauseOnHover
      >
        {certificates.map((cer, index) => (
          <div key={cer.name} className="flex justify-center">
            <CertificateCard key={cer.name} index={index} {...cer} />
          </div>
        ))}
      </Carousel>
    </>
  );
};

export default SectionWrapper(Certificates, "certs");
