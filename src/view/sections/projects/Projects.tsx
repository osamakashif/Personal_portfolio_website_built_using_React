import { ReactElement, useEffect, useState } from "react";
import "./Projects.css";
import { Project } from "../../../model/projects/Project";

export const Projects = () => {
  const gitHubRepos: string = "https://api.github.com/users/osamakashif/repos";

  const [sortByLanguage, setSortByLanguage] = useState<boolean>(true);
  const [languages, setLanguages] = useState<string[]>([]);
  const [projects, setProjects] = useState<Project[]>([]);

  const displayAllProjects = (): ReactElement<any, any> => {
    return (
      <div className="card-container center-aligned-card">
        {projects.map((project) => {
          return (
            <div key={project.name} className="project-card">
              <a href={project.link} target="_blank" rel="noopener noreferrer">
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
        <a href={project.link} target="_blank" rel="noopener noreferrer">
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

  useEffect(() => {
    const getGitHubReposWithFetch = async () => {
      const response = await fetch(gitHubRepos, {
        headers: {
          "User-Agent": "request",
        },
      });
      const jsonData = await response.json();
      let newProjects: Project[] = [];
      let newLanguages: string[] = [];
      Array.from(jsonData).forEach((data: any) => {
        newProjects.push(
          new Project(
            (data.name as string).replace("_", " "),
            data.html_url,
            data.language,
            data.description
          )
        );
        if (!newLanguages.includes(data.language)) {
          newLanguages.push(data.language);
        }
      });
      setProjects(newProjects);
      setLanguages(newLanguages);
    };
    getGitHubReposWithFetch();
  }, []);

  return (
    <div id="projects" className="section-content">
      <h1>Projects</h1>
      <div className="sorting-option-container">
        <p>Sort by programming language</p>
        <input
          type="checkbox"
          className="rounded-checkbox"
          checked={sortByLanguage}
          onChange={() => {
            setSortByLanguage(!sortByLanguage);
          }}
        ></input>
      </div>
      <div>
        {projects && !sortByLanguage && displayAllProjects()}
        {projects && sortByLanguage && displayLanguageSortedBlocks()}
      </div>
    </div>
  );
};
