import { getTechPages } from "../../../controller/services/TechService";
import { Page } from "../../../model/pages/Page";
import "./Skills.css";

export const Skills = () => {
  const technologies: Page[] = getTechPages();

  return (
    <div id="skills" className="section-content">
      <h1>Technological Experience & Skills</h1>
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
