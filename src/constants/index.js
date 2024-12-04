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
    deralogo,
    appscyclone,
    bmweblogo,

    finsweet,
    travelweb,
    sunnypf,
    ecoshop,
    ecocase,
    wellbe,

    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Front-End Developer",
      icon: web,
    },
    {
      title: "UI/UX Design",
      icon: mobile,
    },
    {
      title: "Backend Developer",
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
  
  const experiences = [
    {
      title: "Intern Front-End Developer",
      company_name: "Apps Cyclone Technology JSC",
      icon: appscyclone,
      iconBg: "#ffffff",
      date: "December 2023 - Febuary 2024",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    }, 
    {
      title: "Intern Front-End Developer",
      company_name: "Derasoft Co., Ltd",
      icon: deralogo,
      iconBg: "#ffffff",
      date: "April 2024 - June 2024",
      points: [
        "Developed and maintained scalable web applications using React.js and TypeScript",
        "Utilized Docker for containerized development environments to ensure consistency across multiple setups.",
        "Collaborated with cross-functional teams, including designers and backend developers, to deliver feature-rich and user-friendly products",
        "Implemented responsive and adaptive designs, ensuring seamless performance across various devices and browsers",
        "Participated in Agile workflows, contributing to sprint planning and task prioritization.",
        "Conducted code reviews and provided feedback to improve code quality and maintain best practices.",
      ],
    },
    {
      title: "Sales Webite",
      company_name: "BM Web",
      icon: bmweblogo,
      iconBg: "#ffffff",
      date: "August 2024 - October 2024",
      points: [
        "Contacting potential customers via phone to promote products and services, building strong client relationships.",
        "Identifying customer needs and providing tailored solutions to increase sales and satisfaction.",
        "Maintaining detailed records of customer interactions and following up to ensure successful conversions.",
        "Collaborating with the sales and marketing teams to refine strategies and meet performance targets.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Nam quickly adapted to our team during his internship and delivered exceptional work. His ability to bring creative ideas to the table was invaluable to the project.",
      name: "Pham Hong An",
      designation: "Senior Front-End Developer",
      company: "Apps Cyclone Technology JSC",
      image: appscyclone,
    },
    {
      testimonial:
        "As an intern, Nam demonstrated impressive technical skills and a strong work ethic. His contributions helped us improve our website's user experience significantly.",
      name: "Vo Nguyen Xuan Hao",
      designation: "CEO",
      company: "Derasoft Co., Ltd",
      image: deralogo,

    },
    {
      testimonial:
         "Nam demonstrated exceptional customer service and problem-solving skills during his internship. His ability to understand client needs made him a valuable part of our sales team.",
      name: "Duong Duc",
      designation: "Sales Leader",
      company: "BM Web",
      image: bmweblogo,
    },
  ];
  
  const projects = [
    {
      name: "Finsweet Website",
      description:
        "A visually engaging landing page developed for Finsweet, featuring interactive elements and optimized for an impactful advertising campaign.",
      tags: [
        {
          name: "html",
          color: "orange-text-gradient",
        },
        {
          name: "css",
          color: "blue-text-gradient",
        },
        {
          name: "javascripts",
          color: "pink-text-gradient",
        },
      ],
      image: finsweet,
      source_code_link: "https://github.com/Shunadesu/Intern-Fin",
      source_code_demo: "https://finsweetsunny.netlify.app/"
    },
    {
      name: "Travel Web",
      description:
        "A captivating travel website with interactive animations designed to engage users and enhance the browsing experience, making travel planning more exciting and intuitive.",
        tags: [
          {
            name: "html",
            color: "orange-text-gradient",
          },
          {
            name: "css",
            color: "blue-text-gradient",
          },
          {
            name: "javascripts",
            color: "pink-text-gradient",
          },
        ],
      image: travelweb,
      source_code_link: "https://github.com/Shunadesu/TravelWeb",
      source_code_demo: "https://webtravelsunny.netlify.app/"
    },
    {
      name: "Sunny Profile",
      description:
        "A React.js-based profile created during my internship, demonstrating my ability to build responsive and interactive web applications, with smooth transitions",
      tags: [
        {
          name: "reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "tailwindcss",
          color: "green-text-gradient",
        },
        {
          name: "redux",
          color: "pink-text-gradient",
        },
      ],
      image: sunnypf,
      source_code_link: "https://github.com/Shunadesu/sunnypf",
      source_code_demo: "https://sunnypf.vercel.app/",
    },

    {
      name: "Eco Shope",
      description:
        "A React.js-based ecoshop created during my internship at Derasoft, demonstrating my ability to build responsive and interactive web applications, have all CRUD features",
      tags: [
        {
          name: "reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "tailwindcss",
          color: "green-text-gradient",
        },
        {
          name: "redux-toolkit",
          color: "pink-text-gradient",
        },
      ],
      image: ecoshop,
      source_code_link: "https://github.com/Shunadesu/Intern_Dera",
      source_code_demo: "https://intern-dera.vercel.app/",
    },

    {
      name: "Eco Case",
      description:
        "A Next.js created during my internship, demonstrating my ability to build responsive and interactive web applications",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "typescript",
          color: "green-text-gradient",
        },
        {
          name: "redux-toolkit",
          color: "pink-text-gradient",
        },
        {
          name: "kindaAuth",
          color: "orange-text-gradient",
        },
      ],
      image: ecocase,
      source_code_link: "https://github.com/Shunadesu/ecocase",
      source_code_demo: "https://sunnypf.vercel.app/",
    },

    {
      name: "WellBe",
      description:
      "A visually engaging landing page developed for Wellbe, featuring interactive elements and optimized for an impactful advertising campaign.",
        tags: [
          {
            name: "html",
            color: "orange-text-gradient",
          },
          {
            name: "css",
            color: "blue-text-gradient",
          },
          {
            name: "javascripts",
            color: "pink-text-gradient",
          },
        ],
      image: wellbe,
      source_code_link: "https://github.com/Shunadesu/InternDeraIII",
      source_code_demo: "https://intern-dera-iii.vercel.app/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };