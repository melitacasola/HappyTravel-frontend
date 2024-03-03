import RegisterUserForm from "./components/RegisterUserForm/RegisterUserForm.jsx";
import Input from "./components/Input/Input.jsx";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Hola Fefy</h1>
      <RegisterUserForm></RegisterUserForm>
    </main>
  );
}
