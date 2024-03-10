"use client";
import React, { useState, useEffect } from "react";
import Destinations from "./components/DestinationCard/Destinations";
import PaginationButtons from "./components/PaginationButtons/PaginationButtons";
import { getPagination } from "./services/axios";

export default function Home({ searchParams }) {
  const query = searchParams?.query;
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getPagination(currentPage);
        if (response && response.data) {
          setTotalPages(response.last_page);
          setDestinations(response.data);
          console.log("Data from API:", response.data);
        } else {
          console.error("Response or response data is undefined:", response);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [currentPage]);

  const handlePageChange = (page) => {
    console.log("Changing to page:", page);
    setCurrentPage(page);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-14">
      <div>
        <Destinations destinations={destinations} query={query} />
        <div className="hidden md:block">
          <PaginationButtons currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
        </div>
      </div>
    </main>
  );
}
