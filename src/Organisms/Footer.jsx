import React from "react";
import { Icon } from "@iconify/react";

const Footer = () => {
  return (
    <div>
      <div className="flex justify-center pb-3">
        <Icon icon="mdi:linkedin" width="25" className="mr-10" />
        <Icon icon="mdi:github" width="25" />
      </div>
      <div className="flex justify-center pb-7">
        <Icon icon="ph:copyright" width="25" className="inline-block" />
        <span> 2023 Abdulrahim Sakr</span>
      </div>
    </div>
  );
};

export default Footer;
