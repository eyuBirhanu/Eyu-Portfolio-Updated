import React from "react";
import email from "../assets/email.svg";
import collaborate from "../assets/collaborate.svg";
import "@fortawesome/fontawesome-free/css/all.min.css";

export const Collaborate = () => {
  return (
    <div>
      <section
        id="collaborate"
        className="flex bg-blackCustom items-center justify-center py-8 px-4"
      >
        <div className="flex items-center justify-center h-[400px] lg:h-[500px]  bg-lightWhite text-blackCustom w-[95%] max-w-[1600px] flex-col py-8 rounded-2xl">
          <div className="relative flex items-center justify-center flex-col gap-6">
            <img
              className="w-[90px] h-[90px] lg:w-[120px] lg:h-[120px]"
              src={collaborate}
              alt="collaborate"
            />
            <p className="w-10/12 text-center font-Josefin_Sans text-3xl lg:text-4xl font-medium">
              Tell me about your next project
            </p>
            <div className="flex flex-col lg:flex-row gap-6 ">
              <a
                className="w-full flex  items-center gap-2 bg-blackCustom hover:bg-blackCustom/90 text-lightWhite font-medium py-3 px-8 rounded-xl"
                href="eyubirhanu01@gmail.com"
              >
                <img src={email} alt="email" />
                <p className="text-nowrap">Email me</p>
              </a>
              <a
                className="w-full flex items-center gap-2 bg-light_white border-blackCustom border-[1.5px] hover:border-blackCustom/90 text-blackCustom hover:text-blackCustom/90 font-medium py-3 px-8 rounded-xl"
                href="https://t.me/eyubirhanu"
              >
                <i className="fa-brands fa-telegram text-blackCustom"></i>
                <p>Telegram</p>
              </a>
            </div>
          </div>
          <div className="absolute w-full max-w-[713px] h-[100px] lg:h-[234.2px] rotate-[35deg] blur-[250px] lg:blur-[150px] right-0 lg:-right-40 rounded-full bg-blackCustom/25"></div>
          <div className="hidden lg:inline absolute w-[713.2px] h-[234.2px] rotate-[-155deg] blur-[150px] -left-60 rounded-full bg-blackCustom/25"></div>
        </div>
      </section>
    </div>
  );
};
