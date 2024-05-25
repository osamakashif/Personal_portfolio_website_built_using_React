import "./SettingsDrawer.css";
import { SettingsIcon } from "../../assets/icons/SettingsIcon";
import { ThemePicker } from "../theme-picker/ThemePicker";
import { useState } from "react";
import { CloseIcon } from "../../assets/icons/CloseIcon";

export const SettingsDrawer = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [closing, setClosing] = useState<boolean>(false);
  const [iconFilled, setIconFilled] = useState<boolean>(false);

  const closeMenu = () => {
    setClosing(true);
    setTimeout(() => {
      setClosing(false);
      setMenuOpen(false);
    }, 200);
  };

  return (
    <div>
      <button
        className="in-navbar-button"
        onClick={() => {
          setMenuOpen(true);
        }}
        onMouseEnter={() => {
          setIconFilled(true);
        }}
        onMouseLeave={() => {
          setIconFilled(false);
        }}
      >
        {!iconFilled && <SettingsIcon />}
        {iconFilled && <SettingsIcon className="icon-fill" />}
      </button>
      <div
        className={
          "settings-background " + (menuOpen ? " visible" : " invisible")
        }
      >
        <div
          className={
            "settings-container from-right-slide-in-animation" +
            (closing ? " to-right-slide-out-animation" : "")
          }
        >
          <div className="settings-header">
            <p className="settings-title-padding settings-title-style">Settings</p>
            <button
              className="in-navbar-button"
              onClick={() => {
                closeMenu();
              }}
            >
              <CloseIcon />
            </button>
          </div>
          <div className="settings-options-container">
            <p className="setting-name">Theme</p>
            <ThemePicker />
          </div>
        </div>
      </div>
    </div>
  );
};
