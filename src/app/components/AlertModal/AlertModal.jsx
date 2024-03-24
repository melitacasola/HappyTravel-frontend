import Button from "../Button/Button.jsx";

const AlertModal = ({ isOpen, onClose, text, error,onConfirm  }) => {
  const buttonsWrapper = `flex flex-row place-content-evenly items-center mb-4 gap-4`;
  const modalClass = isOpen ? "" : "hidden"; 

  return (
    <>
      {isOpen && ( 
        <div className={`fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 ${modalClass}`}>
          <div className="bg-bg-color pt-12 pb-4 px-6 md:px-16 mx-8 max-w-md rounded-3xl">
            <p className="text-2xl mb-8 text-center font-normal">{error || text}</p>
            <div className={buttonsWrapper}>
              <button className="bg-primary text-bg-color px-8 py-1 rounded-full cursor-pointer text-xl hover:bg-opacity-80 transition-colors duration-300 flex" 
              onClick={() => { onConfirm(); onClose(); }}>Aceptar</button>
              {/* <Button type="submit" text="Aceptar" isPrimary={true}  /> */}
              {/* <Button text="Cancelar" isPrimary={false} onClick={() => onClose(false)} /> */}
              <button onClick={() => onClose(false)} className="bg-secondary text-bg-color px-8 py-1 rounded-full cursor-pointer text-xl hover:bg-opacity-80 transition-colors duration-300 flex">Cancelar</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AlertModal;
