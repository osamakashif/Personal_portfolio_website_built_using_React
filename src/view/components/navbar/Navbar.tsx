import { Page } from "../../../model/pages/Page";
import "./Navbar.css";

export const Navbar = () => {
  let pages: Page[] = [];
  pages.push(new Page("About Me", "#about_me"));
  pages.push(new Page("Profiles", "#profiles"));
  pages.push(new Page("Technological", "#tech"));
  pages.push(new Page("Projects", "#projects"));

  return (
    <nav>
      <ul className="nav-list">
        {pages.map((page) => {
          return (
            <li key={page.name}>
              <a className="nav-link" href={page.link}>{page.name}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
