import { ContentContext } from "../../../controller/context/content-context/ContentContext";
import "./LanguagePicker.css";
import { useContext } from "react";

export const LanguagePicker = () => {
  const { language, switchLanguage } = useContext(ContentContext);
  const selectedClass = (value: string): string => {
    if (value === language) {
      return " selected";
    }
    return "";
  };
  return (
    <div className="themes">
      <button
        className={"theme-button" + selectedClass("English")}
        onClick={() => {
          switchLanguage("English");
        }}
      >
        English
      </button>
      <button
        className={"theme-button" + selectedClass("Urdu")}
        onClick={() => {
          switchLanguage("Urdu");
        }}
      >
        Urdu
      </button>
    </div>
  );
};
