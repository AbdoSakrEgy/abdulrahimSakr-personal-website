import React from "react";
import Header from "../Organisms/Header";
import About from "../Organisms/About";
import Skills from "../Organisms/Skills";
import Experience from "../Organisms/Experience";
import Education from "../Organisms/Education";
import Projects from "../Organisms/Projects";
import Contact from "../Organisms/Contact";
import Footer from "../Organisms/Footer";
import PalestineFlag from "../Atoms/PalestineFlag";

const SiteRoot = () => {
  return (
    <div>
      <Header />
      <div className="flex flex-col justify-center items-center bg-[#f0f2f5]">
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Contact />
        <Footer />
        <PalestineFlag />
      </div>
    </div>
  );
};

export default SiteRoot;
