let info = {
  name: "Gustavo A. Reyes",
  logo_name: "Gustavo Reyes",
  flat_picture: require("./src/assets/profile.png"),
  config: {
    use_cookies: true,
    navbar: {
      blur: false
    }
  },
  email: "greyescarrion@gmail.com",
  description1:
    "My name is Gustavo, I'm a software engineer and full-stack web developer based in NY. \
    I graduated in 2019 with a B.S. in Computer Engineering from the University of Puerto Rico\
    and have been working as a software engineer ever since.",
  description2:
    "Most of my current work involves image processing, AI, and geo-spatial software development.\
    However I have plenty of current and past projects that mainly focus on full-stack web and game development.\
    I try to grow those skillsets by working on fun personal projects in my spare time.",
  description3:
    "This website is meant to serve as a portfolio and devlog for my latest work. \
    I intend to fill out this portfolio with a variety of projects, mostly as practice \
    for new concepts I want to learn. Feel free to contact me if you're interested in my work or have any questions.",
  links: {
    linkedin: "https://www.linkedin.com/in/gustavo-reyes-886423129/",
    github: "https://github.com/GarcGustavo"
  },
  education: [
    {
      name: "University of Puerto Rico: Mayaguez",
      place: "Puerto Rico",
      date: "Dec, 2019",
      degree: "Bachelor's Degree in Computer Engineering"
    },
  ],
  skills: [
    {
      title: "Languages",
      info: [
        "C#",
        "C/C++",
        "Python",
        "HTML/CSS/Javascript"],
      icon: "fa fa-code"
    },
    {
      title: "Frameworks",
      info: [
        "Vue.js",
        "React.js",
        "Bootstrap"
      ],
      icon: "fa fa-laptop-code"
    },
    {
      title: "Backend",
      info: [
        "Django",
        ".NET",
        "Node.js",
        "MySQL/PostgreSQL"],
      icon: "fas fa-cubes"
    },
    {
      title: "Tools",
      info: [
        "Git/TortoiseSVN",
        "Jira/Confluence",
        "Jenkins and Docker"],
      icon: "fas fa-tools"
    },
    {
      title: "Engines",
      info: [
        "Unity",
        "Unreal Engine"],
      icon: "fas fa-gamepad"
    },
    {
      title: "Interests",
      info: [
        "Game development",
        "Web development",
        "Rock Climbing"],
      icon: "fas fa-volleyball-ball"
    },

  ],
  portfolio: [
    {
      project1: require("./src/assets/logo.png"),
      project2: require("./src/assets/logo.png"),
      project3: require("./src/assets/logo.png"),
      project4: require("./src/assets/logo.png"),
      name: "Test Project",
      pictures: [
        {
        }
      ],
      category: "Web App",
      date: "Aug, 2021 - 10 days",
      github: "https://github.com/GarcGustavo/test.git",
      visit: "https://github.com/GarcGustavo/test.git",
      description: "Test"
    },
    {
      name: "Test Project",
      pictures: [
        {
        }
      ],
      category: "Web App",
      date: "Aug, 2021 - 10 days",
      github: "https://github.com/GarcGustavo/test.git",
      visit: "https://github.com/GarcGustavo/test.git",
      description: "Test"
    },
    {
      name: "Test Project",
      pictures: [
        {
          //img: require("")
        }
      ],
      category: "Web App",
      date: "Aug, 2021 - 10 days",
      github: "https://github.com/GarcGustavo/test.git",
      visit: "https://github.com/GarcGustavo/test.git",
      description: "Test"
    }
  ]
};

export default info;
