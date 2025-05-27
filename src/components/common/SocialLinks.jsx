import React from "react";
const socialLinks = [
  { icon: "fa-github", link: "https://github.com/Eyu32" },
  { icon: "fa-linkedin", link: "https://www.linkedin.com/in/eyu-birhanu/" },
  { icon: "fa-telegram", link: "https://t.me/eyubirhanu" },
  { icon: "fa-instagram", link: "" },
];

export const SocialLinks = () => {
  return (
    <div className="hidden lg:flex  gap-4 items-center justify-center">
      {socialLinks.map((item, index) => {
        return (
          <a
            key={index}
            className="text-iconColor hover:text-lightWhite"
            href={item.link}
          >
            <i className={`fa-brands ${item.icon}`}></i>
          </a>
        );
      })}
    </div>
  );
};
