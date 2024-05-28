export class Skill {
  name: string;
  link?: string;
  progress?: number;

  constructor(name: string, link?: string, progress?: number) {
    this.name = name;
    if (link) {
      this.link = link;
    }
    if (progress) {
      this.progress = progress;
    }
  }
}
