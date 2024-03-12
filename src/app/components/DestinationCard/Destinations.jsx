"use client";
import { useState, useEffect } from "react";
import DestinationCard from "./DestinationCard";
import { getDestinations, checkUserSession } from "../../services/axios";
import { filterData } from "@/app/utils/filterData";


const Destinations = ({ query }) => {
  const [data, setDestinations] = useState([]);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false); // Estado para manejar la autenticación del usuario
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const sessionStatus = await checkUserSession(); // Verifica el estado de la sesión
        setIsUserLoggedIn(sessionStatus); // Actualiza el estado de inicio de sesión
        const response = await getDestinations();
        setDestinations(response);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const filteredData = filterData(data, query);

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div> 
      {
        filteredData.length > 0 ?
        filteredData.map((item, index) => <DestinationCard key={index} data={item} isUserLoggedIn={isUserLoggedIn} />) :
        data.data.map((item, index) => <DestinationCard key={index} data={item} isUserLoggedIn={isUserLoggedIn} />)
      }
    </div>
  );
};

export default Destinations;
