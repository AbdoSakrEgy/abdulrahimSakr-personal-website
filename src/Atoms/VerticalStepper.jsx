import React from "react";

const VerticalStepper = () => {
  return (
    <div>
      {/* step */}
        <div class="flex justify-start">
          <div class="pl-3 invisible">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum is simply dummy text of the
            printing and typesetting industry.
          </div>
          <div class="flex flex-col items-center">
            <div class="w-3 h-3 rounded-full border-2 border-blue-500"></div>
            <div class="h-full w-[2px] bg-gray-400 opacity-20"></div>
          </div>

          <div class="pl-3">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum is simply dummy text of the
            printing and typesetting industry.
          </div>
        </div>
    </div>
  );
};

export default VerticalStepper;
