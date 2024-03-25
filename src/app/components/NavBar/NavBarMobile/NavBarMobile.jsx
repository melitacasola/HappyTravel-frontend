import React from 'react';
import Link from 'next/link';
import Image from 'next/image';


const NavBarMobile = () => {
    return (
        <nav>
            <ul className="fixed bottom-0 left-1/2 transform -translate-x-1/2  w-[350px] h-[62px] bg-yellow-100 rounded-[40px] shadow-[inset_0px_2px_2px_#00dfa240 flex items-center space-x-4 ml-4">
                <div className="relative w-[285px] h-[40px] top=[11px] left-[33px]">
                    <li>
                        <Link href="/">
                            <Image   
                                src='/Assets/Home-icon.svg'
                                alt="Home icon"
                                className="absolute top-0 left-0 Home-icon"
                                width={40}
                                height={40}
                            />
                        </Link>
                    </li>
                    <li>
                        <Link href="/">
                            <Image
                                src='/Assets/Avatar-icon.svg'
                                alt="Avatar icon"
                                className="absolute Avatar-icon top-0 left-[245px]"
                                width={40}
                                height={40}
                            />


                        </Link>
                    </li>
                </div>
            </ul>
        </nav>
    );
};

export default NavBarMobile;
