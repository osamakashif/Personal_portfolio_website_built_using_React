import "./Tech.css";

export const Tech = () => {
  const technologies = [
    {
      name: "Bash",
      website: "https://en.wikipedia.org/wiki/Bash_(Unix_shell)",
    },
    {
      name: "Batch",
      website: "https://en.wikipedia.org/wiki/Batch_file",
    },
    {
      name: "C",
      website: "https://en.wikipedia.org/wiki/C_(programming_language)",
    },
    {
      name: "C++",
      website: "https://en.wikipedia.org/wiki/C%2B%2B",
    },
    {
      name: "C#",
      website: "https://docs.microsoft.com/en-us/dotnet/csharp/",
    },
    {
      name: "CMake",
      website: "https://cmake.org/",
    },
    {
      name: "WSL",
      website: "https://docs.microsoft.com/en-us/windows/wsl/install-win10",
    },
    {
      name: "Virtual Box",
      website: "https://www.virtualbox.org/",
    },
    {
      name: "Java",
      website: "https://www.java.com/en/",
    },
    {
      name: "HTML",
      website: "https://en.wikipedia.org/wiki/C_(programming_language)",
    },
    {
      name: "CSS",
      website: "https://en.wikipedia.org/wiki/CSS",
    },
    {
      name: "JavaScript",
      website: "https://en.wikipedia.org/wiki/JavaScript",
    },
    {
      name: "ReactJS",
      website: "https://reactjs.org/",
    },
    {
      name: "React Native",
      website: "https://reactnative.dev/",
    },
    {
      name: "SQL",
      website: "https://en.wikipedia.org/wiki/SQL",
    },
    {
      name: "MATLAB",
      website: "https://www.mathworks.com/products/matlab.html",
    },
    {
      name: "R",
      website: "https://www.r-project.org/",
    },
    {
      name: "Python",
      website: "https://www.python.org/",
    },
    {
      name: "Git",
      website: "https://git-scm.com/",
    },
    {
      name: "SVN",
      website: "https://subversion.apache.org/",
    },
  ];

  return (
    <div id="tech">
      <h1>Technological Experience</h1>
      <div>
        {technologies &&
          technologies.map((tech, index) => (
            <a
              key={index}
              href={tech.website}
              target="_blank"
              rel="noopener noreferrer"
              className="tech-links"
            >
              {tech.name}
            </a>
          ))}
      </div>
    </div>
  );
};
