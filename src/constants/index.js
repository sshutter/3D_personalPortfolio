import {
  backend,
  creator,
  web,
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
  resume,
  tester,
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
      "Creating a turn-based strategy card game project with Java.",
      "Participating in code reviews and providing constructive feedback to another developer.",
      "Practicing communication, object-oriented programming, and also collaborating using git.",
      "Implementing the logical part and also user interface.",
    ],
  },
  {
    title: "Embedded Project",
    company_name: "C/C++ with STM32IDE and Arduino program",
    icon: iot,
    iconBg: "#E6DEDD",
    date: "Year 2 Semester 2",
    points: [
      "Developing a car detection system and a web-based operation.",
      "The system uses an IOT system to provide a solution to driving issues.",
      "Implementing the system using ultrasonic sensor and acceleration sensor.",
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
      "Creating software management plane, software requirement specification, and software design specification.",
      "Designing database model.",
      "Creating ER diagram, UML diagram, object diagram, components diagram, sequence diagram, class diagram, component diagram, use case diagram, package diagram and also deployment diagram.",
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
      "Creating, training, and testing the model using Keras.",
    ],
  },
  {
    title: "Data science Project",
    company_name: "Python",
    icon: dataSci,
    iconBg: "#E6DEDD",
    date: "Year 3 Semester 2",
    points: [
      "Creating an end-to-end data science pipeline.",
      "Scrapping data from a website with beautiful soup, streaming data using Kafka, and control with airflow.",
      "Preparing and cleaning data",
      "Creating, training and testing a forecasting model using prophet",
      "Visualization with openBI",
    ],
  },
  {
    title: "Realtime chatting web-based application",
    company_name: "Python",
    icon: message,
    iconBg: "#E6DEDD",
    date: "Year 3 Semester 2",
    points: [
      "Creating a real-time chatting web-based application using socket programming.",
      "Clients could see a list of users.",
      "The clients could see a list of all created chat groups.",
      "The client could created a chat group(s) and join the chat group(s).",
      "The Chat room contains a chat box and a chat window",
      " The clients could send a direct message to other clients in the list.",
      "Each clients could see all the text messages in the hat group.",
    ],
  },
  {
    title: "Internship experience (Yannix)",
    company_name: "Python",
    icon: yannix,
    iconBg: "#E6DEDD",
    date: "Summer 2023",
    points: [
      "Creating machine learning model and NLP to detect machine readable content in email message.",
      "Creating email extraction script and save into sqlite database.",
      "Creating a script for extracting database records to create tasks in company databases.",
      "Participating in code reviews and providing constructive feedback to another developer.",
    ],
  },
];

const projects = [
  {
    name: "Vehicle4U",
    description:
      "Car rental web-based platform that allows users to register as rental users and/or provider users. The rentals are allowed to search, request for booking, rate, and comment on the provider. The providers are allowed to manage and view their rented vehicles. Lastly, the website allows the renter and provider to chat through the browser to make an appointment and discuss the details.",
    tags: [
      {
        name: "nextJS",
        color: "blue-text-gradient",
      },
      {
        name: "postgresSQL",
        color: "green-text-gradient",
      },
      {
        name: "react",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link:
      "https://github.com/2110336-2565-2/sec2_group12_Vehicle4U.git",
  },
  {
    name: "Campgrounds Booking",
    description:
      "Campgrounds booking web-based platform that allows users to register as user role and admin role. Ordinary users to search, view details, and book the campground for up to 3 days. The admin role is allowed to add new campgrounds, edit information about the campground and also delete the campground. By the way, this project is focus on backend more than frontend.",
    tags: [
      {
        name: "javaScript",
        color: "blue-text-gradient",
      },
      {
        name: "mongoDB",
        color: "green-text-gradient",
      },
      {
        name: "react",
        color: "pink-text-gradient",
      },
    ],
    image: campgroundsBooking,
    source_code_link: "https://github.com/sshutter/SWProjectFrontend.git",
  },
  {
    name: "E-Commerce Website",
    description:
      "An e-commerce website that allows users to register as a seller, buyer, and admin role. Sellers are allowed to add, edit amounts, and view the sale history of the merchandise. The buyers are allowed to search, buy, and view the purchase history of the merchandise. The admin is allowed to all users and included to manage users' information. Lastly, All roles are allowed to view the top seller of a specific range.",
    tags: [
      {
        name: "ruby",
        color: "blue-text-gradient",
      },
      {
        name: "SQLite",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: rails,
    source_code_link: "https://github.com/",
  },
];
export { services, technologies, othersProjects, projects };
