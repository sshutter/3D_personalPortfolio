import {
  backend,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  python,
  cpp,
  java,
  iot,
  dataSci,
  dataSci2,
  message,
  documents,
  yannix,
  carrent,
  campgroundsBooking,
  rails,
  threejs,
  frontend,
  fullStack,
  swArch,
  tester,
  ruby,
  nextJs,
  c,
  swDev2,
  mysql,
  iosCer,
  uxCer,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "certs",
    title: "Certs",
  },
  {
    id: "tech",
    title: "Techs",
  },
  {
    id: "contact",
    title: "Contact",
  },
];
const services = [
  {
    title: "Frontend Developer",
    icon: frontend,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Full Stack Developer",
    icon: fullStack,
  },
  {
    title: "Software Tester",
    icon: tester,
  },
];
const technologies = [
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "C",
    icon: c,
  },
  {
    name: "C++",
    icon: cpp,
  },
  {
    name: "Ruby On Rails",
    icon: ruby,
  },
  {
    name: "NextJs",
    icon: nextJs,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];
const othersProjects = [
  {
    title: "Java Board Game Project",
    company_name: "Java",
    icon: java,
    iconBg: "#E6DEDD",
    date: "Year 1 Semester 2",
    points: [
      "Created a turn-based strategy card game project with Java.",
      "Participated in code reviews and providing constructive feedback to another developer.",
      "Practiced communication, object-oriented programming, and also collaborating using git.",
      "Implemented the logical part and also user interface.",
    ],
  },
  {
    title: "Embedded Project",
    company_name: "C/C++ with STM32IDE and Arduino program",
    icon: iot,
    iconBg: "#E6DEDD",
    date: "Year 2 Semester 2",
    points: [
      "Developed a car detection system and a web-based operation.",
      "The system uses an IOT system to provide a solution to driving issues.",
      "Implemented the system using ultrasonic sensor and acceleration sensor.",
      "Using Firebase to connect with the sensors and real-time database to our website",
    ],
  },
  {
    title: "Software Engineering Project",
    company_name: "MySQL, MongoDB, and Figma",
    icon: documents,
    iconBg: "#E6DEDD",
    date: "Year 3 Semester 1",
    points: [
      "Created software management plane, software requirement specification, and software design specification.",
      "Designed database model.",
      "Created ER diagram, UML diagram, object diagram, components diagram, sequence diagram, class diagram, component diagram, use case diagram, package diagram and also deployment diagram.",
    ],
  },
  {
    title: "Image classification Project",
    company_name: "Python",
    icon: dataSci2,
    iconBg: "#E6DEDD",
    date: "Year 3 Semester 2",
    points: [
      "Image classification using machine learning.",
      "Manually cleaning data with 10 classes ( around 20,000 samples ).",
      "Created, trained, and tested the model using Keras.",
    ],
  },
  {
    title: "Data science Project",
    company_name: "Python",
    icon: dataSci,
    iconBg: "#E6DEDD",
    date: "Year 3 Semester 2",
    points: [
      "Created an end-to-end data science pipeline.",
      "Scrapped data from a website with beautiful soup, streaming data using Kafka, and control with airflow.",
      "Prepared and cleaning data",
      "Implemented, training and testing a forecasting model using prophet",
      "Created data visualization with openBI",
    ],
  },
  {
    title: "Realtime chatting web-based application",
    company_name: "Python",
    icon: message,
    iconBg: "#E6DEDD",
    date: "Year 3 Semester 2",
    points: [
      "Implemented a real-time chatting web-based application using socket programming.",
    ],
  },
  {
    title: "Internship experience (Yannix)",
    company_name: "Python",
    icon: yannix,
    iconBg: "#E6DEDD",
    date: "Summer 2023",
    points: [
      "Researched a machine learning model to detect malicious content in email messages.",
      "Implemented python scripts to extract email data into an SQLite database and generate tasks in the company's ERP system.",
      "Gathered requirements and designed a web-based application to visualize the company's ERP system data.",
      "Designed and implemented a user scheduling page in the company’s Vue.js chatting application as a full-stack developer.",
      "Participated in code reviews and provided constructive feedback to team members.",
    ],
  },
];

const projects = [
  {
    name: "E-Commerce Website",
    role: "Full Stack Developer",
    description:
      "E-commerce web project covers both front-end and back-end development, representing the developer's first experience in web development. It's a significant step in their journey into the field of web development, with a particular emphasis on e-commerce functionality.",
    tags: [
      {
        name: "ruby",
        color: "text-slate-900 font-bold",
      },
      {
        name: "SQLite",
        color: "text-slate-900 font-bold",
      },
      {
        name: "bootstrap",
        color: "text-slate-900 font-bold",
      },
    ],
    image: rails,
    source_code_link: "https://github.com/",
  },

  {
    name: "Vehicle4U",
    role: "Frontend Developer",
    description:
      "This car rental web platform places a strong emphasis on front-end development and design. It involves collaborative work with a team to ensure a cohesive and visually appealing user experience. The project is committed to following a specific design throughout its development process.",
    tags: [
      {
        name: "nextJS",
        color: "text-slate-900 font-bold",
      },
      {
        name: "postgresSQL",
        color: "text-slate-900 font-bold",
      },
      {
        name: "react",
        color: "text-slate-900 font-bold",
      },
    ],
    image: carrent,
    source_code_link:
      "https://github.com/2110336-2565-2/sec2_group12_Vehicle4U.git",
  },
  {
    name: "Campgrounds Booking",
    role: "Full Stack Developer",
    description:
      "Web-based campground booking platform is designed to facilitate campground reservations. It places a significant focus on the development of its backend functionality. The project's primary emphasis is on backend development, prioritizing robust functionality over frontend aesthetics.",
    tags: [
      {
        name: "expressJS",
        color: "text-slate-900 font-bold",
      },
      {
        name: "mongoDB",
        color: "text-slate-900 font-bold",
      },
      {
        name: "react",
        color: "text-slate-900 font-bold",
      },
      {
        name: "tailwindCSS",
        color: "text-slate-900 font-bold",
      },
    ],
    image: campgroundsBooking,
    source_code_link: "https://github.com/sshutter/SWProjectFrontend.git",
  },
  {
    name: "Funky Spa",
    role: "Frontend Developer",
    description:
      "Web-based spa reservations platform is crafted to enhance the user experience, particularly emphasizing frontend and UI design for an intuitive reservation process. While maintaining robust backend functionality, the project prioritizes a visually appealing and user-friendly interface.",
    tags: [
      {
        name: "nextJS",
        color: "text-slate-900 font-bold",
      },
      {
        name: "tailwindCSS",
        color: "text-slate-900 font-bold",
      },
      {
        name: "Figma",
        color: "text-slate-900 font-bold",
      },
    ],
    image: swDev2,
    source_code_link:
      "https://github.com/chanakorn-aramsak/Massage-Reservation",
  },
  {
    name: "Drink Drank Drunk",
    role: "Frontend Developer",
    description:
      "Experience the ultimate nightlife convenience with Drink Drank Drunk. This all-in-one app allows users to effortlessly book seats, order food, and settle bills. Nightclub administrators benefit from a dedicated web portal, ensuring smooth operations. Elevate your night out with ease and efficiency.",
    tags: [
      {
        name: "nextJS",
        color: "text-slate-900 font-bold",
      },
      {
        name: "tailwindCSS",
        color: "text-slate-900 font-bold",
      },
      {
        name: "Figma",
        color: "text-slate-900 font-bold",
      },
    ],
    image: swArch,
    source_code_link: "https://github.com/tanasak32123/ddd_frontend.git",
  },
];

const certificates = [
  {
    name: "iOS Developer",
    image: iosCer,
    link: "https://www.coursera.org/account/accomplishments/verify/NX9BSSH2W84U",
  },
  {
    name: "UX Designer",
    image: uxCer,
    link: "https://www.coursera.org/account/accomplishments/verify/YWNBUY9YHNVU",
  },
];
export { services, technologies, othersProjects, projects, certificates };
