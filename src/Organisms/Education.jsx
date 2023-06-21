import React from "react";
import VerticalStepper from "../Atoms/VerticalStepper";

const Education = () => {
  return (
    <div className="mt-[15vh] scroll-mt-20" id="educationSection">
      <div className="text-center text-3xl font-bold text-gray-500">
        EDUCATION
      </div>

      <div className="flex flex-col rounded-lg items-center overflow-hidden mt-10 py-5 shadow-md bg-white resp-EduStep">
        {/* step */}
        <div className="flex justify-start">
          <div className="w-[50%] invisible resp-EduSec1">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum is simply dummy text of the
            printing and typesetting industry.
          </div>

          <div className="flex flex-col items-center px-5">
            <div className="w-3 h-3 rounded-full border-2 border-blue-500"></div>
            <div className="h-full w-[2px] bg-gray-400 opacity-20"></div>
          </div>

          <div className="w-[50%] resp-EduSec2">
            <div className="opacity-50">2020 - 2023</div>
            <div className="font-semibold">Bachelor's degree</div>
            <div className="">Tanta University - Egypt</div>
            <div className="">Faculty of Computers and Informatics</div>
            <div className="text-sm text-gray-500">
              <span className="font-semibold">GPA </span>: 3.60 out of 4.00 (B+)
            </div>
          </div>
        </div>

        {/* step */}
        <div className="flex justify-start">
          <div className="w-[50%] text-right resp-EduSec3">
            <div className="opacity-50">2017 - 2019</div>
            <div className="font-semibold">High school diploma</div>
            <div className="">ElShaheed Ahmed Nabil School- Egypt</div>
            <div className="text-sm text-gray-500">
              <span className="font-semibold">Gradee </span>: 379 out of 410
            </div>
          </div>

          <div className="flex flex-col items-center px-5">
            <div className="w-3 h-3 rounded-full border-2 border-blue-500"></div>
            <div className="h-full w-[2px] bg-gray-400 opacity-20"></div>
          </div>

          <div className="w-[50%] text-right invisible resp-EduSec4">
            <div className="opacity-50">2017 - 2019</div>
            <div className="font-semibold">High school diploma</div>
            <div className="">ElShaheed Ahmed Nabil School- Egypt</div>
            <div className="text-sm text-gray-500">
              <span className="font-semibold">Gradee </span>: 379 out of 410
            </div>
          </div>
        </div>

        {/* step */}
        <div className="flex justify-start">
          <div className="w-[50%] invisible resp-EduSec5">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum is simply dummy text of the
            printing and typesetting industry.
          </div>

          <div className="flex flex-col items-center px-5">
            <div className="w-3 h-3 rounded-full border-2 border-blue-500"></div>
            <div className="h-full w-[2px] bg-gray-400 opacity-20"></div>
          </div>

          <div className="w-[50%] resp-EduSec6">
            <div className="opacity-50">2014 - 2016</div>
            <div className="font-semibold">Mid School degree</div>
            <div className="">Major General AlAzab Saad School - Egypt</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
