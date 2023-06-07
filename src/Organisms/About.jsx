import React from "react";
import personalimg from "../assets/1314407.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { Icon } from "@iconify/react";

const About = () => {
  return (
    <>
      <div className="relative mt-10 pt-14 drop-shadow-md">
        <div className="absolute flex flex-col items-center top-0 left-1/2 right-1/2 avatar">
          <div className="w-40 rounded-full border-4 border-blue-700">
            <img src={personalimg} className="" alt="no image" />
          </div>
          <span className="text-3xl font-bold w-fit">Abdulrahim Sakr</span>
        </div>

        <div className="pt-40 pb-10 px-12 rounded-lg bg-white">
          <div className="pb-5">
            <FontAwesomeIcon icon={faBriefcase} />
            <span className="ml-3">Web developer</span>
          </div>
          <div className="pb-5">
            <FontAwesomeIcon icon={faLocationDot} />
            <span className="ml-3">Zefta,Egypt</span>
          </div>
          <div className="pb-5">
            Dynamic, detail-oriented Software Engineer with over 4 years of
            experience in the industry. Skilled in a variety of programming
            languages, including PHP, Laravel, JavaScript, and Node.js.
            Proficient in agile development methodologies and experienced in the
            full software development lifecycle. Hold a Bachelor's degree in
            Computer Science from AIUB. Maintain several open source projects.
          </div>
          <button className="btn btn-sm rounded-full text-xs hover:bg-blue-700 bg-blue-600 text-white">
            Get in touch
          </button>
          <div className="flex justify-center">
            <Icon icon="mdi:linkedin" width="25" className="mr-10" />
            <Icon icon="mdi:github" width="25" />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
