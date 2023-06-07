import React from "react";
import VerticalStepper from "../Atoms/VerticalStepper";

const Education = () => {
  return (
    <div className="my-28">
      <div className="text-center text-3xl font-bold mb-8 text-gray-500">
        EDUCATION
      </div>

      <div className="flex flex-col rounded-lg items-center overflow-hidden py-14 bg-white">
        {/* step */}
        <div className="flex justify-start">
          <div className="w-[50%] invisible">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum is simply dummy text of the
            printing and typesetting industry.
          </div>

          <div className="flex flex-col items-center px-5">
            <div className="w-3 h-3 rounded-full border-2 border-blue-500"></div>
            <div className="h-full w-[2px] bg-gray-400 opacity-20"></div>
          </div>

          <div className="w-[50%]">
            <div className="opacity-50">2020 - 2023</div>
            <div className="">Tanta University - Egypt</div>
            <div className="font-medium">
              Faculty of Computers and Informatics
            </div>
          </div>
        </div>

        {/* step */}
        <div className="flex justify-start">
          <div className="w-[50%] text-right">
            <div className="opacity-50">2020 - 2023</div>
            <div className="">Tanta University - Egypt</div>
            <div className="font-medium">
              Faculty of Computers and Informatics
            </div>
          </div>

          <div className="flex flex-col items-center px-5">
            <div className="w-3 h-3 rounded-full border-2 border-blue-500"></div>
            <div className="h-full w-[2px] bg-gray-400 opacity-20"></div>
          </div>

          <div className="w-[50%] invisible">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum is simply dummy text of the
            printing and typesetting industry.
          </div>
        </div>

        {/* step */}
        <div className="flex justify-start">
          <div className="w-[50%] invisible">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum is simply dummy text of the
            printing and typesetting industry.
          </div>
          <div className="flex flex-col items-center px-5">
            <div className="w-3 h-3 rounded-full border-2 border-blue-500"></div>
            <div className="h-full w-[2px] bg-gray-400 opacity-20"></div>
          </div>

          <div className="w-[50%]">
            <div className="opacity-50">2020 - 2023</div>
            <div className="">Tanta University - Egypt</div>
            <div className="font-medium">
              Faculty of Computers and Informatics
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
