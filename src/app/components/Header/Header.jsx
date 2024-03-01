"use client";

export default function Header() {

    return (

        <div className="relative w-[1300px] h-[94px]">
            <img className="absolute w-[1300px] h-[2px] top-[92px] left-0" alt="Line" src="line-4.svg" />
            <AvatarIcon className="!absolute !w-[40px] !h-[40px] !top-[38px] !left-[1260px]" />
            <HomeIcon className="!absolute !w-[40px] !h-[40px] !top-[38px] !left-[1203px]" />
            <Logo className="!absolute !w-[165px] !h-[78px] !top-0 !left-0" />
            <Searcher className="!absolute !left-[986px] !top-[39px]" />
        </div>
    );
};


