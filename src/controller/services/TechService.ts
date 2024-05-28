import { Page } from "../../model/pages/Page";

const technologyPages: Page[] = [
  {
    name: "Bash",
    link: "https://en.wikipedia.org/wiki/Bash_(Unix_shell)",
  },
  {
    name: "Batch",
    link: "https://en.wikipedia.org/wiki/Batch_file",
  },
  {
    name: "C",
    link: "https://en.wikipedia.org/wiki/C_(programming_language)",
  },
  {
    name: "C++",
    link: "https://en.wikipedia.org/wiki/C%2B%2B",
  },
  {
    name: "C#",
    link: "https://docs.microsoft.com/en-us/dotnet/csharp/",
  },
  {
    name: "CMake",
    link: "https://cmake.org/",
  },
  {
    name: "WSL",
    link: "https://docs.microsoft.com/en-us/windows/wsl/install-win10",
  },
  {
    name: "Virtual Box",
    link: "https://www.virtualbox.org/",
  },
  {
    name: "Java",
    link: "https://www.java.com/en/",
  },
  {
    name: "HTML",
    link: "https://www.w3schools.com/html/",
  },
  {
    name: "CSS",
    link: "https://www.w3schools.com/css",
  },
  {
    name: "JavaScript",
    link: "https://en.wikipedia.org/wiki/JavaScript",
  },
  {
    name: "ReactJS",
    link: "https://react.dev/",
  },
  {
    name: "React Native",
    link: "https://reactnative.dev/",
  },
  {
    name: "Angular",
    link: "https://angular.dev/",
  },
  {
    name: "MongoDB",
    link: "https://www.mongodb.com/",
  },
  {
    name: "SQL",
    link: "https://en.wikipedia.org/wiki/SQL",
  },
  {
    name: "Front-End Development",
    link: "https://www.w3schools.com/whatis/whatis_frontenddev.asp",
  },
  {
    name: "Back-end Development",
    link: "https://www.coursera.org/articles/back-end-developer",
  },
  {
    name: "Full-stack Web Development",
    link: "https://www.w3schools.com/whatis/whatis_fullstack.asp",
  },
  {
    name: "App Development",
    link: "https://en.wikipedia.org/wiki/Mobile_app_development",
  },
  {
    name: "Automation",
    link: "https://en.wikipedia.org/wiki/Automation",
  },
  {
    name: "Software Architecture",
    link: "https://en.wikipedia.org/wiki/Software_architecture",
  },
  {
    name: "MATLAB",
    link: "https://www.mathworks.com/products/matlab.html",
  },
  {
    name: "R",
    link: "https://www.r-project.org/",
  },
  {
    name: "Python",
    link: "https://www.python.org/",
  },
  {
    name: "ROS (Robot Operating System)",
    link: "https://www.ros.org/",
  },
  {
    name: "Git",
    link: "https://git-scm.com/",
  },
  {
    name: "SVN",
    link: "https://subversion.apache.org/",
  },
];

export const getTechPages = (): Page[] => {
  return technologyPages;
};
