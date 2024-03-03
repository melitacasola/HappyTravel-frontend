import React from 'react';

const PlaceHolder = ({ }) => {
    return (


        <div className="place w-[300px] h-[373px]">
            <div className="relative h-[373px]">
                <img className="w-[300px] h-[300px] top-0 left=0 object-cover rounded-[20px_20px_10px_20px]" alt="Mask group" src='./Assets/images/1.svg' />
                <div className="yellowbox justify-center w-[300px] h-[100px] top-0 left-0 bg-yellow-100 rounded-[0px_0px_20px_20px]" />
                <div className="absolute w-[207px] h-[44px] top-[328px] pb-8 left-[20px] flex items-center [font-family:'Jaldi-Regular',Helvetica] font-bold text-blue-600 text-[25px] tracking-[0] leading-[normal]">Name in here
                </div>
                <div className="absolute w-[207px] h-[44px] top-[328px] left-[20px] pt-8  flex items-center [font-family:'Jaldi-Regular',Helvetica] font-normal text-blue-500 text-[20px] tracking-[0] leading-[normal]">Country
                </div>
            </div>
        </div>

    )
};

export default PlaceHolder;