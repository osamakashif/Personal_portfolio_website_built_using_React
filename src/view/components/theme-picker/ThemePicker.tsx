import "./ThemePicker.css";
import { useContext } from "react";
import { ColourThemeContext } from "../../../controller/context/colour-theme-context/ColourThemeContext";
import { SunIcon } from "../../assets/icons/SunIcon";
import { MoonIcon } from "../../assets/icons/MoonIcon";
import { SunMoonIcon } from "../../assets/icons/SunMoonIcon";

export const ThemePicker = () => {
  const { theme, switchTheme } = useContext(ColourThemeContext);
  const selectedClass = (value: "auto" | "dark" | "light"): string => {
    if (value === theme) {
      return " selected";
    }
    return "";
  };
  return (
    <div className="themes">
      <button
        className={"theme-button" + selectedClass("auto")}
        onClick={() => {
          switchTheme("auto");
        }}
      >
        <SunMoonIcon />
        System
      </button>
      <button
        className={"theme-button" + selectedClass("light")}
        onClick={() => {
          switchTheme("light");
        }}
      >
        <SunIcon />
        Light
      </button>
      <button
        className={"theme-button" + selectedClass("dark")}
        onClick={() => {
          switchTheme("dark");
        }}
      >
        <MoonIcon />
        Dark
      </button>
    </div>
  );
};
