"use client";

import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";



const SearchComponent = () => {
    const [search, setSearch] = useState("");
    const searchParams = useSearchParams();
    const pathName = usePathname();
    const {replace} = useRouter()

        const handleChange = (term) => {
        const params = new URLSearchParams(searchParams);
        if(term) {
            params.set("query", term)
    
        } else {
            params.delete("query")
        }
       // setSearch(e.target.value); 
        replace(`${pathName}?${params.toString()}`);
    };

    return (
        <div
            className={`relative w-[200px] h-[35px] bg-yellow-100 rounded-[20px] shadow-[inset_0px_2px_2px_#00000040]`}
        >
            <input
                type="text"
                placeholder="Search..."
                // value={search}
                onChange={(e) => {handleChange(e.target.value)}}
                defaultValue={searchParams.get('query')?.toString()}
                className="absolute top-0 left-0 [font-family:'Jaldi-Regular',Helvetica] font-normal text-[#0079ff] text-[20px]  tracking-[0] leading-[normal] whitespace-nowrap p-2 w-full h-full bg-yellow-100 rounded-[20px] shadow-[inset_0px_2px_2px_#00000040] outline-none  placeholder-blue-500 text-left"
            />

            <Image
                src="/Assets/Glass-icon.svg"
                alt="Glass icon"
                width={23}
                height={18}
                className="absolute top-[30%] transform [-translate-y] right-[16px]"
            
            />
        </div>
    );
};

export default SearchComponent;
