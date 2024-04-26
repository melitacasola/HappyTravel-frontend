import EditDestinationForm from '../../../components/CreateDestination/EditDestinationForm';
import NewDestinationMobile from '@/app/components/CreateDestination/NewDestinationResponsive';
import LogoMobile from '@/app/components/Logo/LogoMobile';


export default function EditDestination() {
  return (
    <>
      {/* desktop version */}
      <div className="hidden md:flex items-center justify-center h-screen w-screen bg-white p-4 m-0">
        <div className="flex items-center justify-center w-3/5 h-92 border-[#fbfdce] rounded-b-xl px-5 py-7 m-2 p-3">
          <EditDestinationForm title="Editar Destino" />
        </div>
      </div>

      {/* mobile version */}
      <div className='p-6 md:hidden'>
        <div className=""> {/* Oculta en pantallas medianas y grandes */}
          <div>
            <div className="flex justify-center items-center">
              <div className="mb-6 ">
                <LogoMobile />
              </div>
            </div>
            <EditDestinationForm title="Editar Destino" />
          </div>
        </div>
      </div>

    </>
  )
}