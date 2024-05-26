import { Project } from "../../model/projects/Project";

const gitHubApi: string = "https://api.github.com/users/";

const getPublicGitHubReposForUsername = async (username: string) => {
  try {
    const response = await fetch(gitHubApi + username + "/repos", {
      headers: {
        "User-Agent": "request",
      },
    });
    const jsonData = await response.json();
    return jsonData;
  } catch (_) {}
};

export const getProjectsFromGitHub = async (): Promise<{
  projects: Project[];
  languages: string[];
}> => {
  let projects: Project[] = [];
  let languages: string[] = [];
  await getPublicGitHubReposForUsername("osamakashif").then((response) => {
    if (response) {
      Array.from(response).forEach((data: any) => {
        projects.push(
          new Project(
            (data.name as string).replaceAll("_", " "),
            data.html_url,
            data.language,
            data.description
          )
        );
        if (!languages.includes(data.language)) {
          languages.push(data.language);
        }
      });
    }
  });
  return { projects, languages };
};
