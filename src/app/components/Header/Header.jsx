'use client'
import Logo from '../Logo/Logo';
import SearchComponent from '../SearchComponent/SearchComponent';
import NavBar from '../NavBar/NavBar';
import NavBarMobile from '../NavBar/NavBarMobile/NavBarMobile';
import NavBarLoggedMob from '../NavBar/NavBarLoggedMob/NavBarLoggedMob';
import { usePathname } from 'next/navigation'
import { useAuthContext } from '@/contexts/authContext';
import { useEffect, useState } from 'react';
import NavBarLogged from '../NavBar/NavBarLogged/NavBarLogged.';

const Header = () => {
    const pathname = usePathname()
    const isAuthPage = pathname === '/login' || pathname === '/register';
    const [isAuthenticated, setIsAuthenticated] = useState('null')

    const { getAuthToken, logout } = useAuthContext();

    useEffect(() => {
        const isAuth = getAuthToken()
        if (isAuth != isAuthenticated) {
            setIsAuthenticated(isAuth)
        }

    }, [isAuthPage])

    // const handleLogout = () => {
    //     logout();
    //     setIsAuthenticated(null)
    // }


    return (
        <header className=" border-b-2 border-blue-600 flex flex-col sm:flex-row items-center justify-between sm:mx-8 mt-6 px-6 pb-4 sm:pb-0 gap-6 sm:gap-8">

            <div className="flex items-center py-3">
                <Logo />
            </div>
            <div className="flex flex-col sm:flex-row items-center sm:gap-8">

                {!isAuthPage && <SearchComponent />}
                <div className="hidden sm:flex">
                    {/* {isAuthenticated ? <NavBarLogged handleLogout={handleLogout} /> : <NavBar />} */}
                    {isAuthenticated ? <NavBarLogged /> : <NavBar />}


                </div>

                <div className="sm:hidden flex">
                    <NavBarMobile />

                </div>
                <div className="sm:hidden flex">
                    <NavBarLoggedMob />

                </div>

            </div>
        </header>
    );
};

export default Header;

