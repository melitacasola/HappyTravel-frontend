import Button from "./components/Button/Button.jsx";
import Input from "./components/Input/Input.jsx";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Hola Fefy</h1>
      <Button to="#" text="Aceptar" isPrimary={true} />
      <Button to="#" text="Cancelar" isPrimary={false} />
      <Input type="text" placeholder="Escribe tu nombre ..." value="" validationMessage="Nombre requerido" />
    </main>
  );
}
