import React, { useState } from "react";
import aboutMeImage from "../assets/Desktop/about_me.png";
import Span from "./common/Span";

export const About = () => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div>
      <section
        id="about"
        className="relative flex items-center justify-center py-12 lg:py-20 bg-blackCustom overflow-hidden"
      >
        <div
          className="
    hidden lg:block 
    fixed
    w-[713.2px]
    h-[234.2px]
    rotate-[-155deg]
    blur-[150px] lg:blur-[250px]
    -right-40 lg:-right-60
    -top-20
    rounded-full
    bg-lightWhite/10 lg:bg-lightWhite/25
    pointer-events-none"
          aria-hidden="true"
        ></div>

        <div className="relative z-10 flex flex-col w-11/12 max-w-screen-lg xl:max-w-screen-xl gap-8 lg:gap-10 py-4">
          <h2 className="font-Josefin_Sans lg:col-span-2 text-3xl lg:text-4xl font-semibold text-lightWhite text-left">
            About Me
          </h2>

          <div className="flex flex-col lg:flex-row items-center lg:items-center gap-4 lg:gap-6">
            <div className="flex flex-col gap-4 text-lightWhite/60 order-2 lg:order-1">
              {" "}
              <p className="text-base leading-relaxed">
                Hi! I'm a <Span text={"Web Developer"} /> and{" "}
                <Span text={"UI/UX Designer"} /> who loves creating easy-to-use
                and engaging digital experiences. I co-founded GO2COD, a
                non-profit where we help aspiring tech professionals worldwide
                build their portfolios with free, hands-on internships,
                mentoring them in design and development.
              </p>
              <div
                className={`transition-all duration-500 ease-in-out overflow-hidden ${
                  showMore ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
                } lg:max-h-none lg:opacity-100 flex flex-col gap-4`}
                id="more-text-content"
                aria-hidden={
                  !showMore &&
                  typeof window !== "undefined" &&
                  window.innerWidth < 640
                }
              >
                <p className="text-base first-letter:leading-relaxed">
                  {" "}
                  I'm also currently boosting my skills with{" "}
                  <Span text={"A2SV (Africa to Silicon Valley)."} />, focusing
                  on Data Structures, Algorithms, and software engineering to
                  tackle real-world challenges and make a global impact.
                </p>
                <p className="text-base leading-relaxed">
                  If you're into web development, UI/UX, or projects that make a
                  difference, let's connect!
                </p>
              </div>
              <button
                onClick={toggleShowMore}
                className="lg:hidden  hover:text-[#447e54]/60 text-[#447e54] hover:underline self-start mt-2"
                aria-expanded={showMore}
                aria-controls="more-text-content"
              >
                {showMore ? "See Less" : "See More..."}
              </button>
            </div>

            <div className="flex items-center lg:w-1/2 justify-center order-1 lg:order-2 flex-shrink-0">
              {" "}
              <img
                className="shadow-lg max-w-full"
                src={aboutMeImage}
                alt="A portrait of Eyu Birhanu"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
