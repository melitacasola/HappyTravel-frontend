import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useAuthContext } from '@/contexts/authContext';
import { logoutUser } from '@/app/services/axios';

const NavBarLogged = ({ handleLogout }) => {
    const { getAuthToken, logout } = useAuthContext();
    const router = useRouter();

    const authToken = getAuthToken();

    const handleLogoutBtn = async () => {
        logout();
        await logoutUser(authToken);
        window.location.reload()
        // handleLogout();
        router.push('/');
    };
    return (
        <nav>
            <ul className="flex items-center gap-x-4">
                <li>
                    <Link href="/">
                        <Image
                            src='/Assets/Home-icon.svg'
                            alt="Home icon"
                            width={40} height={40}
                            className="Home-icon"
                        />
                    </Link>
                </li>
                <li>
                    <Link href="/admin/createdestination">
                        <Image
                            src='/Assets/Create-icon.svg'
                            alt="Create icon"
                            width={40} height={40}
                            className="Create-icon"
                        />


                    </Link>
                </li>
                <li>
                    <button onClick={handleLogoutBtn}>
                        <Image
                            src='/Assets/Logout-icon.svg'
                            alt="Logout icon"
                            width={47} height={45}
                            className="Logout-icon"
                        />


                    </button>
                </li>

            </ul>
        </nav>
    );
};

export default NavBarLogged;
