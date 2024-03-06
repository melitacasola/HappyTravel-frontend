import React from "react";
import NextButton from "../NextButton/NextButton";
import PreviousButton from "../PreviousButton/PreviousButton";


const PaginationButton = () => {
    return (
        <div className="all components fixed bottom-0 left-0 w-full bg-white p-4">
            <div className="text 1 relative flex items-center justify-center w-full h-[40px] text-2x1 gap-6">
                <PreviousButton className="absolute left-0 top-0 " /> 1

                <NextButton className="absolute left-[0px] top-0" />
            </div>
        </div>


    );



};
export default PaginationButton;