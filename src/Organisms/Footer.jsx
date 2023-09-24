import React from "react";
import { Icon } from "@iconify/react";

const Footer = () => {
  return (
    <div className="py-[5vh]">
      <div className="flex justify-center">
        <a
          href="https://www.linkedin.com/in/abdulrahim-sakr-336937258/"
          target="_blank"
          className="mr-5 text-blue-500 hover:text-[#359cfc]"
          rel="noreferrer"
        >
          <Icon icon="mdi:linkedin" width="25" />
        </a>
        <a
          href="https://github.com/AbdoSakrEgy"
          target="_blank"
          className="text-blue-500 hover:text-[#359cfc]"
          rel="noreferrer"
        >
          <Icon icon="mdi:github" width="25" />
        </a>
      </div>

      <div className="flex justify-center pt-5 text-sm text-gray-500">
        <Icon icon="ph:copyright" width="20" className="inline-block mr-1" />
        <span>2023 Abdulrahim Sakr</span>
      </div>
    </div>
  );
};

export default Footer;
