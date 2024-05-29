import { Skill } from "../../model/skills/Skill";

const skills: Skill[] = [
  {
    name: "Bash",
    link: "https://en.wikipedia.org/wiki/Bash_(Unix_shell)",
    progress: 65,
  },
  {
    name: "Batch",
    link: "https://en.wikipedia.org/wiki/Batch_file",
    progress: 65,
  },
  {
    name: "C",
    link: "https://en.wikipedia.org/wiki/C_(programming_language)",
    progress: 25,
  },
  {
    name: "C++",
    link: "https://en.wikipedia.org/wiki/C%2B%2B",
    progress: 15,
  },
  {
    name: "C#",
    link: "https://docs.microsoft.com/en-us/dotnet/csharp/",
    progress: 5,
  },
  {
    name: "CMake",
    link: "https://cmake.org/",
    progress: 35,
  },
  {
    name: "WSL",
    link: "https://docs.microsoft.com/en-us/windows/wsl/install-win10",
    progress: 65,
  },
  {
    name: "Virtual Box",
    link: "https://www.virtualbox.org/",
    progress: 65,
  },
  {
    name: "Java",
    link: "https://www.java.com/en/",
    progress: 65,
  },
  {
    name: "HTML",
    link: "https://www.w3schools.com/html/",
    progress: 95,
  },
  {
    name: "CSS",
    link: "https://www.w3schools.com/css",
    progress: 95,
  },
  {
    name: "JavaScript",
    link: "https://en.wikipedia.org/wiki/JavaScript",
    progress: 90,
  },
  {
    name: "ReactJS",
    link: "https://react.dev/",
    progress: 85,
  },
  {
    name: "React Native",
    link: "https://reactnative.dev/",
    progress: 70,
  },
  {
    name: "Angular",
    link: "https://angular.dev/",
    progress: 85,
  },
  {
    name: "MongoDB",
    link: "https://www.mongodb.com/",
    progress: 70,
  },
  {
    name: "SQL",
    link: "https://en.wikipedia.org/wiki/SQL",
    progress: 65,
  },
  {
    name: "AWS",
    link: "https://aws.amazon.com/",
    progress: 40,
  },
  {
    name: "Front-End Development",
    link: "https://www.w3schools.com/whatis/whatis_frontenddev.asp",
    progress: 90,
  },
  {
    name: "Back-end Development",
    link: "https://www.coursera.org/articles/back-end-developer",
    progress: 75,
  },
  {
    name: "Full-stack Web Development",
    link: "https://www.w3schools.com/whatis/whatis_fullstack.asp",
    progress: 87.5,
  },
  {
    name: "App Development",
    link: "https://en.wikipedia.org/wiki/Mobile_app_development",
    progress: 80,
  },
  {
    name: "Automation",
    link: "https://en.wikipedia.org/wiki/Automation",
    progress: 60,
  },
  {
    name: "Software Architecture",
    link: "https://en.wikipedia.org/wiki/Software_architecture",
    progress: 60,
  },
  {
    name: "MATLAB",
    link: "https://www.mathworks.com/products/matlab.html",
    progress: 60,
  },
  {
    name: "R",
    link: "https://www.r-project.org/",
    progress: 30,
  },
  {
    name: "Python",
    link: "https://www.python.org/",
    progress: 80,
  },
  {
    name: "ROS (Robot Operating System)",
    link: "https://www.ros.org/",
    progress: 80,
  },
  {
    name: "Git",
    link: "https://git-scm.com/",
    progress: 80,
  },
  {
    name: "SVN",
    link: "https://subversion.apache.org/",
    progress: 50,
  },
];

export const getSkills = (): Skill[] => {
  return skills;
};
