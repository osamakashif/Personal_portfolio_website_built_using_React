import { useContext } from "react";
import { Navbar } from "./view/components/navbar/Navbar";
import { AboutMe } from "./view/sections/about_me/AboutMe";
import { Projects } from "./view/sections/projects/Projects";
import { Tech } from "./view/sections/tech/Tech";
import { ColourThemeContext } from "./controller/context/colour-theme-context/ColourThemeContext";

function App() {
  const { theme } = useContext(ColourThemeContext);
  return (
    <div className={theme + " application"}>
      <header>
        <Navbar />
      </header>
      <AboutMe />
      <Projects />
      <Tech />
    </div>
  );
}

export default App;
