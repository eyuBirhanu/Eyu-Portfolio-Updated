import React from "react";

export const Tag = ({ tagText }) => {
  return (
    <span className="bg-blackCustom text-white/80 px-4 py-1 rounded-md border-[.2px] border-lightWhite/20 hover:border-lightWhite/50 hover:text-lightWhite/90 text-sm font-normal hover:bg-blackCustom/95 transition cursor-default duration-300 ease-in-out">
      {tagText}
    </span>
  );
};
