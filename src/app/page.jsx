import Destinations from "./components/DestinationCard/Destinations";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-14">
      <div>
        <Destinations />
      </div>
    </main>
  );
}
