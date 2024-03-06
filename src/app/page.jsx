import Destinations from "./components/DestinationCard/Destinations";



export default function Home() {



  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h1>Destinos</h1>
        <Destinations />
      </div>
    </main>
  );

}
