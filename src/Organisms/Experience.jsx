import React from "react";
import { Icon } from "@iconify/react";
import certificate from "../assets/Certificate.jpeg";

const Experience = () => {
  return (
    <div className="mt-[15vh] scroll-mt-20" id="experienceSection">
      <div className="text-center text-3xl font-bold text-gray-500">
        EXPERIENCE
      </div>

      <div className="flex flex-col rounded-lg items-center overflow-hidden mt-10 py-5 shadow-md bg-white resp-EsperStep">
        {/* step */}
        <div className="flex justify-start">
          <div className="w-[50%] invisible resp-spamcard">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum is simply dummy text of the
            printing and typesetting industry.
          </div>

          <div className="flex flex-col items-center px-5">
            <div className="w-3 h-3 rounded-full border-2 border-blue-500"></div>
            <div className="h-full w-[2px] bg-gray-400 opacity-20"></div>
          </div>

          <div className="w-[50%] resp-ExperSec">
            <div className="opacity-50 text-sm">
              March 2021 - September 2021
            </div>
            <div className="text-base">EBDAA Company</div>
            <div className="font-medium text-lg">
              Training as a Frontend react developer
            </div>
            <div
              onClick={() => window.my_modal_2.showModal()}
              className="underline mt-5 text-gray-500 text-sm hover:cursor-pointer"
            >
              <Icon
                icon="iconamoon:certificate-badge"
                width="20"
                className="inline-block"
              />
              Training certificate
            </div>
            {/* modal */}
            <dialog id="my_modal_2" className="modal">
              <form method="dialog" className="modal-box">
                {/* <h3 className="font-bold text-lg">Hello!</h3> */}
                <img src={certificate} alt="" />
              </form>
              <form method="dialog" className="modal-backdrop">
                <button>close</button>
              </form>
            </dialog>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
