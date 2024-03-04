import React from 'react';
import Link from 'next/link';

const NavBar = () => {
    return (
        <nav>
            <ul className="flex items-center space-x-4">
                <li>
                    <Link href="/home">
                        <img
                            src='./Assets/Home-icon.svg'
                            alt="Home icon"
                            className="Home-icon w-40px] h-[40px]"
                        />
                    </Link>
                </li>
                <li>
                    <Link href="/src/app/components/login-user/Login_User.jsx">
                        <img
                            src='./Assets/Avatar-icon.svg'
                            alt="Avatar icon"
                            className="Avatar-icon w-[40px] h-[40px]"
                        />


                    </Link>
                </li>

            </ul>
        </nav>
    );
};

export default NavBar;
