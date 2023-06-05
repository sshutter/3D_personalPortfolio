import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Home,
  Navbar,
  Tech,
  Works,
} from "./components";
import Projects from "./components/Projects";
import OthersProjects from "./components/OthersProjects";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />

          <Home />
        </div>
        <About />
        <Projects />
        <OthersProjects />
        <Tech />
        <div className="relative z-0">
          <Contact />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
