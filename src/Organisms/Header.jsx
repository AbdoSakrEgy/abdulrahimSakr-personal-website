import React from "react";

const Header = () => {
  return (
    <div>
      <div className="navbar drop-shadow-md px-6 bg-white">
        <div className="flex-1">
          <a className="hover:cursor-pointer font-semibold">
            Abdulrahim Sakr
          </a>
        </div>

        <div className="flex-none">
          <ul className="menu menu-horizontal px-1 font-semibold">
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Skills</a>
            </li>
            <li>
              <a>Experience</a>
            </li>
            <li>
              <a>Education</a>
            </li>
            {/* <li>
              <a>Projects</a>
            </li> */}
            <li>
              <a>Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
