import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const NavBarLogged = () => {
    return (
        <nav>
            <ul className="flex items-center space-x-4">
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
                    <Link href="/admin/logout">
                        <Image
                            src='/Assets/Logout-icon.svg'
                            alt="Logout icon"
                            width={40} height={40}
                            className="Logout-icon"
                        />


                    </Link>
                </li>

            </ul>
        </nav>
    );
};

export default NavBarLogged;
