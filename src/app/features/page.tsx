import React from 'react'
import Navbar from '../../component/navbar'
import Footer from '../../component/footer'
import Image from 'next/image'
import embed from "../../starter-code/assets/features/desktop/embed.svg"
import responsive from "../../starter-code/assets/features/desktop/responsive.svg"
import nolimit from "../../starter-code/assets/features/desktop/no-limit.svg"
import custom from "../../starter-code/assets/features/desktop/custom-domain.svg"
import exposure from "../../starter-code/assets/features/desktop/boost-exposure.svg"
import dragdrop from "../../starter-code/assets/features/desktop/drag-drop.svg"
import InviteBtn from '../../component/invite'


export default function Features() {
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
                <div className='lg:bg-hero-features-desktop md:bg-hero-features-tablet sm:bg-hero-features-mobile w-1/2 bg-no-repeat'></div>
            </main>
            <div className="flex flex-wrap lg:w-[1110px] justify-between py-24 items-end">
                <div className="flex flex-col text-center items-center w-[350px] px-4 my-[52px]">
                    <Image src={responsive} alt={""} width={50} height={50} className="mb-12" />
                    <h2 className="text-lg font-bold pb-2">100% Responsive</h2>
                    <p>
                        No matter which the device you’re on, our site is fully responsive and stories
                        look beautiful on any screen.
                    </p>
                </div>
                <div className="flex flex-col text-center items-center w-[350px] px-4 my-[52px]">
                    <Image src={nolimit} alt={""} width={50} height={50} className="mb-12" />
                    <h2 className="text-lg font-bold pb-2">  No Photo Upload Limit</h2>
                    <p>
                        Our tool has no limits on uploads or bandwidth. Freely upload in bulk and
                        share all of your stories in one go.
                    </p>
                </div>
                <div className="flex flex-col text-center items-center w-[350px] px-4 my-[52px]">
                    <Image src={embed} alt={""} width={50} height={50} className="mb-12 " />
                    <h2 className="text-lg font-bold pb-2"> Available to Embed</h2>
                    <p>
                        Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos,
                        Google Maps, and more.
                    </p>
                </div>
                <div className="flex flex-col text-center items-center w-[350px] px-4 my-[52px]">
                    <Image src={custom} alt={""} width={50} height={50} className="mb-12" />
                    <h2 className="text-lg font-bold pb-2">  Custom Domain</h2>
                    <p>
                        With Photosnap subscriptions you can host your stories on your own domain. You can
                        also remove our branding!
                    </p>
                </div>
                <div className="flex flex-col text-center items-center w-[350px] px-4 my-[52px]">
                    <Image src={exposure} alt={""} width={50} height={50} className="mb-12" />
                    <h2 className="text-lg font-bold pb-2"> Boost Your Exposure</h2>
                    <p>
                        Users that viewed your story or gallery can easily get notifed of new and featured
                        stories with our built in mailing list.
                    </p>
                </div>
                <div className="flex flex-col text-center items-center w-[350px] px-4 my-[52px]">
                    <Image src={dragdrop} alt={""} width={50} height={50} className="mb-12 " />
                    <h2 className="text-lg font-bold pb-2">Drag & Drop Image</h2>
                    <p>
                        Easily drag and drop your image and get beautiful shots everytime. No over the top
                        tooling to add friction to creating stories.
                    </p>
                </div>
            </div>
            <div className='flex justify-between items-center lg:bg-bg-beta-desktop md:bg-bg-beta-tablet sm:bg-bg-beta-mobile w-[1440px] h-[280px] bg-no-repeat text-white px-[165px]'>
                <h1 className='text-[40px] font-bold uppercase leading-[48px] w-[400px] tracking-[4.17px]'>We're in Beta. Get your invite today!</h1>
                <InviteBtn />
            </div>
            <Footer />
        </ div >
    )
}
