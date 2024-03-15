"use client";
import React, { useState, useEffect } from "react";
import Destinations from "./components/DestinationCard/Destinations";
import PaginationButtons from "./components/PaginationButtons/PaginationButtons";
import { deleteDestination, getDestinations } from "./services/axios";
import AlertModal from "./components/AlertModal/AlertModal";
import { useAuthContext } from "../contexts/authContext";

export default function Home({ searchParams }) {
  const query = searchParams?.query;

  const { getAuthToken,isAuthenticated } = useAuthContext()


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

 const handleDeleteConfirm = async () => {
    try {
      // Aquí puedes implementar la lógica para eliminar el destino
      await deleteDestination(destinationToDelete.id);
      console.log("Destino eliminado:", destinationToDelete);
      setShowAlertModal(false);
      // Lógica adicional para eliminar el destino del estado o de la base de datos
    } catch (error) {
      console.error("Error al eliminar el destino:", error);
    }
  };


  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-14">
      <div>
        {loading ? (
          <p>Cargando...</p>
        ) : (
          // <>
          //   {showAlertModal && <AlertModal text={`¿Estás seguro de que deseas eliminar este destino?`} onClose={() => setShowAlertModal(false)} />}
          //   <Destinations destinations={destinations} query={query} onDeleteButtonClick={handleDeleteButtonClick} isAuthenticated={isAuthenticated} showAlertModal={showAlertModal} setShowAlertModal={setShowAlertModal} />
          //   {isAuthenticated && ( // Mostrar los botones solo si el usuario está autenticado
          //     <div className="hidden md:block">
          //       <PaginationButtons currentPage={currentPage} totalPages={totalPages} updatePage={handlePageUpdate} />
          //     </div>
          //   )}
          // </>
          <>
          {/* {showAlertModal && <AlertModal text={`¿Estás seguro de que deseas eliminar este destino?`} onClose={() => setShowAlertModal(false)} />} */}
            <Destinations destinations={destinations} query={query} isAuthenticated={isAuthenticated} />
            <div className="hidden md:block">
              <PaginationButtons currentPage={currentPage} totalPages={totalPages} updatePage={handlePageUpdate} />
            </div>
          
        </>
        )}
      </div>
    </main>
  );
}
