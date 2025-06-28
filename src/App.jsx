import React from "react";
import "./index.css";

import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import Projects from "./components/projects/Projects";
import Mywork from "./components/mywork/Mywork";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Education from "./components/myeducation/Education";
import Skills from "./components/skills/Skills";

const App = () => {
  return (
    <div>
      <Navbar />
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
