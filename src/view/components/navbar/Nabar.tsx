import { Page } from "../../../model/pages/Page";
import "./Navbar.css";

export const Navbar = () => {
  let pages: Page[] = [];
  pages.push(new Page("About Me", "#About_Me"));
  pages.push(new Page("Profiles", "#Profiles"));
  pages.push(new Page("Technological", "#Tech"));
  pages.push(new Page("Projects", "#Projects"));

  return (
    <nav>
      <ul className="nav-list">
        {pages.map((page) => {
          return (
            <li>
              <a className="nav-link" href={page.link}>{page.name}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
