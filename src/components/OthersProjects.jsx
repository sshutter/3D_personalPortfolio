import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

import { motion } from "framer-motion";
import { styles } from "../styles";
import { othersProjects } from "../constants";
import { textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const OthersCard = ({ othersProjects }) => (
  <VerticalTimelineElement
    contentStyle={{
      background: "#e2e0e0",
      color: "#1A1A1A",
    }}
    contentArrowStyle={{ borderRight: "7px solid #573523" }}
    date={othersProjects.date}
    iconStyle={{ background: othersProjects.iconBg }}
    icon={
      <div className="flex justify-center items-center w-full h-full">
        <img
          src={othersProjects.icon}
          alt={othersProjects.company_name}
          className="w-[60%] h-[60%] object-contain"
        />
      </div>
    }
  >
    <div>
      <h3 className="text-secondary text-[24px] font-bold">
        {othersProjects.title}
      </h3>
      <p className="text-grey text-[16px] font-semibold" style={{ margin: 0 }}>
        {othersProjects.company_name}
      </p>
      <ul className="mt-5 list-disc ml-5 space-y-2">
        {othersProjects.points.map((point, index) => (
          <li
            key={`othersProjects-point-${index}`}
            className="text-tertiary text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </div>
  </VerticalTimelineElement>
);

const OthersProjects = () => {
  return (
    <>
      <motion.div variants={textVariant()} initial="hidden" animate="show">
        <div>
          <p className={styles.sectionSubText}>
            Exploring different academic projects
          </p>
          <h2 className={styles.sectionHeadText}>Others projects</h2>
        </div>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {othersProjects.map((othersProjects, index) => (
            <OthersCard key={index} othersProjects={othersProjects} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};
export default SectionWrapper(OthersProjects, "othersProjects");
