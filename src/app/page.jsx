import Destinations from "./components/DestinationCard/Destinations";
import LoginUser from "./components/LoginUser/LoginUser";



export default function Home() {

  

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h1>Destinos</h1>
        <Destinations />
        <LoginUser />
      </div>
    </main>
  );
 
}
