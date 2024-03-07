import React, { useState } from 'react';

const SearchComponent = ({ onSearch, className }) => {
    const [search, setSearch] = useState('');

    const handleSearch = () => {
        onSearch(search);
    };

    const handleChange = (e) => {
        setSearch(e.target.value)
    };


    return (
        <div className={`relative w-[200px] h-[35px] bg-yellow-100 rounded-[20px] shadow-[inset_0px_2px_2px_#00000040] ${className}`}>
            <input
                type="text"
                placeholder="Search..."
                value={search}
                onChange={handleChange}
                className="absolute top-0 left-0 [font-family:'Jaldi-Regular',Helvetica] font-normal text-[#0079ff] text-[20px]  tracking-[0] leading-[normal] whitespace-nowrap p-2 w-full h-full bg-yellow-100 rounded-[20px] shadow-[inset_0px_2px_2px_#00000040] outline-none  placeholder-blue-500 text-left"

            />

            <img
                src='./Assets/Glass-icon.svg'
                alt="Glass icon"
                className="Glass-icon absolute w-[23px] h-[18px] top-[30%] transform [-translate-y] right-[16px]"
                onClick={handleSearch}
            />
        </div>
    );
};

export default SearchComponent;



