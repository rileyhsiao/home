// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Chu-Yun",
  middleName: "(Riley)",
  lastName: "Hsiao",
  message: " Passionate about changing the world with technology. ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/rileyhsiao",
    },

    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/chu-yun-hsiao",
    },
    
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: "../editable-stuff/IMG_1315.png",
  imageSize: 400,
  message:
    "My name is Chu-Yun (Riley) Hsiao. I’m a graduate of 2024 from Purdue University with a Master's degree in Business Analyst and Information Management. I'm most passionate about giving back to the community, and my goal is to pursue this passion within the field of Data analyst.",
  resume: "https://drive.google.com/file/d/18oXalE6qkYSGW_j70w_IR0W6pMCfUbpI/view?usp=drive_link",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "rileyhsiao", //i.e."johnDoe12Gh"
  reposLength: 4,
  specificRepos: [],
};

// Leadership SECTION
const achievement = {
  show: true,
  heading: "Achievement",
  message:
    "This project, conducted with a major insurance company, integrates data analytics and machine learning to optimize the home insurance inspection process. By addressing key questions about the current inspection algorithm, we combined quantitative analysis of home inspection data with expert insights. Our predictive modeling, implemented in Python, enhanced risk factor analysis, leading to a more targeted approach in identifying properties needing inspection. This optimization improved resource allocation and customer satisfaction. The Random Forest model, with an ROC AUC score of 0.89, proved superior, demonstrating its accuracy and reliability in classifying properties and minimizing redundant underwriting expenses.",
  images: [
    { 
      img: require("../editable-stuff/Poster Final .jpg"), 
      label: "Poster", 
      paragraph: "" 
    }
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};





// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Python", value: 90 },
    { name: "SQL", value: 90 },
    { name: "Data Structures", value: 85 },
    { name: "Tableau", value: 90 },
    { name: "AWS", value: 90 },
    { name: "R", value: 80 },
    { name: "SAS EM", value: 80 },
    { name: "Excel Spreadsheet", value: 80 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 80 },
    { name: "Collaboration", value: 90 },
    { name: "Positivity", value: 90 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 75 },
    { name: "Empathy", value: 90 },
    { name: "Organization", value: 70 },
    { name: "Creativity", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for full-time Data analyzing or Machine Learning opportunities! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "hsiao56@purdue.edu",
};

const experiences = {
  show: true,
  heading: "Experiences",
  data: [
    {
      role: 'Business Analyst Intern, Indiana Farm Bureau',
      companylogo: require('../assets/img/farmbureau.png'),
      date: 'Jan 2024 – Apr 2024',
    },
    {
      role: 'Financial Foreign Exchange Specialist, E.Sun Commercial Bank LTD.', 
      companylogo: require('../assets/img/E.sun.jpeg'),
      date: 'Oct 2019 – Oct 2022',
    },
  ]
}

// Blog SECTION
// const blog = {
//   show: true,
// };

export { navBar, mainBody, about, repos, skills, achievement, getInTouch, experiences };
