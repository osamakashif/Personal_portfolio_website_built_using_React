import { useEffect, useState } from "react";
import "./Projects.css";
import { Project } from "../../../model/projects/Project";

export const Projects = () => {
  const gitHubRepos = "https://api.github.com/users/osamakashif/repos";

  const [projects, setProjects] = useState<Project[]>([]);
  useEffect(() => {
    const getGitHubReposWithFetch = async () => {
      const response = await fetch(gitHubRepos);
      const jsonData = await response.json();
      let newProjects: Project[] = [];
      Array.from(jsonData).forEach((data: any) => {
        newProjects.push(
          new Project(
            (data.name as string).replace("_", " "),
            data.html_url,
            data.language,
            data.description
          )
        );
      });
      setProjects(newProjects);
    };
    getGitHubReposWithFetch();
  }, []);

  return (
    <div id="projects">
      <h1>Projects</h1>
      <div>
        {projects &&
          projects.map((project, index) => (
            <div key={index}>
              <a href={project.link} target="_blank" rel="noopener noreferrer">{project.name}</a>
              <p>{project.mainLanguage}</p>
              <p>{project.description}</p>
            </div>
          ))}
      </div>
    </div>
  );
};
