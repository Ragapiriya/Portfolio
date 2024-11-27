export const dataOfSkills = [
  {
    title: "Frontend",
    icon: "./Assets/images/frontend2.png",

    skills: [
      { skill: "HTML5", percentage: "85%" },
      { skill: "CSS3", percentage: "90%" },
      { skill: "JavaScript", percentage: "70%" },
      { skill: "React.js", percentage: "95%" },
    ],
  },
  {
    title: "Backend",
    icon: "./Assets/images/backend2.png",
    skills: [
      { skill: "Node.js", percentage: "85%" },
      { skill: "Express.js", percentage: "85%" },
    ],
  },

  {
    title: "Programming Languages",
    icon: "./Assets/images/prog2.png",
    skills: [
      { skill: "JAVA", percentage: "90%" },
      { skill: "C", percentage: "90%" },
      { skill: "Python", percentage: "75%" },
      { skill: "JavaScript", percentage: "80%" },
      { skill: "R", percentage: "75%" },
    ],
  },
  {
    title: "Software Tools",
    icon: "./Assets/images/tools4.png",
    skills: [
      { skill: "Adobe Illustrator", percentage: "65%" },
      { skill: "Adobe Photoshop", percentage: "70%" },
      { skill: "Adobe Lightroom", percentage: "85%" },
      { skill: "AWS", percentage: "15%" },
      { skill: "Canva", percentage: "80%" },
      { skill: "Eclipse", percentage: "70%" },
      { skill: "Figma", percentage: "70%" },
      { skill: "Jira", percentage: "70%" },
      { skill: "Git & GitHub", percentage: "80%" },
      { skill: "Postman", percentage: "85%" },
      { skill: "PowerBI", percentage: "70%" },
      { skill: "Visual Studio Code", percentage: "90%" },
    ],
  },
  {
    title: "DataBase",
    icon: "./Assets/images/db.png",
    skills: [
      { skill: "MongoDB", percentage: "80%" },
      { skill: "MySQL", percentage: "60%" },
    ],
  },
];
export const projects = [
  {
    title: "1. FixItFast ➺",
    year: "2024 October",
    type: "Individual",
    description: [
      "Developed a Vehicle Service Reservation Web Application.",
      "Technologies & Security: Implemented role-based access control (RBAC) using Auth0, user authentication with OIDC/SAML protocols, and mitigated OWASP Top 10 vulnerabilities including injection attacks, outdated components, and data integrity failures.",
      " Key Features: User & Admin Roles: Separate user and admin dashboards with access control managed via tokens. Reservation Management: Users can book, view, and manage past and upcoming service reservations and view user profile. Admin Controls: Admins can view all reservations, and track user details. Enhanced Security: Secure authentication and access control, aligning with best practices.",
      "Technologies used: ",
    ],
    technologies: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "Auth0",
      "JWT",
      "OAuth2",
      "SAML",
    ],
    screenshot: [
      process.env.PUBLIC_URL + "/Assets/images/fixitfast1.png",
      process.env.PUBLIC_URL + "/Assets/images/fixitfast2.png",
      process.env.PUBLIC_URL + "/Assets/images/fixitfast3.png",
      process.env.PUBLIC_URL + "/Assets/images/fixitfast4.png",
      process.env.PUBLIC_URL + "/Assets/images/fixitfast5.png",
      process.env.PUBLIC_URL + "/Assets/images/fixitfast6.png",
    ],
    link: "https://github.com/Ragapiriya/FixItFast",
  },
  {
    title: "2. ForShopaholic ➺",
    year: "2024 June",
    type: "Individual",
    description: [
      "Currently Developing a full-stack e-commerce application. An exclusive E-store for Cosmetics and Skincare.",
      "Technologies used: ",
    ],
    technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "Bootstrap"],

    link: "https://github.com/Ragapiriya/ForShopaholic",
  },

  {
    title: "3. Perfume shop ➺",
    year: "2024 March",
    type: "Group",
    description: [
      "Developed an online platform for purchasing a range of perfumes.",
      "Contributions: Contributed to the Front-end development using React.js",
      " Features: User Authentication: Sign-up and sign-in functionality to secure user access. Product Browsing & Checkout: Smooth navigation for browsing perfumes, adding items to the cart, and checking out. Order Management: Users can view order history and track purchases.",
      "Technologies used: ",
    ],
    technologies: ["React.js", "Springboot", "MySql", "Bootstrap"],
    link: "https://github.com/Thenujan-V/Perfume_shop_web_app.git",
  },

  {
    title: "4. School Management  ➺",
    year: "2024 August",
    type: "Group",
    description: [
      "Developed a school student management system to manage personal student data, timetables, and upcoming events.",
      "Contributions: Contributed to both Front-end & back-end development",
      " Features: Store and update student information, view profiles, timetable display, manage school events. ",

      "Technologies used: ",
    ],
    technologies: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "Tailwind CSS",
    ],
    screenshot: [
      process.env.PUBLIC_URL + "/Assets/images/schl1.png",
      process.env.PUBLIC_URL + "/Assets/images/scl2.png",
      process.env.PUBLIC_URL + "/Assets/images/scl3.png",
      process.env.PUBLIC_URL + "/Assets/images/scl4.png",
      process.env.PUBLIC_URL + "/Assets/images/scl5.png",
      process.env.PUBLIC_URL + "/Assets/images/scl6.png",
    ],
    link: "https://github.com/Sathiskumarssf/School-management",
  },
  {
    title: "5. School Management simple ➺",
    year: "2024 November",
    type: "Individual",
    description: [
      "Developing a school student management system.",
      " Features: Managing Student informations",

      "Technologies used: ",
    ],
    technologies: ["HTML", "CSS", "Node.js", "Express.js", "MySQL"],

    link: "https://github.com/Ragapiriya/Student-Management-simple",
  },
  {
    title: "6. ToDo app ➺",
    year: "2024 May",
    type: "Individual",
    description: [
      "This application offers full task management functionality, allowing users to create new tasks, edit existing ones, and delete tasks they no longer need. Users can easily add tasks to keep track of their to-do items or project milestones, modify task details as requirements change, and remove tasks to maintain an organized task list. The streamlined design ensures that task creation, updating, and deletion are intuitive, making it easy to stay on top of personal or collaborative tasks efficiently.",
      "Technologies used:",
    ],
    technologies: ["MongoDB", "Express.js", "React.js", "Node.js"],
    screenshot: [process.env.PUBLIC_URL + "/Assets/images/todo.png"],
    link: "https://github.com/Ragapiriya/ToDoList.git",
  },
  {
    title: "7. Weather App ➺",
    year: "2024 May",
    type: "Individual",
    description: ["Technologies used: "],
    technologies: ["JavaScript", "CSS", "APIs"],
    screenshot: [
      process.env.PUBLIC_URL + "/Assets/images/weather1.png",
      process.env.PUBLIC_URL + "/Assets/images/weather.png",
    ],

    link: "https://github.com/Ragapiriya/WeatherApplication.git",
  },
  {
    title: "8. Stop Watch ➺",
    year: "2024 May",
    type: "Individual",
    description: ["Technologies used: "],
    technologies: ["JavaScript", "CSS", "APIs"],
    screenshot: [process.env.PUBLIC_URL + "/Assets/images/stopwatch.png"],

    link: "https://github.com/Ragapiriya/StopWatch.git",
  },
];

export const blogs = [
  {
    title: "1.📃Software Licenses ➺",
    year: "2023 September 14",
    type: "Single Article",
    description: [
      "This article discusses essential concepts, including the importance of software licensing, the components of software license agreement, various types of software licenses, different approaches to software licensing and the distinction between ownership vs licensing.",
    ],
    keywords: [
      "#licensing",
      "#ownership",
      "#copyleft",
      "#public domain",
      "#software license",
    ],
    link: "https://medium.com/@r2001piriya/software-licenses-688eab7ab1e5",
  },
  {
    title: "2.🚀 Master Java Object-Oriented Programming (OOP) concepts ➺",
    year: "2024 November 02",
    type: "List",
    description: [
      "I've written a series of blogs covering key OOP topics. Feel free to dive in.😇🏊 ",
    ],
    keywords: [
      "#java",
      "#OOP",
      "#Programming",
      "#inheritance",
      "#polymorphism",
      "#abstraction",
      "#encapsulation",
      "#accessModifiers",
      "#methodOverloading",
    ],
    link: "https://medium.com/@r2001piriya/list/master-java-objectoriented-programming-oop-concepts-536b24ee7739",
  },
  {
    title:
      "3.🛡️💪Securing Your MERN Application: A Comprehensive Guide to Auth0 and Role-Based Access Control ➺",
    year: "2024 October 18",
    type: "Single Article",
    description: [
      "In this blog post, I’ll explore the key elements of implementing authentication and authorization in web applications, highlighting the robust features offered by Auth0.",
    ],
    keywords: ["#Auth0", "#Mern Stack", "#RBAC"],
    link: "https://medium.com/@r2001piriya/securing-your-mern-application-a-comprehensive-guide-to-auth0-and-role-based-access-control-2c6487f125b8",
  },
  {
    title:
      "4. Fortifying Your MERN Application: Implementing OWASP Top 10 Vulnerability Mitigation and OIDC Authentication ➺",
    year: "2024 October 18",
    type: "Single Article",
    description: [
      "This article will cover the implementation of security features in my recent project, FixItFast.",
    ],
    keywords: [
      "#Mern Stack",
      "OWASP",
      "#vulnerability mitigation",
      "#fixitfast",
    ],
    link: "https://medium.com/@r2001piriya/fortifying-your-mern-application-implementing-owasp-top-10-vulnerability-mitigation-and-oidc-675572980be6",
  },
];

export const certificates = [
  {
    category: "HackerRank",
    name: "Python(Basic)",
    link: "https://www.hackerrank.com/certificates/1bda07fa1975",
  },
  {
    category: "HackerRank",
    name: "React(Basic)",
    link: "https://www.hackerrank.com/certificates/f458accf2d1b",
  },
  {
    category: "Coursera",
    name: "Foundations of User Experience (UX) Design",
    link: "https://www.coursera.org/account/accomplishments/verify/3LNGC3E5YXP6?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course",
  },
  {
    category: "SoloLearn",
    name: "Python Developer",
    link: "https://www.sololearn.com/en/certificates/CC-HCSPSAWM",
  },
  {
    category: "SoloLearn",
    name: "C",
    link: "https://www.sololearn.com/en/certificates/CT-RSUCO795",
  },
  {
    category: "Alison",
    name: "Diploma in C Programming",
    link: "https://drive.google.com/file/d/1xJSd4jG-dTZ3uf9mYsv7Aovh7iQNCbOm/view",
  },
  {
    category: "Alison",
    name: "JavaScript Application Programming",
    link: "https://drive.google.com/file/d/1gJp4X9KY0atnF1fSka9bFPzVlfAU-yqC/view",
  },
  {
    category: "Alison",
    name: "JavaScript for Dynamic and Interactive Web Pages",
    link: "https://drive.google.com/file/d/1MQuM9P7oW1JJnbAolVEqnUws-p_xruSW/view",
  },
  {
    category: "Alison",
    name: "Diploma in Website Development Using HTML and CSS",
    link: "https://drive.google.com/file/d/13JEJw2EvBWOBfK-5hoS_z_HlgZWojSw5/view",
  },
  {
    category: "Alison",
    name: "Linux for Absolute Beginners",
    link: "https://drive.google.com/file/d/11BPT_zsaSJuDma9hB9KCDKeawdVOpuX8/view",
  },
  {
    category: "CODL UOM",
    name: "Python for beginners",
    link: "https://drive.google.com/file/d/1M9X2vESLKgksh2gvvkm0VVwNEXPhOl-n/view?usp=sharing",
  },
];
