import React from "react";
import NextButton from "../NextButton/NextButton";
import PreviousButton from "../PreviousButton/PreviousButton";


const PaginationButton = () => {
    return (
        <div className="fixed bottom-0 left-0 w-full bg-white p-4">
            <div className="relative flex items-center justify-center w-full h-[40px] text-2x1 gap-6">
                <PreviousButton className="absolute left-0 top-0 " /> 1
                <div className="absolute w-[32px] h-[30px] top-0 left-0 [font-family:'Jaldi-Regular',Helvetica] font-bold text-blue-600 text-[10px] tracking-[0] leading-[normal]">
                </div>
                <NextButton className="absolute left-[0px] top-0" />
            </div>
        </div>


    );



};
export default PaginationButton;