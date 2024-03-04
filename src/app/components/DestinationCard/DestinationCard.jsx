"use client";

import Image from 'next/image';
import ImgEjemplo from "../../../../public/Assets/images/1.svg";

const DestinationCard = () => {
  const imageUrl = "./Assets/images/1.svg";
  const title = "Islas Azores";
  const country = "Portugal";

  return (
    <div className="rounded-[20px_20px_20px_20px] max-w-xs mx-auto md:max-w-none md:w-1/4" style={{ backgroundColor: '#FBFDCE' }}>
      <div className="overflow-hidden mb-6 md:mb-0">
        
        <div className="w-full h-72 relative">
          <Image
            className="rounded-[20px_20px_10px_20px]"
            src={ImgEjemplo}
            alt={title}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="p-4">
          <h5 className="text-2xl font-semibold mb-2 style={{ color: '#0079FF' }}">{title}</h5>
          <p className="text-xl font-normal style={{ color: '#0079FF' }}">{country}</p>
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;


