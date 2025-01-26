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

  const progressBar = (progress: number | undefined) => {
    if (!progress) {
      return <></>;
    }
    if (progress <= 100 / 3) {
      return (
        <div
          className="progress-bar-height used-bar full-progress-bar-border-rounding"
          style={{ width: progress + "%" }}
        ></div>
      );
    }
    if (progress <= 200 / 3) {
      return (
        <div className="multi-progress-bar-container">
          <div
            className="progress-bar-height used-bar left-progress-bar-border-rounding"
            style={{ width: 100 / 3 + "%" }}
          ></div>
          <div
            className="progress-bar-height competent-bar right-progress-bar-border-rounding"
            style={{ width: progress - 100 / 3 + "%" }}
          ></div>
        </div>
      );
    }
    return (
      <div className="multi-progress-bar-container">
        <div
          className="progress-bar-height used-bar left-progress-bar-border-rounding"
          style={{ width: 100 / 3 + "%" }}
        ></div>
        <div
          className="progress-bar-height competent-bar"
          style={{ width: 100 / 3 + "%" }}
        ></div>
        <div
          className="progress-bar-height proficient-bar right-progress-bar-border-rounding"
          style={{ width: progress - 200 / 3 + "%" }}
        ></div>
      </div>
    );
  };

  return (
    <div id="skills" className="section-content">
      <h1>Technological Experience & Skills</h1>
      <CheckOption
        checked={progressVisible}
        setChecked={setProgressVisible}
        label="Show experience"
        ariaLabel="Experience toggle. Toggle to show skills with amount of experience or alternatively just a map of skills."
      />
      {!progressVisible && (
        <div className="skills-container">
          {skills?.map((skill, index) => (
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
            <>
              <div className="skills-keys-definition">
                <div className="skill-key">
                  <p>Used</p>
                  <div className="circle key-colour-1"></div>
                </div>
                <div className="skill-key">
                  <p>Competent</p>
                  <div className="circle key-colour-2"></div>
                </div>
                <div className="skill-key">
                  <p>Proficient</p>
                  <div className="circle key-colour-3"></div>
                </div>
              </div>
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
                                  ? ". " +
                                    getProgressDescription(skill.progress)
                                  : "")
                              : skill.name
                          }
                        >
                          {skill.name}
                        </a>
                      </td>
                      <td className="progress-bar-cell">
                        {progressBar(skill.progress)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </>
          )}
        </div>
      )}
    </div>
  );
};
