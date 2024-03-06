import React from "react";

const NextButton = () => {
    return (
        <div className="button relative w-[60px] h-[40px] bg-blue-600 rounded-[20px] flex items-center justify-center">

            <div className="absolute w-[22px] h-[23px] flex items-center">
                <img className="w-[14px] h-[23px] rotate-[-180.00deg]" alt="Arrow" src="./Assets/Vector 3.svg" />
                <img className="w-[14px] h-[23px] rotate-[-180.00deg]" alt="Arrow" src="./Assets/Vector 4.svg" />
            </div>
        </div>
    );
};

export default NextButton;
