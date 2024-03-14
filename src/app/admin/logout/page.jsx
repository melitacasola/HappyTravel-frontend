"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
// import { logout } from "../../utils/sessionsUtils";
import { logoutUser } from "../../services/axios";
import { useAuthContext } from "../../../contexts/authContext";

export default function Page() {
    const router = useRouter();
    const {logout } = useAuthContext()

    useEffect(() => {
        logout();
        logoutUser();
        router.push("/");
    });

    return null;
}