"use client";
import React, { useState, useEffect } from "react";
import Destinations from "./components/DestinationCard/Destinations";
import PaginationButtons from "./components/PaginationButtons/PaginationButtons";
import { getDestinations } from "./services/axios";
import AlertModal from "./components/AlertModal/AlertModal";

export default function Home({ searchParams,isAuthenticated }) {
  const query = searchParams?.query;
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [destinations, setDestinations] = useState([]);
  const [loading, setLoading] = useState(false);
  const [destinationToDelete, setDestinationToDelete] = useState(null);
  const [showAlertModal, setShowAlertModal] = useState(false);

  useEffect(() => {
    const fetchData = async (page) => {
      try {
        setLoading(true);
        const response = await getDestinations(page);

        setDestinations(response.data);
        setTotalPages(response.last_page);
        setLoading(false);
        window.scrollTo({ top: 0, behavior: "smooth" });
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

  const handleDeleteButtonClick = (destination) => {
    setDestinationToDelete(destination);
    setShowAlertModal(true); 
  };

  const handleDeleteConfirm = () => {
    // Aquí puedes implementar la lógica para eliminar el destino
    console.log("Eliminar destino:", destinationToDelete);
    setShowAlertModal(false);
    // Lógica adicional para eliminar el destino del estado o de la base de datos
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-14">
      <div>
        {loading ? (
          <p>Cargando...</p>
        ) : (
          <>
            <AlertModal
              text={`¿Estás seguro de que deseas eliminar este destino?`}
              
            />
            <Destinations destinations={destinations} isAuthenticated={isAuthenticated} query={query} />

            <div className="hidden md:block">
              <PaginationButtons currentPage={currentPage} totalPages={totalPages} updatePage={handlePageUpdate} />
            </div>
          </>
        )}
      </div>
    </main>
  );
}
