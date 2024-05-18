import { useEffect, useState } from "react";
import "./Projects.css";
import { Project } from "../../../model/projects/Project";

export const Projects = () => {
  const gitHubRepos = "https://api.github.com/users/osamakashif/repos";

  const [sortByLanguage, setSortByLanguage] = useState<boolean>(true);
  const [languages, setLanguages] = useState<string[]>([]);
  const [projects, setProjects] = useState<Project[]>([]);

  const displayAllProjects = (): JSX.Element[] => {
    return projects.map((project) => {
      return (
        <div key={project.name}>
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            {project.name}
          </a>
          <p>{project.mainLanguage}</p>
          <p>{project.description}</p>
        </div>
      );
    });
  };

  const displayLanguageSortedProject = (project: Project): JSX.Element => {
    return (
      <div key={project.name}>
        <a href={project.link} target="_blank" rel="noopener noreferrer">
          {project.name}
        </a>
        <p>{project.description}</p>
      </div>
    );
  };

  const displayLanguageSortedBlocks = (): JSX.Element[] => {
    return languages.map((language) => {
      return (
        <div key={language}>
          <h2>{language}</h2>
          {projects
            .filter((project) => {
              return project.mainLanguage === language;
            })
            .map((project) => {
              return displayLanguageSortedProject(project);
            })}
        </div>
      );
    });
  };

  useEffect(() => {
    const getGitHubReposWithFetch = async () => {
      const response = await fetch(gitHubRepos);
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
    <div id="projects">
      <h1>Projects</h1>
      <div>
        <p>Sort by programming language</p>
        <input
          type="checkbox"
          checked={sortByLanguage}
          onClick={() => {
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
