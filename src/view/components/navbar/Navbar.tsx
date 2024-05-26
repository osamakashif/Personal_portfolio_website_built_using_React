import "./Navbar.css";
import { useState } from "react";
import { Page } from "../../../model/pages/Page";
import { MenuIcon } from "../../assets/icons/MenuIcon";
import { SettingsDrawer } from "../settings-drawer/SettingsDrawer";
import { CloseIcon } from "../../assets/icons/CloseIcon";
import { ThemePicker } from "../theme-picker/ThemePicker";
import { LanguagePicker } from "../language-picker/LanguagePicker";

export const Navbar = () => {
  let pages: Page[] = [];
  pages.push(new Page("Home", "#home"));
  pages.push(new Page("About Me", "#about_me"));
  pages.push(new Page("Projects", "#projects"));
  pages.push(new Page("Technological", "#tech"));

  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [closing, setClosing] = useState<boolean>(false);

  const closeMenu = () => {
    setClosing(true);
    setTimeout(() => {
      setClosing(false);
      setMenuOpen(false);
    }, 200);
  };

  return (
    <nav className="navbar">
      <div className="big-screen">
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
      </div>
      <div className="small-screen">
        <button
          className="in-navbar-button"
          onClick={() => {
            setMenuOpen(true);
          }}
        >
          <MenuIcon />
        </button>
        {menuOpen && (
          <div className="vertical-nav-container">
            <div className="vertical-nav-close-container">
              <button
                className="in-navbar-button"
                onClick={() => {
                  closeMenu();
                }}
              >
                <CloseIcon />
              </button>
            </div>
            <ul
              className={
                "vertical-nav-list small-screen from-right-slide-in-animation" +
                (closing ? " to-right-slide-out-animation" : "")
              }
            >
              {pages.map((page) => {
                return (
                  <li key={page.name}>
                    <a
                      onClick={() => {
                        closeMenu();
                      }}
                      className="nav-link"
                      href={page.link}
                    >
                      {page.name}
                    </a>
                  </li>
                );
              })}
            </ul>
            <div className="in-navbar-settings-container">
              <div className="in-navbar-settings">
                <p className="settings-title-style settings-title-border">Settings</p>
                <p className="setting-name">Theme</p>
                <ThemePicker />
                <p className="setting-name">Language</p>
                <LanguagePicker />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
