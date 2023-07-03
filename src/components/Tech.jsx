import React from "react";
import { technologies } from "../constants";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";

const TechCard = ({ index, name, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <div className="w-full black-nobg-gradient p-[2px] rounded-[20px]">
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-primary rounded-[20px] py-5 px-12 min-h-[180px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={name} className="w-16 h-16 object-contain" />
          <h3 className="text-secondary text-[20px] font-bold text-center">
            {name}
          </h3>
        </div>
      </div>
    </Tilt>
  );
};

const Tech = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
      slidesToSlide: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My skills</p>
        <h2 className={styles.sectionHeadText}>Technologies</h2>
      </motion.div>

      <Carousel
        className="bg-primary mt-20 py-5 flex flex-wrap align-items-center"
        responsive={responsive}
        infinite={true}
        ssr={true}
        keyBoardControl={true}
        arrows
        pauseOnHover
      >
        {technologies.map((tech, index) => (
          <div key={tech.name} className="flex justify-center">
            <TechCard key={tech.name} index={index} {...tech} />
          </div>
        ))}
      </Carousel>
    </>
  );
};

export default SectionWrapper(Tech, "tech");
