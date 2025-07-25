import "./Projects.css";
import { ReactElement, useEffect, useState } from "react";
import { Project } from "../../../model/projects/Project";
import { getProjectsFromGitHub } from "../../../controller/services/GitHubService";
import { GitHubIcon } from "../../assets/icons/GitHubIcon";
import { CheckOption } from "../../components/check-option/CheckOption";
import { NewTabIcon } from "../../assets/icons/NewTabIcon";

export const Projects = () => {
  const [sortByLanguage, setSortByLanguage] = useState<boolean>(true);
  const [languages, setLanguages] = useState<string[]>([]);
  const [projects, setProjects] = useState<Project[]>([]);
  const [loaded, setLoaded] = useState<boolean>(false);
  const openRepositoryMessage: string = "Open repository.";

  useEffect(() => {
    const getGitHubRepos = async () => {
      getProjectsFromGitHub().then((response) => {
        if (response.projects.length === 0) {
          setLoaded(false);
        } else {
          setLoaded(true);
        }
        setProjects(response.projects);
        setLanguages(response.languages);
      });
    };
    getGitHubRepos();
  }, []);

  const displayAllProjects = (): ReactElement<any, any> => {
    return (
      <div className="card-container space-justified-card">
        {projects.map((project) => {
          return (
            <a
              key={project.name}
              className="project-card"
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h1 className="project-card-name">{project.name}</h1>
              <div className="project-card-open-message">
                <p>{openRepositoryMessage}</p>
                <NewTabIcon />
              </div>
              <p className="project-card-details">{project.mainLanguage}</p>
              <p className="project-card-details">{project.description}</p>
            </a>
          );
        })}
      </div>
    );
  };

  const displayLanguageSortedProject = (project: Project): JSX.Element => {
    return (
      <a key={project.name} className="project-card" href={project.link} target="_blank" rel="noopener noreferrer">
        <h1 className="project-card-name">{project.name}</h1>
        <div className="project-card-open-message">
          <p>{openRepositoryMessage}</p>
          <NewTabIcon />
        </div>
        <p className="project-card-details">{project.description}</p>
      </a>
    );
  };

  const displayLanguageTitle = (language: string | null): JSX.Element => {
    return <h2 className="language-title">{language === null ? "Other" : language}</h2>;
  };

  const displayLanguageSortedBlocks = (): ReactElement<any, any> => {
    return (
      <div className="centered-flex-column">
        {languages.sort().map((language) => {
          return (
            <div key={language} className="language-card">
              {displayLanguageTitle(language)}
              <div className="card-container">
                {projects
                  .filter((project) => {
                    return project.mainLanguage === language;
                  })
                  .map((project) => {
                    return displayLanguageSortedProject(project);
                  })}
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div id="projects" className="section-content section-border-bottom">
      <h1>Projects</h1>
      {loaded && (
        <>
          <CheckOption
            checked={sortByLanguage}
            setChecked={setSortByLanguage}
            label="Sort by programming language"
            ariaLabel="Sort trigger. Toggle to sort projects by programming language, or show all projects not sorted by programming language."
          />
          <div>
            {projects && !sortByLanguage && displayAllProjects()}
            {projects && sortByLanguage && displayLanguageSortedBlocks()}
          </div>
        </>
      )}
      {!loaded && (
        <div>
          <p>
            In case the projects are not visible on this page, you can see some of my projects on{" "}
            <a
              href="https://github.com/osamakashif"
              target="_blank"
              rel="noopener noreferrer"
              className="new-page-link  inline-link"
            >
              GitHub
              <GitHubIcon className="link-icon inline-start-margin" />
            </a>
            .
          </p>
        </div>
      )}
    </div>
  );
};
