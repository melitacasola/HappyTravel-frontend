"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { logoutUser } from "../../services/axios";
import { useAuthContext } from "../../../contexts/authContext";

export default function Page() {
  const router = useRouter();
  const { getAuthToken, logout } = useAuthContext();

  useEffect(() => {
    const authToken = getAuthToken(); // Obtenemos el token de autenticación
    logoutUser(authToken) // Pasamos el token de autenticación a la función logoutUser
      .then(() => {
        logout(); // Cerramos sesión en el contexto de autenticación
        router.push("/"); // Redirigimos después de cerrar sesión
      })
      .catch((error) => {
        console.error("Error al cerrar sesión:", error.response.data);
      });
  }, []);

  return null;
}
