import Image from 'next/image';


const DestinationCard = ({data}) => {
  return (
    <div className="rounded-[20px] max-w-xs mx-auto md:max-w-none md:w-1/4" style={{ backgroundColor: '#FBFDCE' }}>
      <div className="overflow-hidden mb-6 md:mb-0">
        <ul>
          {
            data?.map((item) => (
              <li key={item.attributes.id}>
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
                  <h5 className="text-2xl font-semibold" style={{ color: '#0079FF' }}>{item.attributes.title}</h5>
                  <p className="text-xl font-normal" style={{ color: '#0079FF' }}>{item.attributes.location}</p>
                  
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





