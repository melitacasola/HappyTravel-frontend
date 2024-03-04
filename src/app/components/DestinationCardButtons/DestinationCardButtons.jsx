"use client";

import Image from 'next/image';

export const EditButton = () => (
  <div className="cursor-pointer">
    <Image
      src="/assets/edit-icon.svg" // Asegúrate de que la ruta sea correcta
      alt="Editar"
      width={24}
      height={24}
    />
  </div>
);

export const DeleteButton = () => (
  <div className="cursor-pointer">
    <Image
      src="/assets/delete-icon.svg" // Asegúrate de que la ruta sea correcta
      alt="Eliminar"
      width={24}
      height={24}
    />
  </div>
);