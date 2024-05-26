import { Content } from "./Content";

export class LanguageContent {
  language: string;
  content: Content;

  constructor(language: string, content: Content) {
    this.language = language;
    this.content = content;
  }
}
