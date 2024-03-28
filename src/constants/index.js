import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  // redux,
  tailwind,
  // nodejs,
  // mongodb,
  git,
  figma,
  // docker,
  // meta,
  sjain,
  arosys,
  artech,
  // carrent,
  // jobit,
  // tripguide,
  premisin,
  leadangel,
  americanlearns,
  teksolvent,
  horecaalliance,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
    download : false,
  },
  {
    id: "work",
    title: "Work",
    download : false,
  },
  {
    id: "contact",
    title: "Contact",
    download : false,
    
  },
  {
    id: "resume",
    title: "Resume",
    download : true,
  },
];

const services = [
  {
    title: "UI UX Designer",
    icon: web,
  },
  {
    title: "UI Developer",
    icon: mobile,
  },
  {
    title: "Web Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
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
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  // {
  //   name: "Node JS",
  //   icon: nodejs,
  // },
  // {
  //   name: "MongoDB",
  //   icon: mongodb,
  // },
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
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "web developer intern",
    company_name: "sjain ventures pvt ltd",
    navLinks: "https://sjain.io/",
    icon: sjain,
    iconBg: "#383E56",
    date: "dec 2020 - june 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "UI UX Developer & Designer",
    company_name: "arosys technology pvt ltd",
    navLinks: "https://arosys.com/",
    icon: arosys,
    iconBg: "#E6DEDD",
    date: "Feb 2022 - Aug 2023",
    points: [
      "Developed wireframes and prototypes to validate user interactions with UI elements.",
      "Developed custom web application interfaces with HTML SASS and Angular Material to meet client requirements",
      "Supported conceptual thinking processes to generate customized digital services across multiple platforms.",
      "Worked with Frontend developer to oversee implementation of proper design specifications and guidelines.",
    ],
  },
  {
    title: "UI UX Designer",
    company_name: "artech alliance",
    navLinks: "https://artechalliance.com/",
    icon: artech,
    iconBg: "#383E56",
    date: "Feb 2024 - Present",
    points: [
      "Created high-fidelity designs for web, mobile and tablet applications.",
      "Collaborated with developers, bdm and team lead to ensure the successful implementation of design concepts.",
      "Optimized existing user interfaces by introducing new design elements.",
      "Established style guides and standards for graphic design across multiple platforms.",
      "Researched industry trends in UX and UI design techniques and technologies.",
    ],
  },
  
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Premisin",
    description:
      "Premisin: More than co-working—a vibrant hub for startups and entrepreneurs. Our modern spaces foster creativity with customizable amenities.",
    tags: [
      {
        name: "Codeigniter",
        color: "blue-text-gradient",
      },
      {
        name: "Javascript",
        color: "green-text-gradient",
      },
      {
        name: "MySQL",
        color: "pink-text-gradient",
      },
    ],
    image: premisin,
    source_code_link: "https://premisin.com/",
  },
  {
    name: "leadangel",
    description:
      "Maximize your leads and eliminate inefficiencies to save resources, time, and effort. With LeadAngel, streamline your sales process for enhanced lead conversion rates.",
    tags: [
      {
        name: "HTML/SCSS",
        color: "blue-text-gradient",
      },
      {
        name: "Angular Material",
        color: "green-text-gradient",
      },
      {
        name: "Figma",
        color: "pink-text-gradient",
      },
    ],
    image: leadangel,
    source_code_link: "https://www.leadangel.com/",
  },
  {
    name: "americanlearns",
    description:
      "Introducing the Impact Suite: Your comprehensive toolkit for streamlining social impact programs. Say goodbye to scattered files and spreadsheets, and hello to organized operations and peace of mind.",
    tags: [
      {
        name: "Java-script",
        color: "blue-text-gradient",
      },
      {
        name: "HTML",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: americanlearns,
    source_code_link: "https://americalearns.com/",
  },
  {
    name: "teksolvent",
    description:
      "Established with a commitment to excellence, Solvent delivers innovative solutions empowering businesses to thrive in the digital landscape.",
    tags: [
      {
        name: "Framer",
        color: "blue-text-gradient",
      },
      {
        name: "UI/UX",
        color: "green-text-gradient",
      },
      {
        name: "Reactjs",
        color: "pink-text-gradient",
      },
    ],
    image: teksolvent,
    source_code_link: "https://teksolvent.com/",
  },
  {
    name: "horecaalliance",
    description:
      "Horeca Alliance innovates group purchasing with transparency and efficiency. We streamline procurement, fostering dynamic connections for hotels, restaurants, and cafes.",
    tags: [
      {
        name: "UI/UX",
        color: "blue-text-gradient",
      },
      {
        name: "Content",
        color: "green-text-gradient",
      },
      {
        name: "Animation",
        color: "pink-text-gradient",
      },
    ],
    image: horecaalliance,
    source_code_link: "https://horecaalliance.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
