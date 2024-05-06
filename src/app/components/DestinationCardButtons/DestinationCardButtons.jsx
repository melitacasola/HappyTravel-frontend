"use client";

import Image from 'next/image';

export const EditButton = ({ onClick }) => (
  <div className="cursor-pointer" onClick={onClick}>
    <Image
      src="/assets/edit-icon.svg"
      alt="edith"
      width={41}
      height={41}
    />
  </div>
);

export const DeleteButton = ({ onClick }) => (
  <div className="cursor-pointer" onClick={onClick} >
    <Image
      src="/Assets/Delete-icon.svg"
      alt="Eliminar"
      width={33}
      height={33}
    />
  </div>
);