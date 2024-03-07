"use client";
import { useState, useEffect } from "react";
import DestinationCard from "./DestinationCard";
import { getDestinations } from "../../services/axios";
import { filterData } from "@/app/utils/filterData";

const Destinations = ({query}) => {

  const [data, setDestinations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const dataFilter= filterData(data, query)

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
      {
        dataFilter.length >0 ? (<DestinationCard data={dataFilter} />) : (<DestinationCard data={data.data} />)
      }
     {/*<DestinationCard data={data.data} />*/}
    </div>
  );
};

export default Destinations;
