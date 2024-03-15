import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useAuthContext } from "../../../contexts/authContext";
import { deleteDestination } from "../../services/axios";

import { EditButton, DeleteButton } from "../DestinationCardButtons/DestinationCardButtons"

const DestinationCard = ({ data}) => {
  
  /* CSS styles */
  const gridWrapper = `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[2rem]`;
  const gridItem = `w-[18.75rem] bg-bg-color rounded-[20px_20px_20px_20px]`;
  const imgWrapper = `w-[18.75rem] h-[18.75rem] relative`;
  const infoIconStyle = `w-[3.125rem] h-[3.125rem] z-10 absolute right-2 top-2`;
  const imgStyle = `w-[18.75rem] h-[18.75rem] rounded-[20px_20px_20px_20px]`;
  const titleStyle = `text-2xl font-semibold text-text-color`;
  const textStyle = `text-xl font-normal text-text-color`;
  /* END CSS styles */

  const { isAuthenticated, getAuthToken} = useAuthContext();

  const handleDelete = async (id) => {
    const authToken = getAuthToken(); 
    await axios
      .get("/sanctum/csrf-cookie")
      .then(async (response) => {
        try{
          await deleteDestination({ id }, authToken);
          router.push('/');
          
        } catch(error){
          console.error("Error deleting destination", error);
        }
      });
  }

  

  return (
    <ul className={gridWrapper}>
      {Array.isArray(data) &&
        data.map((item, index) => (
          <li key={index} className={gridItem}>
            <div className={imgWrapper}>
              <Link href={`/details/${item.id}`}>
                <Image src="/Assets/Info-icon.svg" alt="Info" className={infoIconStyle} width="50" height="50" />
              </Link>
              <Image
                src={`http://localhost:8000${item.image}`}
                alt={item.title}
                width="300"
                height="300"
                className={imgStyle}
              />
            </div>
            <div className="flex flex-row p-4 justify-between">
              <div >
                <Link href={`/details/${item.id}`}>
                  <h5 className={titleStyle}>{item.title}</h5>
                </Link>
                <p className={textStyle}>{item.location}</p>
              </div>
              
              {isAuthenticated && ( // Mostrar los botones solo si el usuario está autenticado
              <div className="flex flex-row gap-2 p-3">
                <EditButton />
                <DeleteButton onClick={() => {
                  console.log("ID del destino a eliminar:", item.id);
                  handleDelete(item.id)
                  }} />
              </div>
            )}
            </div>

          </li>
        ))}
    </ul>
  );
};

export default DestinationCard;