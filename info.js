let info = {
  name: "Gustavo A. Reyes",
  logo_name: "Gustavo Reyes",
  flat_picture: require("./src/assets/shibe.jpeg"),
  config: {
    use_cookies: true,
    navbar: {
      blur: false
    }
  },
  description:
    "My name is Gustavo, I'm a software engineer and full-stack web developer. This website is meant to serve as a portfolio and devlog for my latest projects. Feel free to contact me with any questions or work inquiries.",
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
        "Javascript"],
      icon: "fa fa-code"
    },
    {
      title: "Frameworks",
      info: [
        "VueJS",
        "React",
        "Node",
        "Django"],
      icon: "fa fa-cubes"
    },
    {
      title: "Back-end",
      info: ["SQL", "MySQL", "Node"],
      icon: "fas fa-laptop-code"
    }
  ],
  portfolio: [
    {
      name: "Test Project",
      pictures: [
        {
          img: require("./src/assets/portfolio/myflix.com/1.png")
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
          img: require("./src/assets/portfolio/myflix.com/1.png")
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
          img: require("./src/assets/portfolio/myflix.com/1.png")
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
