import React from "react";

export const ExperianceCard = ({
  title,
  dicription,
  imgSrc,
  alt,
  live,
  repo,
  tags,
}) => {
  return (
    <div className="flex flex-col gap-10 lg:flex-row sm:gap-8">
      <div className="flex flex-col gap-2">
        <a
          className="hover:-translate-y-2 duration-500 ease-in-out"
          href={live}
          target="_blank"
        >
          <img className="" src={imgSrc} alt={alt} />
        </a>
        <div>
          <a className="text-light_white font-normal hover:underline">
            {title}
          </a>
          <p className="text-Paragraph">{dicription}</p>
          <a
            className="text-greenDark font-normal hover:underline "
            href={repo}
          >
            #Check Repo
          </a>
          <div>
            {tags.map((tag, index) => (
              <span
                key={index}
                className="bg-blackCustom text-lightWhite px-4 py-1 rounded-lg border-[.2px] border-lightWhite/50 text-sm font-normal hover:bg-blackCustom/95 transition cursor-default duration-300 ease-in-out mr-2 mb-2"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
