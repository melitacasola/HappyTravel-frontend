import React from "react";
import NextButton from "../NextButton/NextButton";
import PreviousButton from "../PreviousButton/PreviousButton";

const PaginationButtons = ({ currentPage, totalPages, updatePage }) => {
  const handlePrevPage = () => {
    console.log("Click on previous");
    if (currentPage > 1) {
      console.log("Clic en el botón anterior");
      updatePage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    console.log("Clik on next");
    if (currentPage < totalPages) {
      console.log("Clic en el botón siguiente");
      updatePage(currentPage + 1);
    }
  };

  return (
    <div className="all components w-full p-4">
      <div className="flex items-center justify-center w-full h-[40px] gap-6">
        <a onClick={handlePrevPage} disabled={currentPage === 1}>
          Previous
        </a>
        {/*<PreviousButton onClick={handlePrevPage} disabled={currentPage === 1} />*/}
        <p className="text-text-color text-[25px] ">{currentPage}</p>
        <a onClick={handleNextPage} disabled={currentPage === totalPages}>
          Next
        </a>
        {/*<NextButton onClick={handleNextPage} disabled={currentPage === totalPages} /> */}
      </div>
    </div>
  );
};

export default PaginationButtons;
