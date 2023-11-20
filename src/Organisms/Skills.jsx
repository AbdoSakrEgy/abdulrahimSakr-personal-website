import React from "react";
import { Icon } from "@iconify/react";
import uiux from "../assets/ui-ux.jpg";
import ngrx from "../assets/ngrx.png";

const Skills = () => {
  return (
    <main
      className="mt-[15vh] scroll-mt-20 lg:w-[1000px] mx-5"
      id="skillsSection"
    >
      <div className="text-center text-3xl font-bold text-gray-500">SKILLS</div>

      <div className="flex justify-between gap-5 flex-wrap pt-10">
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
            <Icon icon="devicon:angular" width="80" />
          </div>
          <div className="skillName">
            <span className="text-sm">Angular</span>
          </div>
        </div>
        {/* skill*/}
        <div className="skillCard">
          <div className="flex justify-center">
            <Icon
              icon="vscode-icons:file-type-typescript-official"
              width="80"
              color="gray"
            />
          </div>
          <div className="skillName">
            <span className="text-sm">TypeScript</span>
          </div>
        </div>
        {/* skill*/}
        <div className="skillCard">
          <div className="flex justify-center">
            <img src={ngrx} alt="ngrx" width="80" />
          </div>
          <div className="skillName">
            <span className="text-sm">NgRx</span>
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
            <Icon icon="devicon:github" color="#6b9e63" width="80" />
          </div>
          <div className="skillName">
            <span>github</span>
          </div>
        </div>
        {/* skill */}
        <div className="skillCard">
          <div className="flex justify-center">
            <img src={uiux} alt="ui/ux" width={150} />
          </div>
          <div className="skillName">
            <span>UI/UX</span>
          </div>
        </div>
        {/* Spam skill if needed */}
        <div className="skillCard lg:invisible lg:block hidden">
          <div className="flex justify-center">
            <Icon icon="mdi:angular" width="80" color="gray" />
          </div>
          <div className="skillName">
            <span className="text-sm">comming soon ^_^</span>
          </div>
        </div>
        {/* Spam skill if needed */}
      </div>
    </main>
  );
};

export default Skills;
