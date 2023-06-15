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
    <div>
      <Header />
      <div className="px-[10vw] bg-[#f0f2f5]">
        <About />
        <Skills />
        <Experience />
        <Education />
        {/* <Projects /> */}
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default SiteRoot;
