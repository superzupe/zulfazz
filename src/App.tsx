import Home from "./pages/Home";
import Project from "./pages/Project";
import About from "./pages/About";
import Resume from "./pages/Resume";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/project"
          element={<Project />}
        />
        <Route
          path="/about"
          element={<About />}
        />
        <Route
          path="/resume"
          element={
            <Resume/>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
