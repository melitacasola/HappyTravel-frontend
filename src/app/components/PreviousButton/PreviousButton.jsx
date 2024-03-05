import React from "react";

const PreviousButton = () => {
    return (
        <div className="button relative w-[60px] h-[40px] bg-blue-600 rounded-[20px] flex items-center justify-center">

            <div className="flex items-center">
                <img className="w-[14px] h-[23px] " alt="Arrow" src="./Assets/Vector 3.svg" />
                <img className="w-[14px] h-[23px] " alt="Arrow2" src="./Assets/Vector 4.svg" />
            </div>
        </div>
    );
};

export default PreviousButton;
