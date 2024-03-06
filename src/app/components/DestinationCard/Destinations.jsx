"use client"
import {useFetchApi} from '../../services/useFetchApi'
import DestinationCard from "./DestinationCard"


const Destinations = () => {

    const urlApi = 'http://localhost:8000/api/destinations'

    const { data, loading, error } = useFetchApi(urlApi); 
    
    if(loading){  
        return <div>Cargando...</div>  
    }
    
    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div>
            <DestinationCard data={data.data}/>
        </div>
    )
}

export default Destinations
