import React from "react";
import personalimg from "../assets/Personal image.jpeg";
import { Icon } from "@iconify/react";
import AbdulrahimSakrCV from "../assets/Abdulrahim's Resume.pdf";

export default function About() {
  return (
    <main className="scroll-mt-20 lg:w-[1000px] mx-5" id="aboutSection">
      <div className="h-10"></div>
      <div className="relative h-14">
        <div className="absolute flex flex-col items-center w-[10%] top-0 left-[45%] avatar">
          <div className="w-40 rounded-full border-4 border-blue-500">
            <img src={personalimg} className="" alt="personal image" />
          </div>
          <span className="text-3xl font-bold w-fit">عبدالرحيم</span>
        </div>
      </div>

      <div className="pt-40 pb-10 px-10 rounded-lg shadow-md bg-white resp-AboutSec">
        <div className="w-full">
          <Icon
            icon="uit:bag"
            width="20"
            height="20"
            className="inline-block"
          />
          <span className="ml-3">Frontend developer</span>
        </div>
        <div className="pt-5 w-full">
          <Icon
            icon="system-uicons:location"
            width="20"
            height="20"
            className="inline-block"
          />
          <span className="ml-3">Cairo , Egypt</span>
        </div>
        <div className="pt-5 text-gray-500">
          web developer with over +1 year in industry. Skilled in a variety of
          web technologies, always striving to do my best.
        </div>
        <button
          onClick={() => {
            document
              .getElementById("contactSection")
              .scrollIntoView({ behavior: "smooth" });
          }}
          className="btn btn-sm mt-5 rounded-full text-xs hover:bg-[#359cfc] bg-blue-500 text-white"
        >
          Get in touch
        </button>
        <a
          href={AbdulrahimSakrCV}
          download="Example-PDF-document"
          target="_blank"
          rel="noreferrer"
          className="btn btn-sm mt-5 ml-5 rounded-full text-xs bg-white text-blue-500 border border-blue-500 hover:bg-[#359cfc] hover:text-white CVBUTTON"
        >
          Download CV
        </a>
        <div className="flex justify-center pt-5">
          <a
            href="https://www.linkedin.com/in/abdulrahim-sakr-336937258/"
            target="_blank"
            className="mr-5 text-blue-500 hover:text-[#359cfc]"
            rel="noreferrer"
          >
            <Icon icon="mdi:linkedin" width="25" />
          </a>
          <a
            href="https://github.com/AbdoSakrEgy"
            target="_blank"
            className="text-blue-500 hover:text-[#359cfc]"
            rel="noreferrer"
          >
            <Icon icon="mdi:github" width="25" />
          </a>
        </div>
      </div>
    </main>
  );
}
