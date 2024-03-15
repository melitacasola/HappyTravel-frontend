"use client";
import { useState, useEffect } from "react";
import DestinationCard from "./DestinationCard";
import { getDestinations, checkUserSession } from "../../services/axios";
import { filterData } from "@/app/utils/filterData";

const Destinations = ({ destinations, query }) => {
  const filteredData = destinations ? filterData(destinations, query) : [];

  return (
    <div className="min-h-screen">
      {filteredData.length > 0 ? <DestinationCard data={filteredData} /> : <div>No hay destinos disponibles.</div>}
    </div>
  );
};

export default Destinations;
