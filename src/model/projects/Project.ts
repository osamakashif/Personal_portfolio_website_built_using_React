export class Project {
  name: string;
  link: string;
  mainLanguage: string;
  description: string;

  constructor(
    name: string,
    link: string,
    mainLanguage: string,
    description: string
  ) {
    this.name = name;
    this.link = link;
    this.mainLanguage = mainLanguage;
    this.description = description;
  }
}
