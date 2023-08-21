import React from "react";
import { Icon } from "@iconify/react";

export default function Header() {
  return (
    <div className="sticky top-0 z-50">
      <div className="flex justify-between shadow-md px-6 py-0 bg-white">
        {/* Sidebar for large screen */}
        <div className="drawer hidden res-sidebar">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content py-2">
            {/* Page content here */}
            <label htmlFor="my-drawer" className="text-gray-800">
              <Icon icon="quill:hamburger-sidebar" width="30" />
            </label>
          </div>
          <div className="drawer-side">
            <label htmlFor="my-drawer" className="drawer-overlay"></label>
            <ul className="menu p-4 w-[50%] h-full bg-base-200 text-base-content">
              {/* Sidebar content here */}
              {/* About */}
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
              {/* SKILLS */}
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
              {/* PROJECTS */}
              <li className="header-ul-li">
                <a
                  onClick={() => {
                    document
                      .getElementById("projectsSection")
                      .scrollIntoView({ behavior: "smooth" });
                  }}
                  className="header-ul-li-a"
                >
                  <Icon icon="icon-park-outline:workbench" />
                  PROJECTS
                </a>
              </li>
              {/* EXPERIENCE */}
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
              {/* EDUCATION */}
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
              {/* CONTACT */}
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
        {/* Sidebar for large screen */}

        <a
          onClick={() => {
            document
              .getElementById("aboutSection")
              .scrollIntoView({ behavior: "smooth" });
          }}
          className="py-3 hover:cursor-pointer text-sm font-semibold resp-HeaderSec"
        >
          Abdulrahim Sakr
        </a>

        {/* Sidebar for small screen */}
        <div>
          <ul className="menu menu-horizontal px-1 py-0 font-semibold resp-HeaderSec">
            {/* About */}
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
            {/* SKILLS */}
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
            {/* PROJECTS */}
            <li className="header-ul-li">
              <a
                onClick={() => {
                  document
                    .getElementById("projectsSection")
                    .scrollIntoView({ behavior: "smooth" });
                }}
                className="header-ul-li-a"
              >
                <Icon icon="icon-park-outline:workbench" />
                PROJECTS
              </a>
            </li>
            {/* EXPERIENCE */}
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
            {/* EDUCATION */}
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
            {/* CONTACT */}
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
        {/* Sidebar for small screen */}
      </div>
    </div>
  );
}
