import "./Projects.css";
import { ReactElement, useEffect, useState } from "react";
import { Project } from "../../../model/projects/Project";
import { TickIcon } from "../../assets/icons/TickIcon";
import { getProjectsFromGitHub } from "../../../controller/services/GitHubService";
import { GitHubIcon } from "../../assets/icons/GitHubIcon";

export const Projects = () => {
  const [sortByLanguage, setSortByLanguage] = useState<boolean>(true);
  const [languages, setLanguages] = useState<string[]>([]);
  const [projects, setProjects] = useState<Project[]>([]);
  const [loaded, setLoaded] = useState<boolean>(false);

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
            <div key={project.name} className="project-card">
              <a
                className="new-page-link"
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {project.name}
              </a>
              <p>{project.mainLanguage}</p>
              <p>{project.description}</p>
            </div>
          );
        })}
      </div>
    );
  };

  const displayLanguageSortedProject = (project: Project): JSX.Element => {
    return (
      <div key={project.name} className="project-card">
        <a
          className="new-page-link"
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          {project.name}
        </a>
        <p>{project.description}</p>
      </div>
    );
  };

  const displayLanguageTitle = (language: string | null): JSX.Element => {
    return (
      <h2 className="language-title">
        {language === null ? "Other" : language}
      </h2>
    );
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
    <div id="projects" className="section-content">
      <h1>Projects</h1>
      {loaded && (
        <>
          <div className="sorting-option-container">
            <p>Sort by programming language</p>
            <button
              aria-label="Sort trigger. Toggle to sort projects by programming language, or show all projects not sorted by programming language."
              className={
                "inline-start-margin " +
                (sortByLanguage ? "sorting-active" : "sorting-inactive")
              }
              onClick={() => {
                setSortByLanguage(!sortByLanguage);
              }}
            >
              {sortByLanguage && <TickIcon />}
            </button>
          </div>
          <div>
            {projects && !sortByLanguage && displayAllProjects()}
            {projects && sortByLanguage && displayLanguageSortedBlocks()}
          </div>
        </>
      )}
      {!loaded && (
        <div>
          <p>
            In case the projects are not visible on this page, you can see some
            of my projects on{" "}
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
