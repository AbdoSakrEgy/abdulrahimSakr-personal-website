import React from "react";
import Header from "../Organisms/Header";
import About from "../Organisms/About";
import Skills from "../Organisms/Skills";
import Experience from "../Organisms/Experience";
import Education from "../Organisms/Education";
import Projects from "../Organisms/Projects";
import Contact from "../Organisms/Contact";
import Footer from "../Organisms/Footer";

const SiteRoot = () => {
  return (
    <div className="px-20 bg-[#f0f2f5]">
      <Header />
      <About />
      <Skills />
      {/* <Experience /> */}
      <Education />
      {/* <Projects /> */}
      {/* <Contact /> */}
      {/* <Footer /> */}
    </div>
  );
};

export default SiteRoot;
