import React from "react";
import NavBar from "./components/NavBar.js";
import About from "./components/About.js";
import Skills from "./components/Skills.js";
import Projects from "./components/Projects.js";
import Experience from "./components/Experience.js";
import "./App.scss";
import "./styles/styles.scss";

function App() {
  return (
    <div>
      <NavBar />
      <About />
      <Skills />
      <Projects />
      <Experience />
    </div>
  );
}

export default App;
