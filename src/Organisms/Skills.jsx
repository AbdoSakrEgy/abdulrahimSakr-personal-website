import React from "react";
import { Icon } from "@iconify/react";

const Skills = () => {
  return (
    <div className="mt-[15vh] scroll-mt-20" id="skillsSection">
      <div className="text-center text-3xl font-bold text-gray-500">SKILLS</div>

      <div className="flex justify-between flex-wrap pt-10">
        {/* skill */}
        <div className="skillCard">
          <div className="flex justify-center">
            <Icon icon="logos:javascript" color="#6b9e63" width="80" />
          </div>
          <div className="skillName">
            <span>JavaScript</span>
          </div>
        </div>
        {/* skill */}
        <div className="skillCard">
          <div className="flex justify-center">
            <Icon icon="devicon:react" color="#6b9e63" width="80" />
          </div>
          <div className="skillName">
            <span>ReactJS</span>
          </div>
        </div>
        {/* skill */}
        <div className="skillCard">
          <div className="flex justify-center">
            <Icon icon="logos:nextjs-icon" width="80" />
          </div>
          <div className="skillName">
            <span>NextJS</span>
          </div>
        </div>
        {/* skill */}
        <div className="skillCard">
          <div className="flex justify-center">
            <Icon icon="logos:redux" color="#6b9e63" width="80" />
          </div>
          <div className="skillName">
            <span>Redux</span>
          </div>
        </div>
        {/* skill */}
        <div className="skillCard">
          <div className="flex justify-center">
            <Icon icon="devicon:reactrouter" color="#6b9e63" width="80" />
          </div>
          <div className="skillName">
            <span>React Router</span>
          </div>
        </div>
        {/* skill */}
        <div className="skillCard">
          <div className="flex justify-center">
            <Icon
              icon="simple-icons:reacthookform"
              width="80"
              color="#ec5990"
            />
          </div>
          <div className="skillName">
            <span> React Hook Form</span>
          </div>
        </div>
        {/* skill */}
        <div className="skillCard">
          <div className="flex justify-center">
            <Icon icon="devicon:tailwindcss" color="#6b9e63" width="80" />
          </div>
          <div className="skillName">
            <span>Tailwindcss</span>
          </div>
        </div>
        {/* skill */}
        <div className="skillCard">
          <div className="flex justify-center">
            <div className="flex justify-center items-end h-16">
              <Icon icon="logos:daisyui" width="80" />
            </div>
          </div>
          <div className="skillName">
            <span> daisyUI</span>
          </div>
        </div>
        {/* skill */}
        <div className="skillCard">
          <div className="flex justify-center">
            <Icon icon="devicon:git" color="#6b9e63" width="80" />
          </div>
          <div className="skillName">
            <span>Git</span>
          </div>
        </div>
        {/* skill */}
        <div className="skillCard">
          <div className="flex justify-center">
            <Icon icon="logos:adobe-xd" width="80" />
          </div>
          <div className="skillName">
            <span>Adobe XD</span>
          </div>
        </div>
        {/* spam skill if needed */}
        <div className="skillCard hidden resp-spamcard">
          <div className="flex justify-center">
            <Icon icon="logos:nextjs-icon" width="80" />
          </div>
          <div className="skillName">
            <span>spam skill</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
