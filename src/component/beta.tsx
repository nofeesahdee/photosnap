import React from "react";
import InviteBtn from './invite'

export default function Beta() {
    return (
        <div className='flex justify-between items-center lg:bg-bg-beta-desktop md:bg-bg-beta-tablet sm:bg-bg-beta-mobile w-[1440px] h-[280px] bg-no-repeat text-white px-[165px]'>
            <h1 className='text-[40px] font-bold uppercase leading-[48px] w-[400px] tracking-[4.17px]'>We're in Beta. Get your invite today!</h1>
            <InviteBtn />
        </div>
    )
}
