import Image from 'next/image';
import Link from 'next/link';


const DestinationCard = ({data}) => {
  return (
    <div className="rounded-[20px] max-w-xs mx-auto md:max-w-none md:w-1/4 bg-bg-color">
      <div className="overflow-hidden mb-6 md:mb-0">
        <ul>
          {
            data?.map((item, index) => (
              <li key={index}>
                <div className="w-full h-72 relative">
                    
                  {/* <Image
                    src={item.attributes.image}
                    alt={item.attributes.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-[20px_20px_0_0]"
                  /> */}
                </div>
                <div className="p-4">
                  <Link href={`/details/${item.id}`}>
                  <h5 className="text-2xl font-semibold text-text-color" >{item.attributes.title}</h5>
                  </Link>
                  <p className="text-xl font-normal text-text-color">{item.attributes.location}</p>
                </div>
              </li>
            ))
          }

        </ul>
        
      </div>
    </div>
  );
};

export default DestinationCard;





