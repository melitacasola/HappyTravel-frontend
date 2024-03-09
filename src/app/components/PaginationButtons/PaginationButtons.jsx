import React from "react";
import NextButton from "../NextButton/NextButton";
import PreviousButton from "../PreviousButton/PreviousButton";

const PaginationButton = () => {
  return (
    <div className="all components w-full p-4">
      <div className="flex items-center justify-center w-full h-[40px] gap-6">
        <PreviousButton />
        <button className="text-text-color text-[25px] ">1</button>
        <NextButton />
      </div>
    </div>
  );
};
export default PaginationButton;
