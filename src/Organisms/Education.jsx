import React from "react";
import { Icon } from "@iconify/react";
import HighSchoolDiplomaCertificate from "../assets/High school diploma certificate.jpeg";

const Education = () => {
  return (
    <main
      className="mt-[15vh] scroll-mt-20 lg:w-[1000px] mx-5"
      id="educationSection"
    >
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
            <div
              onClick={() => window.my_modal_3.showModal()}
              className="underline mt-5 text-gray-500 text-sm hover:cursor-pointer"
            >
              <Icon
                icon="iconamoon:certificate-badge"
                width="20"
                className="inline-block"
              />
              certificate
            </div>
            {/* modal */}
            <dialog id="my_modal_3" className="modal">
              <form method="dialog" className="modal-box">
                {/* <h3 className="font-bold text-lg">Hello!</h3> */}
                <img src={HighSchoolDiplomaCertificate} alt="" />
              </form>
              <form method="dialog" className="modal-backdrop">
                <button>close</button>
              </form>
            </dialog>
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
            <div
              onClick={() => window.my_modal_4.showModal()}
              className="underline mt-5 text-gray-500 text-sm hover:cursor-pointer"
            >
              <Icon
                icon="iconamoon:certificate-badge"
                width="20"
                className="inline-block"
              />
              certificate
            </div>
            {/* modal */}
            <dialog id="my_modal_4" className="modal">
              <form method="dialog" className="modal-box">
                {/* <h3 className="font-bold text-lg">Hello!</h3> */}
                <img src={HighSchoolDiplomaCertificate} alt="" />
              </form>
              <form method="dialog" className="modal-backdrop">
                <button>close</button>
              </form>
            </dialog>
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
    </main>
  );
};

export default Education;
