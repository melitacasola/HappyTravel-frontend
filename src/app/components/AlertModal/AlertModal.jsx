import Button from "../Button/Button.jsx";

const AlertModal = ({ isOpen, onClose, text }) => {
  const buttonsWrapper = `flex flex-row place-content-evenly items-center mb-4 gap-4`;
  const modalClass = isOpen ? "" : "hidden"; // Añadimos la clase "hidden" cuando isOpen es false

  return (
    <>
      {isOpen && ( // Asegúrate de que el modal se muestre solo cuando isOpen sea true
        <div className={`fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 ${modalClass}`}>
          <div className="bg-bg-color pt-12 pb-4 px-6 md:px-16 mx-8 max-w-md rounded-3xl">
            <p className="text-2xl mb-8 text-center font-normal">{text}</p>
            <div className={buttonsWrapper}>
              <Button type="submit" text="Aceptar" isPrimary={true} onClick={onClose} />
              <Button text="Cancelar" isPrimary={false} onClick={onClose} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AlertModal;
