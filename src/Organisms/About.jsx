import React from "react";
import personalimg from "../assets/1314407.png";
import { Icon } from "@iconify/react";

export default function About() {
  return (
    <div className="scroll-mt-20" id="aboutSection">
      <div className="h-10"></div>
      <div className="relative h-14">
        <div className="absolute flex flex-col items-center w-[10%] top-0 left-[45%] avatar">
          <div className="w-40 rounded-full border-2 border-blue-500">
            <img src={personalimg} className="" alt="no image" />
          </div>
          <span className="text-3xl font-bold w-fit">عبدالرحيم</span>
        </div>
      </div>

      <div className="pt-40 pb-10 px-10 rounded-lg shadow-md bg-white">
        <div>
          <Icon
            icon="uit:bag"
            width="20"
            height="20"
            className="inline-block"
          />
          <span className="ml-3">Frontend developer</span>
        </div>
        <div className="pt-5">
          <Icon
            icon="system-uicons:location"
            width="20"
            height="20"
            className="inline-block"
          />
          <span className="ml-3">Zefta , Gharbia , Egypt</span>
        </div>
        <div className="pt-5">
          Dynamic, detail-oriented Software Engineer with over 4 years of
          experience in the industry. Skilled in a variety of programming
          languages, including PHP, Laravel, JavaScript, and Node.js. Proficient
          in agile development methodologies and experienced in the full
          software development lifecycle. Hold a Bachelor's degree in Computer
          Science from AIUB. Maintain several open source projects.
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
        <div className="flex justify-center pt-5">
          <a
            href="https://www.linkedin.com/in/abdulrahim-sakr-336937258/"
            target="_blank"
            className="mr-5 text-blue-500 hover:text-[#359cfc]"
          >
            <Icon icon="mdi:linkedin" width="25" />
          </a>
          <a
            href="https://github.com/AbdoSakrEgy"
            target="_blank"
            className="text-blue-500 hover:text-[#359cfc]"
          >
            <Icon icon="mdi:github" width="25" />
          </a>
        </div>
      </div>
    </div>
  );
}
