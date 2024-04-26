'use client'

import Destinations from "@/app/components/DestinationCard/Destinations";
import { logoutUser } from "@/app/services/axios";
import { useAuthContext } from "@/contexts/authContext";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function PageDashboard() {
    const { getAuthToken, logout } = useAuthContext();
    const router = useRouter();

    const authToken = getAuthToken();

    const handleLogout = () => {
        logout();
        logoutUser(authToken);
        router.push('/');
    };
    
    return (
        <div>
            <p className="m-8">

                
                <button onClick={handleLogout} className="bg-yellow-400 text-bg-color px-8 py-1 rounded-full cursor-pointer text-xl hover:bg-opacity-80 transition-colors duration-300 flex">Logout</button>
            </p>
            <div className="flex min-h-screen flex-col items-center justify-between py-14">

                <Destinations />
            </div>
        </div>
    );
}