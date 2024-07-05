import React, { Dispatch, SetStateAction } from "react";

interface NavProps {
  setActiveLink: Dispatch<SetStateAction<string>>;
  activeLink: string;
}

const Nav: React.FC<NavProps> = ({ setActiveLink, activeLink }) => {
  const handleClick = (link: string) => {
    setActiveLink(link);
  };

  return (
    <nav>
      <ul className="flex gap-4 border-b-2 border-gray-400 px-20 mt-4">
        <li>
          <button
            onClick={() => handleClick("home")}
            className={`mb-2  ${
              activeLink === "home" ? "underline text-red-500 font-medium" : ""
            }`}
          >
            About
          </button>
        </li>
        <li>
          <button
            onClick={() => handleClick("experience")}
            className={`mb-2 ${
              activeLink === "experience"
                ? "underline text-red-500 font-medium"
                : ""
            }`}
          >
            Experience
          </button>
        </li>
        <li>
          <button
            onClick={() => handleClick("skills")}
            className={`mb-2 ${
              activeLink === "skills"
                ? "underline text-red-500 font-medium"
                : ""
            }`}
          >
            Skills
          </button>
        </li>
        <li>
          <button
            onClick={() => handleClick("education")}
            className={`mb-2 ${
              activeLink === "education"
                ? "underline text-red-500 font-medium"
                : ""
            }`}
          >
            Education
          </button>
        </li>
        <li>
          <button
            onClick={() => handleClick("awards")}
            className={`mb-2 ${
              activeLink === "awards"
                ? "underline text-red-500 font-medium "
                : ""
            }`}
          >
            Awards&Achievements
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
