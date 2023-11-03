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
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  gh,
  goshen,
  visiola,
  greencity,
  carrent,
  jobit,
  tripguide,
  threejs,

  homplus, 
  kidd, 
  panix, 
  raco, 
  relish, 
  techbro, 
  vhospitality, 
  white, 
  GraphicHub, 
  goshen1, 
  online,
  flyer,

  facebook,
  instagram,
  linkedin,
  twitter,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Portfolio",
  },
  {
    id: "contact",
    title: "Contact",
  },
  {
    id: "blog",
    title: "Blog",
  },
];

const services = [
  {
    title: "Web Development",
    icon: web,
    subtitle: "Custom clean codes, all platform and mobile responsive with quality assurance"
  },
  {
    title: "Frontend Dev.",
    icon: mobile,
    subtitle: "Implement design aesthetics from Figma, Adobe XD into code using the most recent framework and technology."
  },
  {
    title: "Backend Dev.",
    icon: backend,
    subtitle: "Clean codes, web maintenance, quality assurance"
  },
  {
    title: "3D Visuals & Web Apps.",
    icon: creator,
    subtitle: "Combine empathy, creativity, and logic to meet the demands of users and achieve corporate success."
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
    name: "Figma",
    icon: figma,
  },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "The Goshen Group",
    company_name: "",
    icon: goshen,
    iconBg: "#E6DEDD",
    date: "Web Development, Brand Identity Design",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "GraphicsHub NG",
    company_name: "",
    icon: gh,
    iconBg: "#383E56",
    date: "Website Redesign & Development, Re-Branding ",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  
  {
    title: "GreenCity, Abuja",
    company_name: "",
    icon: greencity,
    iconBg: "#383E56",
    date: "Web Application Development",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  // {
  //   title: "STEM Instructor",
  //   company_name: "The Visiola Foundation ",
  //   icon: visiola,
  //   iconBg: "#E6DEDD",
  //   date: "October 2019 - November 2021",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but GraphicsHub proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like GraphicsHub does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After GraphicsHub optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "The Goshen Group",
    description:
      "A website for a Christian-based tech company focused on providing disruptive educational solutions leveraging information technology tools.",
      tags: [
        {
          name: "Bootstrap",
          color: "blue-text-gradient",
        },
        {
          name: "Visual Design",
          color: "green-text-gradient",
        },
        {
          name: "Brand Identity",
          color: "pink-text-gradient",
        },
      ],
    image: goshen1,
    source_code_link: "http://thegoshengroup.com.ng/",
  },
  {
    name: "V-Hospitality",
    description:
      "Web-based platform that allows users to search, book, and manage their stay within Abuja environs providing a convenient and efficient solution for luxury lodging needs.",
    tags: [
      {
        name: "ReactJS",
        color: "blue-text-gradient",
      },
      {
        name: "Laravel",
        color: "pink-text-gradient",
      },
      {
        name: "mySQL",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
   
    ],
    image: vhospitality,
    source_code_link: "https://bucolic-arithmetic-341a44.netlify.app/",
  },
  {
    name: "Raco Foods Limited",
    description:
      "A website for a food processing company committed to quality exports of agricultural products.",
    tags: [
      {
        name: "Bootstrap",
        color: "blue-text-gradient",
      },
      {
        name: "Visual Design",
        color: "green-text-gradient",
      },
      {
        name: "Brand Identity",
        color: "pink-text-gradient",
      },
    ],
    image: raco,
    source_code_link: "https://sparkly-zuccutto-3ed850.netlify.app/index.html",
  },
  {
    name: "White Diamond Holdings",
    description:
      "A website for a business conglomerate comprised of airlines, agriculture, ngo, textiles, general trading, health care, and investments. ",
      tags: [
        {
          name: "Bootstrap",
          color: "blue-text-gradient",
        },
        {
          name: "Visual Design",
          color: "green-text-gradient",
        },
        {
          name: "Brand Identity",
          color: "pink-text-gradient",
        },
      ],
    image: white,
    source_code_link: "https://willowy-peony-d38163.netlify.app/",
  },
  {
    name: "GraphicsHub",
    description:
      "A website for a premium design consultancy firm into design and development of 3D visuals, user interfaces & web applications.",
    tags: [
      {
        name: "ReactJS",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "green-text-gradient",
      },
      {
        name: "Three JS",
        color: "pink-text-gradient",
      },
    ],
    image: GraphicHub,
    source_code_link: "#",
  },
  {
    name: "Panix Technologies",
    description:
      "Panix Technologies is a solar energy company located in eastern Nigeria energizing unserved/underserved homes and businesses homes and businesses across Nigeria",
    tags: [
      {
        name: "Wordpress",
        color: "blue-text-gradient",
      },
      {
        name: "Elementor",
        color: "green-text-gradient",
      },
      {
        name: "CMS",
        color: "pink-text-gradient",
      },
    ],
    image: panix,
    source_code_link: "https://panixtechnologies.com/",
  },
  {
    name: "Relish Restaurants",
    description:
      "Relish mobile app project allows users to view the available food menus, ingredients used in the preparation, and recipes guide.",
    tags: [
      {
        name: "Flutter",
        color: "blue-text-gradient",
      },
      {
        name: "Dart",
        color: "green-text-gradient",
      },
      {
        name: "Visual Design",
        color: "pink-text-gradient",
      },
    ],
    image: relish,
    source_code_link: "https://asombachinonso.github.io/eca/#portfolio",
  },
  {
    name: "Kiddies",
    description:
      "An app that comes with both light and dark theme modes, It also comes with the latest flutter plugins like smooth page indicator, local storage, and demos REST API(s) calls",
    tags: [
      {
        name: "Flutter",
        color: "blue-text-gradient",
      },
      {
        name: "Dart",
        color: "green-text-gradient",
      },
      {
        name: "Visual Design",
        color: "pink-text-gradient",
      },
    ],
    image: kidd,
    source_code_link: "https://asombachinonso.github.io/eca/#portfolio",
  },
  {
    name: "Homplus",
    description:
      "Project HOMPLUS is a mobile app, IOT comfort lamp software developed in order to make a normal reading lamp smart and fun to use.",
    tags: [
      {
        name: "Ionic",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "MQTT",
        color: "pink-text-gradient",
      },
    ],
    image: homplus,
    source_code_link: "https://asombachinonso.github.io/eca/#portfolio",
  },
  {
    name: "TechBro E-portfolio",
    description:
      "An e-portfolio single page application (SPA) that provides information about web owner.",
    tags: [
      {
        name: "Reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind CSS",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: techbro,
    source_code_link: "https://sparkling-travesseiro-2b3712.netlify.app/",
  },
  // {
  //   name: "Brand Identity Works",
  //   description:
  //     "A collection of our years of experience meeting the social and print media needs of various client across myriad industries. ",
  //   tags: [
  //     {
  //       name: "Photoshop",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "Illustrator",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "Brand Identity",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: flyer,
  //   source_code_link: "https://www.instagram.com/graphicshub_nigeria/",
  // },
];

const footerLinks = [
  {
    title: "Useful Links",
    links: [
      {
        name: "Our Services",
        link: "#about",
      },
      {
        name: "Case Studies",
        link: "#experience",
      },
      {
        name: "Our Portfolio",
        link: "#work",
      },
      {
        name: "Contact Us",
        link: "#contact",
      },
      {
        name: "Terms & Services",
        link: "#",
      },
    ],
  },
  {
    title: "Community",
    links: [
      {
        name: "Help Center",
        link: "#",
      },
      {
        name: "Partners",
        link: "#",
      },
      {
        name: "Suggestions",
        link: "#",
      },
      {
        name: "Blog",
        link: "#",
      },
      {
        name: "Newsletters",
        link: "#",
      },
    ],
  },
  {
    title: "Partner",
    links: [
      {
        name: "Our Partner",
        link: "#",
      },
      {
        name: "Become a Partner",
        link: "#",
      },
    ],
  },
];

const socialMedia = [
  {
    id: "social-media-1",
    icon: instagram,
    link: "https://www.instagram.com/graphicshub_nigeria/",
  },
  {
    id: "social-media-2",
    icon: linkedin,
    link: "https://www.linkedin.com/company/graphicshub-nigeria/",
  },
  {
    id: "social-media-3",
    icon: facebook,
    link: "#",
  },
  {
    id: "social-media-4",
    icon: twitter,
    link: "#",
  },

];

export { services, technologies, experiences, testimonials, projects, footerLinks, socialMedia };
