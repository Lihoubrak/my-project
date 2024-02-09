import React, { useState } from "react";
import useIsMobile from "../hooks/useIsMobile";
import { Link, NavLink } from "react-router-dom";
import { MdDarkMode } from "react-icons/md";
import { FiMenu, FiSun } from "react-icons/fi";
import { TiDelete } from "react-icons/ti";

const Header = ({ darkMode, toggleDarkMode, toggleLanguage, language }) => {
  const [openMenu, setMenu] = useState(false);
  const isMobile = useIsMobile();

  const closeMenu = () => {
    setMenu(false);
  };

  return (
    <div className="">
      {/* Header */}
      <div
        className={`flex justify-between  items-center p-2 sm:p-3 ${darkMode ? "bg-gray-800 text-white" : "bg-white text-black"}`}
      >
        <div
          className="font-bold cursor-pointer flex items-start"
          onClick={() => (window.location.href = "/home")}
        >
          <span className="text-blue-500  text-3xl sm:text-5xl">LIHOU</span>
          <span className="bg-red-600 text-white text-sm px-2 ml-2 inline-block ">
            KH
          </span>
        </div>

        {isMobile ? (
          <FiMenu size={24} onClick={() => setMenu(!openMenu)} />
        ) : (
          <ul className="flex gap-4 items-center  ">
            <NavLink
              className={({ isActive }) =>
                `${isActive && " border-b-2 border-yellow-500 "}`
              }
              to="/blog/all"
              onClick={closeMenu}
            >
              <li
                className={`cursor-pointer ${darkMode ? "text-white" : "text-black"}`}
              >
                {language === "en" ? "Blog" : "ប្លុក"}
              </li>
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `${isActive && " border-b-2 border-yellow-500 "}`
              }
              to={"/project/all"}
              onClick={closeMenu}
            >
              <li
                className={`cursor-pointer ${darkMode ? "text-white" : "text-black"}`}
              >
                {language === "en" ? "Projects" : "គម្រោង"}
              </li>
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `${isActive && " border-b-2 border-yellow-500 "}`
              }
              to={"/about"}
              onClick={closeMenu}
            >
              <li
                className={`cursor-pointer ${darkMode ? "text-white" : "text-black"}`}
              >
                {language === "en" ? "About" : "អំពី"}
              </li>
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `${isActive && " border-b-2 border-yellow-500 "}`
              }
              to={"/newsletter"}
              onClick={closeMenu}
            >
              <li
                className={`cursor-pointer ${darkMode ? "text-white" : "text-black"}`}
              >
                {language === "en" ? "Newsletter" : "ព័ត៌មានសារ"}
              </li>
            </NavLink>
            <button
              onClick={toggleLanguage}
              className="p-1 rounded bg-blue-500 text-white hover:bg-blue-700 transition duration-300"
            >
              {language === "en" ? "KH" : "EN"}
            </button>
            <li onClick={toggleDarkMode}>
              {darkMode ? (
                <FiSun size={20} color="white" />
              ) : (
                <MdDarkMode size={20} color="black" />
              )}
            </li>
          </ul>
        )}
      </div>

      {/* Overlay */}
      {isMobile && openMenu && (
        <div
          className={`fixed top-0 left-0 w-full h-full ${darkMode ? "bg-gray-900" : "bg-black"}`}
        >
          <ul
            className={`absolute gap-10 justify-center ${darkMode ? "text-white" : "text-black"} left-0 w-full h-full flex flex-col items-center `}
          >
            <NavLink
              className={({ isActive }) =>
                `${isActive && " border-b-2 border-yellow-500 "}`
              }
              to={"/blog/all"}
              onClick={closeMenu}
            >
              <li
                className={`cursor-pointer ${darkMode ? "text-white" : "text-white"}`}
              >
                {language === "en" ? "Blog" : "ប្លុក"}
              </li>
            </NavLink>

            <NavLink
              className={({ isActive }) =>
                `${isActive && " border-b-2 border-yellow-500 "}`
              }
              to={"/project/all"}
              onClick={closeMenu}
            >
              <li
                className={`cursor-pointer ${darkMode ? "text-white" : "text-white"}`}
              >
                {language === "en" ? "Projects" : "គម្រោងការ"}
              </li>
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `${isActive && " border-b-2 border-yellow-500 "}`
              }
              to={"/about"}
              onClick={closeMenu}
            >
              <li
                className={`cursor-pointer ${darkMode ? "text-white" : "text-white"}`}
              >
                {language === "en" ? "About" : "អំពី"}
              </li>
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `${isActive && " border-b-2 border-yellow-500 "}`
              }
              to={"/newsletter"}
              onClick={closeMenu}
            >
              <li
                className={`cursor-pointer ${darkMode ? "text-white" : "text-white"}`}
              >
                {language === "en" ? "Newsletter" : "ព័ត៌មានសារ"}
              </li>
            </NavLink>
            <button
              onClick={toggleLanguage}
              className="p-1 rounded bg-blue-500 text-white hover:bg-blue-700 transition duration-300"
            >
              {language === "en" ? "KH" : "EN"}
            </button>
            <li onClick={toggleDarkMode}>
              {darkMode ? (
                <FiSun size={20} color="white" />
              ) : (
                <MdDarkMode size={20} color="white" />
              )}
            </li>

            <li
              className={`cursor-pointer ${darkMode ? "text-white" : "text-white"}`}
            >
              <TiDelete size={24} onClick={closeMenu} />
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
