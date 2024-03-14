"use client";

import { usePathname } from "next/navigation";
import { useFetchApi } from "../../services/useFetchApi";
import Image from "next/image";
import { EditButton, DeleteButton } from "../DestinationCardButtons/DestinationCardButtons"


const DestinationDetails = () => {
  const pathname = usePathname().split("/");
  const urlApi = `http://localhost:8000/api/destinations/` + pathname[2];

  const { data, loading, error } = useFetchApi(urlApi);
  

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!data || !data.attributes || !data.attributes.image) {
    return <div>No hay datos disponibles.</div>;
  }

  const imageUrl = `http://localhost:8000${data.attributes.image}`;
  
  return (
    <div className="m-32 flex flex-row justify-center ">
      
      {data.attributes.image && (
        <Image
          src={imageUrl}
          width="500"
          height="500"
          alt={data.attributes.title}
          className="rounded-xl"
        />
      )}
      

      <div className="flex flex-col pl-6">
        <div className="flex flex-row justify-between">
          <div className="flex flex-col">
            <h1 className="text-5xl text-secondary">{data.attributes.title}</h1>
            <h3 className="text-2xl font-normal text-secondary">{data.attributes.location}</h3>
        </div>
        <div className="flex flex-row p-4 gap-2">
              <EditButton />
              <DeleteButton />
          </div>
        </div>
        
        <p className="text-2xl font-normal pt-8">{data.attributes.description}</p>
      </div>
    </div>
  );
};

export default DestinationDetails;
