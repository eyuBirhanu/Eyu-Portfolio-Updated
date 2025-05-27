import React from "react";
import profile from "../assets/Desktop/Profile.png";
import bounce from "../assets/avaliable Bounce.svg";
import cv from "../assets/Eyu_Birhanus's_cv.pdf";

export const Hero = () => {
  return (
    <div>
      <section
        id="home"
        className="bg-linearBlack text-lightWhite pt-24 pb-20 lg:h-screen flex flex-col items-center justify-center gap-4 px-4"
      >
        <img className="w-40 max-w-[160px]" src={profile} alt="Profile" />
        <h1 className="text-3xl lg:text-4xl font-medium">Hi, I’m Eyu</h1>
        <div className="flex font-light text-lightWhite/80 bg-grayDark gap-1 px-3 rounded-xl ">
          <img src={bounce} alt="" />
          <p>Available for freelance</p>
        </div>
        <p className="text-3xl lg:text-4xl font-medium text-center px-4">
          Crafting Seamless Digital Experiences
        </p>
        <p className="text-base text-paragraph text-center sm:8/12 lg:w-4/12">
          Passionate web developer & UI/UX designer, turning ideas into
          intuitive and stunning digital solutions
        </p>
        <a
          download="Eyu_Birhanus's cv"
          className="bg-lightWhite hover:bg-white/80 text-blackCustom font-medium py-3 px-14 rounded-xl"
          href={cv}
          target="_blank"
        >
          Download Cv
        </a>
      </section>
    </div>
  );
};
