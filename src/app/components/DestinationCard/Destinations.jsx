"use client";
import { useState, useEffect } from "react";
import DestinationCard from "./DestinationCard";
import { getDestinations } from "../../services/axios";

const Destinations = () => {

  const [data, setDestinations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getDestinations();
        setDestinations(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <DestinationCard data={data.data} />
    </div>
  );
};

export default Destinations;
