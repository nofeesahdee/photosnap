import React from 'react'
import Navbar from '../../component/navbar'
import Footer from '../../component/footer'

export default function page() {
    return (
        <div className="flex flex-col justify-center items-center">
            <Navbar />
            <main className='h-[490px] w-full flex text-white justify-center max-w-[1440px]'>
                <div className='bg-black w-1/2 flex justify-center flex-col px-[112px] '>
                    <h1 className='uppercase text-[40px] font-bold mb-[21px] tracking-[4.17px]'>Features</h1>
                    <p className='text-[15px] max-w-[387px] leading-[25px]'>
                        We make sure all of our features are designed to be loved by every aspiring and even
                        professional photograpers who wanted to share their stories.
                    </p>
                </div>
                <div className='lg:bg-hero-pricing-desktop md:bg-hero-pricing-tablet sm:bg-hero-pricing-mobile w-1/2 bg-no-repeat'></div>
            </main>
            <Footer />
        </div>
    )
}
