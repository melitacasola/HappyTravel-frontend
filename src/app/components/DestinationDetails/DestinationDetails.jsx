"use client";

import { usePathname, useRouter } from "next/navigation";
import axios from "axios";
import Image from "next/image";
import { EditButton, DeleteButton } from "../DestinationCardButtons/DestinationCardButtons"
import { useEffect, useState } from "react";
import { getDestinationId, deleteDestination } from "@/app/services/axios";
import { useAuthContext } from "@/contexts/authContext";
import AlertModal from "../AlertModal/AlertModal";

const DestinationDetails = () => {
  const [destination, setDestination] = useState('');
  const [loading, setLoading] = useState(false);

  const pathname = usePathname().split("/");

  const { getAuthToken } = useAuthContext()
  const [isAuthenticated, setIsAuthenticated] = useState(!!getAuthToken());
  const router = useRouter()

  const [isOpen, setIsOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [deletingItemId, setDeletingItemId] = useState(null);
 
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await getDestinationId(pathname[2]);

        setDestination(response);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData(pathname[2]);
  }, []);

  const destinationId = pathname[2];
  const handleDelete = async (destinationId) => {
    try {
      const authToken = getAuthToken();
      if (!authToken) {
        console.error("No se encontró el token de autenticación.");
        return;
      }

      await axios.get("/sanctum/csrf-cookie");

      await deleteDestination(destinationId, authToken);
      setIsOpen(false);
      handleAfterDelete();

    } catch (error) {
      console.error("Error al eliminar el destino:", error.response.data.error);
      setErrorMessage(error.response.data.error);
      setIsOpen(true);
    }
  };
  const handleAfterDelete = () => {
    
    router.push("/");
  };
  const confirmDelete = (destinationId) => {
    setDeletingItemId(destinationId);
    setIsOpen(true);
  };
  const handleDirection = ()=>{
    router.push(`/admin/editdestination/${destinationId}`) 
  }

  return (
    <div className="m-32 flex flex-row justify-center ">
      {loading ? (
        <p>Cargando...</p>
      ) : (
        <>
          {destination && destination.attributes && destination.attributes.image && (
            <>
              <Image
                src={`http://localhost:8000${destination.attributes.image}`}
                width="500"
                height="500"
                alt={destination.attributes.title}
                className="rounded-xl"
              />
              <div className="flex flex-col pl-6">
                <div className="flex flex-row justify-between gap-10">
                  <div className="flex flex-col">
                    <h1 className="text-5xl text-secondary">{destination.attributes.title}</h1>
                    <h3 className="text-2xl font-normal text-secondary">{destination.attributes.location}</h3>
                  </div>

                  {isAuthenticated && (
                    <div className="flex flex-row p-4 gap-2">
                      <EditButton onClick={()=>handleDirection(`${destination.id}`)}/>

                      <DeleteButton onClick={() => {
                        confirmDelete(destination.id)
                      }} />
                    </div>
                  )}
                </div>
                <p className="text-2xl font-normal pt-8">{destination.attributes.description}</p>
              </div>
            </>
          )}
          
        </>
      )}
        <AlertModal 
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          text="¿Estás seguro de que deseas eliminar este destino?"
          error={errorMessage}
          onConfirm={() => {
            handleDelete(deletingItemId);
            setDeletingItemId(null);
            setIsOpen(false);
          }}
        /> 
    </div>
  );
};

export default DestinationDetails;
