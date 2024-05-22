import { Navbar } from "./view/components/navbar/Navbar";
import { AboutMe } from "./view/sections/about_me/AboutMe";
import { Projects } from "./view/sections/projects/Projects";
import { Tech } from "./view/sections/tech/Tech";

function App() {
  return (
    <div>
      <header className="App-header">
        <Navbar />
      </header>
      <div className="content">
        <AboutMe />
        <Projects />
        <Tech />
      </div>
    </div>
  );
}

export default App;
