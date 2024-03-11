import React from "react";

const PreviousButton = ({ onClick, disabled }) => {
  return (
    <>
      {/*<div className="w-[60px] h-[40px] bg-text-color rounded-[20px] flex items-center justify-center">*/}
      <button className="flex items-center w-[60px] h-[40px] bg-text-color rounded-[20px] flex items-center justify-center">
        <img className="w-[14px] h-[23px] " alt="Previous page" src="./Assets/Vector 3.svg" />
        <img className="w-[14px] h-[23px] " alt="Previous page" src="./Assets/Vector 4.svg" />
      </button>
      {/*</div>*/}
    </>
  );
};

export default PreviousButton;
