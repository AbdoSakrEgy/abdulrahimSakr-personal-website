import React from "react";

const Header = () => {
  return (
    <div>
      <div className="navbar bg-white">
        <div className="flex-1">
          <a className="hover:cursor-pointer text-lg font-bold">Abdulrahim Sakr</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
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
            <li>
              <a>Projects</a>
            </li>
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
