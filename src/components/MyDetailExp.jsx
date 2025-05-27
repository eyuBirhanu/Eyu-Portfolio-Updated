import React, { useState } from "react";
import experiance from "../experience.json";
import "@fortawesome/fontawesome-free/css/all.min.css";

export const MyDetailExp = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div>
      <section className="flex items-center justify-center py-4 bg-blackCustom text-lightWhite">
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
        <div className="flex gap-6 w-11/12 flex-col py-4">
          <h2 className="font-Josefin_Sans lg:col-span-2 text-3xl lg:text-4xl font-semibold text-lightWhite text-left">
            Experience
          </h2>
          <div className="flex flex-col lg:flex-row gap-8 w-full overflow-hidden">
            <div className="gap-8 grid grid-cols-1 lg:grid-cols-2 lg:items-start">
              {experiance.map((exp, index) => {
                const isActive = activeIndex === index;
                return (
                  <div key={index} className="flex gap-4 w-full">
                    <p className="text-greenDark text-sm font-medium">
                      {exp.year}
                    </p>
                    <div className="flex gap-2 flex-col w-full">
                      <div className=" flex justify-between items-center gap-8 w-full">
                        <p
                          onClick={() => handleClick(index)}
                          className=" hover:bg-lightWhite/5 rounded-sm w-full font-medium text-lg lg:text-xl cursor-pointer"
                        >
                          {exp.title}
                        </p>
                        <i
                          onClick={() => handleClick(index)}
                          className={`${
                            isActive ? "fa-angle-up" : "fa-angle-down"
                          } fa-solid text-iconColor hover:text-lightWhite/75 text-sm cursor-pointer`}
                        ></i>
                      </div>
                      <p className="text-paragraph text-base">{exp.since}</p>
                      {isActive && (
                        <div className="detail flex gap-1 flex-col">
                          {" "}
                          {exp.description.map((disc, discIndex) => {
                            return (
                              <div
                                key={discIndex}
                                className="flex gap-2 items-start text-light_white/65 "
                              >
                                <div className="mt-[6px] min-w-2 min-h-2 bg-lightWhite/65 rounded-full"></div>
                                <p className="text-lightWhite/70">{disc}</p>
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
