import { Page } from "../../../model/pages/Page";
import { SettingsDrawer } from "../settings-dropdown/SettingsDrawer";
import "./Navbar.css";

export const Navbar = () => {
  let pages: Page[] = [];
  pages.push(new Page("Home", ""));
  pages.push(new Page("About Me", "#about_me"));
  pages.push(new Page("Projects", "#projects"));
  pages.push(new Page("Technological", "#tech"));

  return (
    <nav className="navbar">
      <ul className="nav-list">
        {pages.map((page) => {
          return (
            <li key={page.name}>
              <a className="nav-link" href={page.link}>
                {page.name}
              </a>
            </li>
          );
        })}
      </ul>
      <SettingsDrawer />
    </nav>
  );
};
