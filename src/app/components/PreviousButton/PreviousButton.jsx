import Image from "next/image";
import React from "react";

const PreviousButton = ({ onClick, disabled }) => {
  return (
    <>
    
      <button className="w-[60px] h-[40px] bg-text-color rounded-[20px] flex items-center justify-center">
        <Imageage width={14} height={23} alt="Next page" src="/Assets/Vector 3.svg" />
        <Image width={14} height={23} alt="Next page" src="/Assets/Vector 4.svg" />
      </button>
   
    </>
  );
};

export default PreviousButton;
