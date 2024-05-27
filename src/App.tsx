import { useContext } from "react";
import { Navbar } from "./view/components/navbar/Navbar";
import { AboutMe } from "./view/sections/about_me/AboutMe";
import { Projects } from "./view/sections/projects/Projects";
import { Skills } from "./view/sections/skills/Skills";
import { ColourThemeContext } from "./controller/context/colour-theme-context/ColourThemeContext";
import { Home } from "./view/sections/home/Home";

function App() {
  const { theme } = useContext(ColourThemeContext);
  return (
    <div className={theme + " application"}>
      <header>
        <Navbar />
      </header>
      <Home />
      <AboutMe />
      <Projects />
      <Skills />
    </div>
  );
}

export default App;
