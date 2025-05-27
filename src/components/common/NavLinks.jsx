import React from "react";

export const NavLinks = ({ navText, onLinkClick, isMobile }) => {
  const handleLocalLinkClick = (e, link) => {
    if (onLinkClick && link.startsWith("#")) {
      onLinkClick();
    }
  };

  return (
    <div
      className={`flex w-full items-start ${
        isMobile ? "flex-col gap-y-6" : "flex-row gap-x-6 md:gap-x-10"
      }`}
    >
      {navText.map((item, index) => (
        <a
          key={index}
          className={`font-Josefin_Sans font-extralight text-start text-gray-200 hover:text-white transition-colors duration-200 
                      ${isMobile ? "text-lg  " : "text-sm"}`}
          href={item.link}
          onClick={(e) => handleLocalLinkClick(e, item.link)}
        >
          {item.text}
        </a>
      ))}
    </div>
  );
};
