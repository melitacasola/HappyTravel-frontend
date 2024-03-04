import React from "react";
import NextButton from "../NextButton/NextButton";
import PreviousButton from "../PreviousButton/PreviousButton";


const PaginationButton = () => {
    return (
        <div className="relative w-[182px] h-[40px]">
            <PreviousButton className="absolute left-0 top-0" />
            <div className="absolute w-[32px] h-[30px] top=0 left-0 [font-family:'Jaldi-Regular',Helvetica] font-bold text-blue-600 text-[10px] tracking-[0] leading-[normal]">1
            </div>
            <NextButton className="absolute left-[122px] top-0" />


        </div>


    );



};
export default PaginationButton;