import React from "react";
import profile from "../assets/Desktop/Profile.png";
import bounce from "../assets/avaliable Bounce.svg";
// import cv from "../assets/cv_2025.pdf";

// import { motion } from "framer-motion";
// import { fadeIn } from "../Variant";

export const Hero = () => {
  return (
    <div>
      <motion
        // initial="hidden"
        // whileInView={"show"}
        // variants={fadeIn("up", 0.2)}
        // viewport={{ once: true, amount: 0.2 }}
        id="home"
        className="bg-linearBlack text-lightWhite pt-24 pb-20 lg:h-screen flex flex-col items-center justify-center gap-4 px-4"
      >
        <img className="w-40 max-w-[160px]" src={profile} alt="Profile" />
        <h1 className="text-3xl lg:text-4xl font-medium">Hi, I’m Eyu</h1>
        <div className="flex items-center font-light text-lightWhite/80 bg-grayDark gap-1 px-3 rounded-xl">
          <span className="relative flex items-center justify-center w-5 h-5">
            <span className="absolute inline-flex h-full w-full rounded-full bg-lightWhite opacity-75 animate-ping"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-lightWhite"></span>
          </span>
          <p>Available for freelance</p>
        </div>
        <p
          // initial="hidden"
          // whileInView={"show"}
          // variants={fadeIn("right", 0.2)}
          // viewport={{ once: true, amount: 0.2 }}
          className="text-3xl lg:text-4xl font-medium text-center px-4"
        >
          Crafting Seamless Digital Experiences
        </p>
        <p className="text-base text-paragraph text-center sm:8/12 lg:w-4/12">
          Passionate web developer & UI/UX designer, turning ideas into
          intuitive and stunning digital solutions
        </p>
        <a
          className="bg-lightWhite hover:bg-white/80 text-blackCustom font-medium py-3 px-14 rounded-xl"
          href={"https://drive.google.com/file/d/1AkJGceZKBtOnjVG7geiTbVuRRm-w9Ogy/view?usp=sharing"}
          target="_blank"
        >
          Resume
        </a>
      </motion>
    </div>
  );
};
