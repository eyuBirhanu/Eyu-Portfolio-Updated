import React from "react";
const socialLinks = [
  { icon: "fa-github", link: "https://github.com/eyuBirhanu" },
  { icon: "fa-linkedin", link: "https://www.linkedin.com/in/eyu-birhanu/" },
  { icon: "fa-telegram", link: "https://t.me/eyubirhanu" },
  { icon: "fa-code", link: "https://leetcode.com/u/Eyu-Birhanu/" },
];

export const SocialLinks = () => {
  return (
    <div className="hidden lg:flex  gap-4 items-center justify-center">
      {socialLinks.map((item, index) => {
        return (
          <a
            key={index}
            target="_blank"
            className="text-iconColor hover:text-lightWhite"
            href={item.link}
          >
            <i className={`${item.icon === "fa-code" ? "fa-solid" : "fa-brands"} ${item.icon}`}></i>
          </a>
        );
      })}
    </div>
  );
};
