import React from "react";
import projectsData from "../projects.json";
import { Tag } from "./common/Tag.jsx";

const ProjectCard = ({ project }) => {
  const tags = project.tags && Array.isArray(project.tags) ? project.tags : [];

  return (
    <div className="flex flex-col hover:-translate-y-1 transition-transform duration-300 ease-in-out  gap-6 lg:gap-8 items-start p-4 lg:p-6 bg-blackCustom rounded-lg shadow-xl backdrop-blur-md border border-lightWhite/5 h-full">
      {/* <div className="w-full  flex-shrink-0">
        <a
          className="block hover:-translate-y-1 transition-transform duration-300 ease-in-out group rounded-lg overflow-hidden"
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="w-full  shadow-md group-hover:shadow-xl transition-shadow"
            src={project.imgSrc}
            alt={project.alt || `Screenshot of ${project.title}`}
          />
        </a>
      </div> */}

      <div className="flex flex-col gap-3 w-full">
        <h3 className="text-xl lg:text-2xl font-semibold text-white hover:text-lightWhite transition-colors">
          {project.title}
        </h3>
        <p className="text-paragraph text-sm lg:text-base leading-relaxed">
          {project.description}
        </p>
        {project.repo && (
      <div className="flex gap-4">
          <a
            className="text-greenDark font-normal hover:underline text-sm inline-block"
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
          >
            #Check Repo
          </a>

      <a
            className="text-greenDark font-normal hover:underline text-sm inline-block"
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
          >
            #See Live
          </a>
      </div>
        )}
        {tags.length > 0 && (
          <div className="mt-4">
            <div className="flex flex-row flex-wrap gap-2">
              {tags.map((tagText, index) =>
                tagText ? (
                  <Tag key={`${tagText}-${index}`} tagText={tagText} />
                ) : null
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export const Experience = () => {
  return (
    <div>
      <section
        id="explorer"
        className="relative flex items-center justify-center py-10 lg:py-16 bg-blackCustom overflow-hidden"
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

        <div className="grid grid-cols-1 lg:grid-cols-2 w-11/12 max-w-screen-lg xl:max-w-screen-xl gap-x-8 gap-y-10 lg:gap-y-12 py-4 z-10">
          <h2 className="font-Josefin_Sans lg:col-span-2 text-3xl lg:text-4xl font-semibold text-lightWhite text-left">
            Explore My Projects
          </h2>
          {projectsData.length > 0 ? (
            projectsData.map((project) => (
              <ProjectCard
                key={project.id || project.title}
                project={project}
              />
            ))
          ) : (
            <p className="text-Paragraph text-center lg:col-span-2">
              {" "}
              No projects to display at the moment.
            </p>
          )}{" "}
          <div className="w-full  flex flex-col  ">
            <p className="font-Josefin_Sans text-lg lg:text-xl text-lightWhite ">
              Find More Of My Work
            </p>
            <div className="flex gap-2 text-greenDark">
              <a
                href="https://www.frontendmentor.io/profile/eyuBirhanu"
                target="_blank"
                rel="noopener noreferrer"
                className=" hover:underline  transition-all text-sm  hover:-translate-y-[.5px] duration-300 ease-in-out"
                aria-label="Frontend Mentor Profile"
              >
                #Frontend Mentor
              </a>
              <a
                href="https://github.com/eyuBirhanu"
                target="_blank"
                rel="noopener noreferrer"
                className=" hover:underline  transition-all text-sm  hover:-translate-y-[.5px] duration-300 ease-in-out"
                aria-label="GitHub Profile"
              >
                #GitHub
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
