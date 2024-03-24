"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { logoutUser } from "../../services/axios";
import { useAuthContext } from "../../../contexts/authContext";

export default function Page() {
  const router = useRouter();
  const { getAuthToken, logout } = useAuthContext();

  useEffect(() => {
    const authToken = getAuthToken(); 
    
    logout(); 
    logoutUser(authToken) 
      .then(() => {
        router.push("/");
        router.refresh()

      })
      .catch((error) => {
        console.error("Error al cerrar sesión:", error);
        router.refresh()

      });
  }, []);

  return null;
}
