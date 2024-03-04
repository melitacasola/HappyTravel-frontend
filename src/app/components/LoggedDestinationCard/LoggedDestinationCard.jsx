"use client";

import React from 'react';
import DestinationCard from '../DestinationCard/DestinationCard';
import { EditButton, DeleteButton } from '../DestinationCardButtons/DestinationCardButtons';
import Image from 'next/image';

const LoggedDestinationCard = ({ imageUrl, title, country }) => {
  return (
    <DestinationCard imageUrl={imageUrl} title={title} country={country}>
      {/* Aquí van los botones de Editar y Eliminar */}
      <div className="flex justify-end space-x-2">
        <EditButton />
        <DeleteButton />
      </div>
      {/* Botón de detalles en la esquina superior derecha */}
      <div className="absolute top-0 right-0 p-2">
        <Image
          src="/assets/question-icon.svg" // Asegúrate de que la ruta sea correcta
          alt="Ver detalles"
          width={24}
          height={24}
className="cursor-pointer"
/>
</div>
</DestinationCard>
);
};

export default LoggedDestinationCard;


