import React from "react";
import NextButton from "../NextButton/NextButton";
import PreviousButton from "../PreviousButton/PreviousButton";

const PaginationButtons = ({ currentPage, totalPages, updatePage }) => {
  
  const handlePrevPage = () => {
    if (currentPage > 1) {
      updatePage(currentPage - 1);
    }
  };

  const handleNextPage = () => { 
    if (currentPage < totalPages) {
      updatePage(currentPage + 1);
    }
  };

  return (
    <div className="all components w-full p-4">
      <div className="flex items-center justify-center w-full h-[40px] gap-6">
        <a onClick={handlePrevPage} disabled={currentPage === 1}>
          Previous
        </a>
        <p className="text-text-color text-[25px] ">{currentPage}</p>
        <a onClick={handleNextPage} disabled={currentPage === totalPages}>
          Next
        </a>
      </div>
    </div>
  );
};

export default PaginationButtons;
