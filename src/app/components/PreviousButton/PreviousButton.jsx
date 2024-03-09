import React from "react";

const PreviousButton = () => {
  return (
    <div className="w-[60px] h-[40px] bg-text-color rounded-[20px] flex items-center justify-center">
      <button className="flex items-center">
        <img className="w-[14px] h-[23px] " alt="Arrow" src="./Assets/Vector 3.svg" />
        <img className="w-[14px] h-[23px] " alt="Arrow2" src="./Assets/Vector 4.svg" />
      </button>
    </div>
  );
};

export default PreviousButton;
