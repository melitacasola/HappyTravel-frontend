import Destinations from "./components/DestinationCard/Destinations";
import PaginationButtons from "./components/PaginationButtons/PaginationButtons";

export default function Home({ searchParams }) {
  const query = searchParams?.query;

  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-14">
      <div>
        <Destinations query={query} />
        <div className="hidden md:block">
          <PaginationButtons />
        </div>
      </div>
    </main>
  );
}
