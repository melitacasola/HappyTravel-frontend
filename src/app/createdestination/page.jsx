import NewDestinationForm from '@/app/components/CreateDestination/NewDestinationForm'
import Header from '@/app/components/Header/Header'


export default function NewDestination() {
    return (
      <>
<div className="flex items-center justify-center h-screen w-full bg-gray-100">
        <div className="flex items-center justify-center w-2/3">
          <NewDestinationForm />
        </div>
      </div>
        
      </>
    )
  }