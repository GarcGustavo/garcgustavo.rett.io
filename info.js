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
    "I'm a Software Engineer focused on .NET development based in NY. \
    I graduated in 2019 with a B.S. in Computer Engineering from the University of Puerto Rico\
    and have been working as a software engineer ever since.",
  description2:
    "Most of my current work involves using .NET to construct a variety of desktop and web applications \
    for enterprise printing press software. I have a passion for making \
    fun games, webapps, and other projects in my spare time.\
    ",
  description3:
    "I'm currently re-working this site and my devlog to properly showcase some past projects. \
    While this site may still be under active development \
    please feel free to browse my Github or reach out to me if you have any questions.",
  links: {
    linkedin: "https://www.linkedin.com/in/gustavo-reyes-886423129/",
    github: "https://github.com/GarcGustavo",
    devlog: "https://garcdev.com"
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
        "Unity",
        ".NET",
        "VueJS"
      ],
      icon: "fa fa-laptop-code"
    },
    {
      title: "Backend",
      info: [
        "NodeJS",
        "Django",
        "MySQL/PostgreSQL"],
      icon: "fas fa-cubes"
    }
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
