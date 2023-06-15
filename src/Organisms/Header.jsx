import React from "react";
import { Icon } from "@iconify/react";

export default function Header() {
  return (
    <div className="sticky top-0 z-50">
      <div className="flex justify-between shadow-md px-6 py-0 bg-white">
        <a
          onClick={() => {
            document
              .getElementById("aboutSection")
              .scrollIntoView({ behavior: "smooth" });
          }}
          className="py-3 hover:cursor-pointer text-sm font-semibold"
        >
          Abdulrahim Sakr
        </a>

        <div>
          <ul className="menu menu-horizontal px-1 py-0 font-semibold">
            <li className="header-ul-li">
              <a
                onClick={() => {
                  document
                    .getElementById("aboutSection")
                    .scrollIntoView({ behavior: "smooth" });
                }}
                className="header-ul-li-a"
              >
                <Icon icon="radix-icons:person" width="13" height="20" />
                ABOUT
              </a>
            </li>
            <li className="header-ul-li">
              <a
                onClick={() => {
                  document
                    .getElementById("skillsSection")
                    .scrollIntoView({ behavior: "smooth" });
                }}
                className="header-ul-li-a"
              >
                <Icon icon="bi:terminal" width="13" height="20" />
                SKILLS
              </a>
            </li>
            <li className="header-ul-li">
              <a
                onClick={() => {
                  document
                    .getElementById("experienceSection")
                    .scrollIntoView({ behavior: "smooth" });
                }}
                className="header-ul-li-a"
              >
                <Icon icon="uit:bag" width="13" height="20" />
                EXPERIENCE
              </a>
            </li>
            <li className="header-ul-li">
              <a
                onClick={() => {
                  document
                    .getElementById("educationSection")
                    .scrollIntoView({ behavior: "smooth" });
                }}
                className="header-ul-li-a"
              >
                <Icon icon="iconoir:book" width="13" height="20" />
                EDUCATION
              </a>
            </li>
            {/* <li className="header-ul-li">
              <a
                onClick={() => {
                  document
                    .getElementById("projectsSection")
                    .scrollIntoView({ behavior: "smooth" });
                }}
                className="header-ul-li-a"
              >
                PROJECTS
              </a>
            </li> */}
            <li className="header-ul-li">
              <a
                onClick={() => {
                  document
                    .getElementById("contactSection")
                    .scrollIntoView({ behavior: "smooth" });
                }}
                className="header-ul-li-a"
              >
                <Icon icon="carbon:chat" width="13" height="20" />
                CONTACT
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
