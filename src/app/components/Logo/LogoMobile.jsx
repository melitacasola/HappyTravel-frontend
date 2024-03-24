import Image from 'next/image';
import React from 'react';

const LogoMobile = () => {
    return (
        <div className='p-7'>
            <Image
                src='/Assets/Logo.svg'
                alt="Logo"
                
                height={60}
                width={30}
            />

        </div>
    );
};

export default LogoMobile;