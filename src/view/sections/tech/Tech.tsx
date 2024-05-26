import { Page } from "../../../model/pages/Page";
import "./Tech.css";

export const Tech = () => {
  const technologies: Page[] = [
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
      link: "https://en.wikipedia.org/wiki/HTML",
    },
    {
      name: "CSS",
      link: "https://en.wikipedia.org/wiki/CSS",
    },
    {
      name: "JavaScript",
      link: "https://en.wikipedia.org/wiki/JavaScript",
    },
    {
      name: "ReactJS",
      link: "https://reactjs.org/",
    },
    {
      name: "React Native",
      link: "https://reactnative.dev/",
    },
    {
      name: "SQL",
      link: "https://en.wikipedia.org/wiki/SQL",
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
      name: "Git",
      link: "https://git-scm.com/",
    },
    {
      name: "SVN",
      link: "https://subversion.apache.org/",
    },
  ];

  return (
    <div id="tech" className="section-content">
      <h1>Technological Experience</h1>
      <div className="tech-container">
        {technologies &&
          technologies.map((tech, index) => (
            <a
              key={index}
              href={tech.link}
              target="_blank"
              rel="noopener noreferrer"
              className="tech-links new-page-link"
            >
              {tech.name}
            </a>
          ))}
      </div>
    </div>
  );
};
