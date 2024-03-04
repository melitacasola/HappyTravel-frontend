import NewDestinationForm from '@/app/components/CreateDestination/NewDestinationForm'


export default function NewDestination() {
  return (
    <>
      <div className="flex items-center justify-center h-screen w-screen bg-white p-4 m-0">
        <div className="flex items-center justify-center w-3/5 h-92 border-[#fbfdce] rounded-b-xl px-5 py-7 m-2 p-3">
          <NewDestinationForm />
        </div>
      </div>

    </>
  )
}