export class Content {
  homeName: string = "";
  aboutMeHeading: string = "";
  aboutMeGreeting: string = "";
  aboutMeStatementsArray: string[] = [];
  aboutMeGeneralStatement: string = "";
  aboutMeGitHubStatement: string = "";
  aboutMeLinkedInStatement: string = "";
  linkForGitHub: string = "";
  linkForLinkedIn: string = "";
  projectsHeading: string = "";
  projectsSortingStatement: string = "";
  projectsGitHubStatement: string = "";

  constructor(
    homeName: string,
    aboutMeHeading: string,
    aboutMeGreeting: string,
    aboutMeStatementsArray: string[],
    aboutMeGeneralStatement: string,
    aboutMeGitHubStatement: string,
    aboutMeLinkedInStatement: string,
    linkForGitHub: string,
    linkForLinkedIn: string,
    projectsHeading: string,
    projectsSortingStatement: string,
    projectsGitHubStatement: string
  ) {
    this.homeName = homeName;
    this.aboutMeHeading = aboutMeHeading;
    this.aboutMeGreeting = aboutMeGreeting;
    this.aboutMeStatementsArray = aboutMeStatementsArray;
    this.aboutMeGeneralStatement = aboutMeGeneralStatement;
    this.aboutMeGitHubStatement = aboutMeGitHubStatement;
    this.aboutMeLinkedInStatement = aboutMeLinkedInStatement;
    this.linkForGitHub = linkForGitHub;
    this.linkForLinkedIn = linkForLinkedIn;
    this.projectsHeading = projectsHeading;
    this.projectsSortingStatement = projectsSortingStatement;
    this.projectsGitHubStatement = projectsGitHubStatement;
  }
}
