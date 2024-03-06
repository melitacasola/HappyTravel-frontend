import Destinations from "./components/DestinationCard/Destinations";
import PaginationButton from "./components/PaginationButton/PaginationButton";


export default function Home() {



  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h1>Destinos</h1>
        <Destinations />
        < PaginationButton  />

      </div>
    </main>
  );

}
