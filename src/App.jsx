import React from "react";
import "./index.css";

import Nevbar from "./components/navbar/navbar";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import Projects from "./components/projects/Projects";
import Mywork from "./components/mywork/mywork";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";
import Education from "./components/myeducation/education";
import Skills from "./components/skills/Skills";

const App = () => {
  return (
    <div>
      <Nevbar />
      <Hero />
      <About />
      <Education />
      <Projects />
      <Skills />
      <Mywork />
      <Contact />
      <Footer />
    </div>
  );
};
export default App;
