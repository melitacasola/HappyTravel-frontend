import Image from "next/image";
import React from "react";

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
        <a
          className={`flex items-center w-[60px] h-[40px] bg-text-color rounded-[20px] justify-center cursor-pointer ${
            currentPage === 1 ? "pointer-events-none" : ""
          }`}
          onClick={handlePrevPage}
          disabled={currentPage === 1}
        >
          <Image width={14} height={23} alt="Next page" src="/Assets/Vector 3.svg" />
          <Image width={14} height={23} alt="Next page" src="/Assets/Vector 4.svg" />
        </a>

        <p className="text-text-color text-[25px] ">{currentPage}</p>
        <a
          className={` w-[60px] h-[40px] bg-text-color rounded-[20px] flex items-center justify-center cursor-pointer ${
            currentPage === totalPages ? "pointer-events-none" : ""
          }`}
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
        >
          <Image width={14} height={23} className="rotate-[-180.00deg]" alt="Next page" src="/Assets/Vector 3.svg" />
          <Image className="rotate-[-180.00deg]" alt="Next page" src="/Assets/Vector 4.svg" height={23} width={14}/>
        </a>
      </div>
    </div>
  );
};

export default PaginationButtons;
