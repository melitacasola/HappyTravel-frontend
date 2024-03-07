import Destinations from "./components/DestinationCard/Destinations";
import { filterData } from "./utils/filterData";


export default function Home({ searchParams }) {
  const query = searchParams?.query
 
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        
      <div>
        <h1>Destinos</h1>
        <Destinations query={query}/>
        
      
      </div>
    </main>
  );

}
