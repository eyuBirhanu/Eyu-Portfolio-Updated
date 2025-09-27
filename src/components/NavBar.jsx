import React, { useState } from "react";

import "@fortawesome/fontawesome-free/css/all.min.css";

import logo from "../assets/Desktop/logo.svg";
import menuIcon from "../assets/Mobile/Menu.svg";
import closeIcon from "../assets/Close.svg";

import { NavLinks } from "./common/NavLinks";
import { SocialLinks } from "./common/SocialLinks";

export const NavBar = () => {
  const navText = [
    { text: "HOME", link: "#home" },
    { text: "EXPLORER", link: "#explorer" },
    { text: "ABOUT", link: "#about" },
    { text: "COLLABORATE", link: "#collaborate" },
  ];

  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  const closeMenu = () => {
    setIsActive(false);
  };

  return (
    <>
      <header className="flex justify-center">
        <div className="fixed top-4 z-50 flex justify-between items-center left-1/2 -translate-x-1/2 w-11/12 h-12 px-4 backdrop-blur-xl rounded-lg ">
          <a href="#home" onClick={isActive ? closeMenu : undefined}>
            {" "}
            <img src={logo} alt="Logo" className="h-6 md:h-8" />{" "}
          </a>

          <div className="hidden md:flex  items-center gap-x-6  md:gap-x-32">
            <nav>
              <NavLinks navText={navText} />
            </nav>
            <SocialLinks iconClassName="text-xl" />
          </div>

          <button
            onClick={toggleMenu}
            id="menu-toggle"
            className="sm:hidden z-[60] p-1 -mr-1 text-gray-200 hover:text-white"
            aria-label="Toggle navigation menu"
            aria-expanded={isActive}
            aria-controls="main-nav-panel"
          >
            <img
              src={isActive ? closeIcon : menuIcon}
              alt=""
              className="w-6 h-6"
            />
          </button>
        </div>
      </header>

      {isActive && (
        <>
          <div
            onClick={closeMenu}
            className="fixed inset-0 z-40 bg-black/65 sm:hidden"
            aria-hidden="true"
          ></div>

          <div
            id="main-nav-panel"
            className="fixed top-20 left-1/2 -translate-x-1/2 border-[.2px] rounded-lg border-lightWhite/50 w-10/12 z-50 backdrop-blur-lg bg-blackCustom/20 sm:hidden flex flex-col items-start justify-start p-6 shadow-xl"
          >
            <nav className="flex flex-col items-center justify-center gap-y-8 text-center w-full">
              <NavLinks navText={navText} onLinkClick={closeMenu} isMobile />
               <SocialLinks iconClassName="text-xl" />
            </nav>
          </div>
        </>
      )}
    </>
  );
};
