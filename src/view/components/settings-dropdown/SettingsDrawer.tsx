import "./SettingsDrawer.css";
import { SettingsIcon } from "../../assets/icons/SettingsIcon";
import { ThemePicker } from "../theme-picker/ThemePicker";
import { useState } from "react";
import { CloseIcon } from "../../assets/icons/CloseIcon";

export const SettingsDrawer = () => {
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
    <div>
      <button
        className="settings-button"
        onClick={() => {
          setMenuOpen(true);
        }}
      >
        <SettingsIcon />
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
            <p className="settings-title">Settings</p>
            <button
              className="settings-button"
              onClick={() => {
                closeMenu();
              }}
            >
              <CloseIcon />
            </button>
          </div>
          <div className="settings-options-container">
            <ThemePicker />
          </div>
        </div>
      </div>
    </div>
  );
};
