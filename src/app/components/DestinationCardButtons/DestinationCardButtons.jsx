"use client";

import Image from 'next/image';

export const EditButton = ({ onClick }) => (
  <div className="cursor-pointer" onClick={onClick}>
    <Image
      src="/assets/edit-icon.svg"
      width={31}
      height={31}
    />
  </div>
);

export const DeleteButton = ({ onClick }) => (
  <div className="cursor-pointer" onClick={onClick} >
    <Image
      src="/Assets/Delete-icon.svg"
      alt="Eliminar"
      width={24}
      height={24}
    />
  </div>
);