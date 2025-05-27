import React from "react";
import { SocialLinks } from "./common/SocialLinks";

export const Footer = () => {
  const nav = [
    { text: "Home", link: "#home" },
    { text: "Explorer", link: "#explorer" },
    { text: "About", link: "#about" },
    { text: "Collaborate", link: "#collaborate" },
  ];
  return (
    <>
      <footer className="flex items-center justify-center py-8 bg-blackCustom">
        <div className="flex gap-6 w-11/12 flex-col py-8">
          <hr />
          <div className="flex flex-col-reverse items-center justify-center gap-4 sm:flex-row sm:justify-between text-lightWhite/75 ">
            <p className="text-sm">
              © 2025 All rights are reserved.{" "}
              <a
                className="hover:text-lightWhite/90"
                href="https://www.linkedin.com/in/eyu-birhanu/"
              >
                {" "}
                Eyu Birhanu
              </a>{" "}
            </p>

            <div className="flex flex-col gap-4">
              <div className="flex gap-2 font-Josefin_Sans text-base">
                {nav.map((item, index) => {
                  return (
                    <React.Fragment key={index}>
                      <a className="hover:text-lightWhite/90" href={item.link}>
                        {item.text}
                      </a>
                      {index < nav.length - 1 && <p>/</p>}
                    </React.Fragment>
                  );
                })}
              </div>
              <div className="flex  gap-4 items-center justify-center sm:justify-start">
                <SocialLinks iconClassName="text-xl" />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
