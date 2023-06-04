import React from "react";
import { Icon } from "@iconify/react";

const Skills = () => {
  return (
    <div className="mt-28">
      <div className="text-center text-3xl font-bold mb-8 text-gray-500">
        SKILLS
      </div>

      <div className="flex justify-between flex-wrap">
        {/* skill */}
        <div className="skillCard">
          <div className="flex justify-center">
            <Icon icon="vscode-icons:file-type-html" width="80" />
          </div>
          <div className="skillName">
            <span>HTML</span>
          </div>
        </div>
        {/* skill */}
        <div className="skillCard">
          <div className="flex justify-center">
            <Icon
              icon="vscode-icons:file-type-css"
              color="#6b9e63"
              width="80"
            />
          </div>
          <div className="skillName">
            <span>CSS</span>
          </div>
        </div>
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
            <span>React.js</span>
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
            <Icon icon="devicon:git" color="#6b9e63" width="80" />
          </div>
          <div className="skillName">
            <span>Git</span>
          </div>
        </div>
        {/* skill */}
        <div className="skillCard invisible">
          <div className="flex justify-center">
            <Icon icon="vscode-icons:file-type-html" width="80" />
          </div>
          <div className="skillName">
            <span>HTML</span>
          </div>
        </div>
        {/* skill */}
        <div className="skillCard invisible">
          <div className="flex justify-center">
            <Icon icon="vscode-icons:file-type-html" width="80" />
          </div>
          <div className="skillName">
            <span>HTML</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
