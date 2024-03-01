import Button from "./components/Button/Button.jsx";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Hola Fefy</h1>
      <Button to="#" text="Aceptar" isPrimary={true} />
      <Button to="#" text="Cancelar" isPrimary={false} />
    </main>
  );
}
