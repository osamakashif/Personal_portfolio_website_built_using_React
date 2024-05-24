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
      <button className="theme-button" onClick={() => {switchTheme("auto")}}><SunMoonIcon className="icon-stroke icon-background-fill icon-padding"/>Auto</button>
      <button className="theme-button" onClick={() => {switchTheme("light")}}><SunIcon className="icon-fill icon-padding" />Light</button>
      <button className="theme-button" onClick={() => {switchTheme("dark")}}><MoonIcon className="icon-stroke icon-background-fill icon-padding" />Dark</button>
    </div>
  );
};
