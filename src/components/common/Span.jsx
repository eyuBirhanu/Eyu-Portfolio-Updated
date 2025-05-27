import React from "react";

const Span = ({ text }) => {
  return (
    <>
      <span className="text-greenLight text-nowrap font-normal border-[.5px] rounded-[4px] py-[1.5px] px-[6px] border-lightWhite/40  ">
        {text}
      </span>
    </>
  );
};

export default Span;
