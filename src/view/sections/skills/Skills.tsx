import "./Skills.css";
import { useState } from "react";
import { getSkills } from "../../../controller/services/SkillsService";
import { Skill } from "../../../model/skills/Skill";
import { CheckOption } from "../../components/check-option/CheckOption";

export const Skills = () => {
  const skills: Skill[] = getSkills();
  const [progressVisible, setProgressVisible] = useState<boolean>(true);

  const getProgressDescription = (progress: number): string => {
    if (progress <= 30) {
      return "Basic experience.";
    }
    if (progress <= 50) {
      return "Basic to moderate experience.";
    }
    if (progress <= 70) {
      return "Moderate experience.";
    }
    return "Proficient: Years of experience.";
  };

  return (
    <div id="skills" className="section-content">
      <h1>Technological Experience & Skills</h1>
      <CheckOption
        checked={progressVisible}
        setChecked={setProgressVisible}
        label="Show progress"
        ariaLabel="Progress toggle. Toggle to show skills with progress or map of skills."
      />
      {!progressVisible && (
        <div className="skills-container">
          {skills &&
            skills.map((skill, index) => (
              <a
                key={index}
                href={skill.link}
                target="_blank"
                rel="noopener noreferrer"
                className="skills-link cloud-map-link new-page-link"
              >
                {skill.name}
              </a>
            ))}
        </div>
      )}
      {progressVisible && (
        <div className="skills-progress-bar-container">
          {skills && (
            <table>
              <tbody>
                {skills.map((skill, index) => (
                  <tr key={index} className="skill-name-and-progress">
                    <td className="skill-name-cell">
                      <a
                        href={skill.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="skills-link new-page-link"
                        aria-label={
                          progressVisible
                            ? skill.name +
                              (skill.progress
                                ? ". " + getProgressDescription(skill.progress)
                                : "")
                            : skill.name
                        }
                      >
                        {skill.name}
                      </a>
                    </td>
                    <td className="progress-bar-cell">
                      <div
                        className="skill-progress-bar"
                        style={{ width: skill.progress + "%" }}
                      ></div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      )}
    </div>
  );
};
