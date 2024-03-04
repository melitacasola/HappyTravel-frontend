import Image from 'next/image';
import ImgEjemplo from "../../../../public/Assets/images/1.svg";

const DestinationCard = ({
  imageUrl = ImgEjemplo,
  title = "Islas Azores",
  country = "Portugal",
  topChildren = null,
  bottomChildren = null
}) => {
  return (
    <div className="rounded-[20px] max-w-xs mx-auto md:max-w-none md:w-1/4" style={{ backgroundColor: '#FBFDCE' }}>
      <div className="overflow-hidden mb-6 md:mb-0">
        <div className="w-full h-72 relative">
          {topChildren}
          <Image
            src={imageUrl}
            alt={title}
            layout="fill"
            objectFit="cover"
            className="rounded-[20px_20px_0_0]"
          />
        </div>
        <div className="p-4">
          <h5 className="text-2xl font-semibold" style={{ color: '#0079FF' }}>{title}</h5>
          <p className="text-xl font-normal" style={{ color: '#0079FF' }}>{country}</p>
          {bottomChildren}
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;





