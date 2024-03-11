"use client";
import React, { useState, useEffect } from "react";
import Destinations from "./components/DestinationCard/Destinations";
import PaginationButtons from "./components/PaginationButtons/PaginationButtons";
import { getDestinations } from "./services/axios";

export default function Home({searchParams}) {
  const query = searchParams?.query;
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    const fetchData = async (page) => {
      try {
        const response = await getDestinations(page);
        setDestinations(response.data);
        setTotalPages(response.meta.last_page);
        
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData(currentPage); 
  }, [currentPage]);

  const handlePageUpdate = async (page) => {
    setCurrentPage(page);
    
    const response = await getDestinations(currentPage);
    setDestinations(response.data);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-14">
      <div>
        <Destinations destinations={destinations} query={query}/>

        <div className="hidden md:block">
          <PaginationButtons currentPage={currentPage} totalPages={totalPages} updatePage={handlePageUpdate} />
        </div>
      </div>
    </main>
  );
}
