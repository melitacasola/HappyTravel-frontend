import React from 'react';
import Logo from '../Logo/Logo';
import SearchComponent from '../SearchComponent/SearchComponent';
import NavBar from '../NavBar/NavBar';

const Header = () => {
    return (
        <header className="flex items-center justify-between   mx-6 mt-4">
            <img
                className="absolute w-[1440px] h-[2px] top-[78px] left- bg-blue-600 mt-2"
                alt="Line"
                src="Line-4.svg"
            />
            <div className="flex items-center">
                <Logo />
            </div>
            <div className="flex items-center mx-6 gap-5 ">
                <SearchComponent />

                <NavBar>

                </NavBar>
            </div>
        </header>
    );
};

export default Header;

