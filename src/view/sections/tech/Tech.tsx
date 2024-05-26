import { getTechPages } from "../../../controller/services/TechService";
import { Page } from "../../../model/pages/Page";
import "./Tech.css";

export const Tech = () => {
  const technologies: Page[] = getTechPages();

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
