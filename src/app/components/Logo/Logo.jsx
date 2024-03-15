import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Logo = () => {
    return (
        <div>
            <Link href={'/'}>
            <Image 
                src='/Assets/Logo.svg' alt="Logo"
                width={125}
                height={58}
                
            />
            </Link>

        </div>
    );
};

export default Logo;
