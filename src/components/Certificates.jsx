import React from "react";
import certificateJson from "../certificates.json";
import "@fortawesome/fontawesome-free/css/all.min.css";

export const Certificates = () => {
  return (
    <div>
      <section className="flex items-center justify-center py-8 bg-blackCustom text-lightWhite">
        <div className="flex gap-6 w-11/12 flex-col py-8">
          <h2 className="font-Josefin_Sans lg:col-span-2 text-3xl sm:text-4xl font-semibold text-lightWhite text-left">
            Certification
          </h2>
          <div className="flex flex-col sm:flex-row gap-8 sm:gap-4">
            {certificateJson.map((certificate) => {
              return (
                <div key={certificate.id} className=" w-full lg:w-1/3 flex">
                  <div className="w-10/12 flex flex-col gap-4">
                    <p className="w-11/12 font-medium text-xl ">
                      {certificate.title}
                    </p>
                    <div className="w-11/12 text-lightWhite/55 text-base">
                      {certificate.description}
                      <p className="text-greenDark text-sm/8 ">
                        #{certificate.year}
                      </p>
                    </div>
                  </div>
                  <a
                    href={certificate.link}
                    className="flex items-center justify-center hover:bg-lightWhite/5 h-[24px] w-[24px]"
                  >
                    <i className="fa-solid  text-lightWhite/55 hover:text-lightWhite/80  fa-up-right-from-square"></i>
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};
