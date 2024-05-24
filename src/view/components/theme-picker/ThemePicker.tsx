import { useContext } from "react";
import "./ThemePicker.css";
import { ColourThemeContext } from "../../../controller/context/ColourThemeContext";
import { SunIcon } from "../../assets/icons/SunIcon";
import { MoonIcon } from "../../assets/icons/MoonIcon";
import { SunMoonIcon } from "../../assets/icons/SunMoonIcon";

export const ThemePicker = () => {
    const {switchTheme} = useContext(ColourThemeContext)
  return (
    <div className="themes">
      <button className="theme-button" onClick={() => {switchTheme("auto")}}><SunMoonIcon />Auto</button>
      <button className="theme-button" onClick={() => {switchTheme("light")}}><SunIcon />Light</button>
      <button className="theme-button" onClick={() => {switchTheme("dark")}}><MoonIcon />Dark</button>
    </div>
  );
};
