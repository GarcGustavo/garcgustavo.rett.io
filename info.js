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
  description:
    "My name is Gustavo, I'm a software engineer and full-stack web developer based in NY. \
    This website is meant to serve as a portfolio and devlog for my latest projects. \
    I intend to fill out this portfolio with a variety of projects, mostly as practice \
    for new concepts I want to learn. Feel free to contact me if you're interested in my work.",
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
        "Vue.js",
        "React.js",
        "Bootstrap",
        "Unity"
      ],
      icon: "fa fa-cubes"
    },
    {
      title: "Backend",
      info: [
        "Node.js",
        "Django",
        ".NET",
        "MySQL", 
        "PostgreSQL"],
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
