import NewDestinationForm from '@/app/components/CreateDestination/NewDestinationForm'
import Header from '@/app/components/Header/Header'


export default function NewDestination() {
    return (
      <>
<div className="flex items-center justify-center h-screen w-full bg-gray-100">
        <div className="flex items-center justify-center w-2/5 h-92 border-yellow-200 p-3 m-2">
          <NewDestinationForm />
        </div>
      </div>
        
      </>
    )
  }