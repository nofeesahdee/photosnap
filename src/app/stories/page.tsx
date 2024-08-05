import Image from "next/image";
import Footer from "../../component/footer";
import Navbar from "../../component/navbar";
import Link from "next/link";
import arrow from "../../starter-code/assets/shared/desktop/arrow.svg"

import mountain from "../../starter-code/assets/stories/desktop/mountains.jpg"
import voyage from "../../starter-code/assets/stories/desktop/18-days-voyage.jpg"
import architecturals from "../../starter-code/assets/stories/desktop/architecturals.jpg"
import cityscapes from "../../starter-code/assets/stories/desktop/cityscapes.jpg"

import worldtour from "../../starter-code/assets/stories/desktop/world-tour.jpg"
import unforseen from "../../starter-code/assets/stories/desktop/unforeseen-corners.jpg"
import king from "../../starter-code/assets/stories/desktop/king-on-africa.jpg"
import nowhere from "../../starter-code/assets/stories/desktop/trip-to-nowhere.jpg"

import rage from "../../starter-code/assets/stories/desktop/rage-of-the-sea.jpg"
import running from "../../starter-code/assets/stories/desktop/running-free.jpg"
import behind from "../../starter-code/assets/stories/desktop/behind-the-waves.jpg"
import calm from "../../starter-code/assets/stories/desktop/calm-waters.jpg"

import milky from "../../starter-code/assets/stories/desktop/milky-way.jpg"
import dark from "../../starter-code/assets/stories/desktop/dark-forest.jpg"
import somwerpet from "../../starter-code/assets/stories/desktop/somwarpet.jpg"
import land from "../../starter-code/assets/stories/desktop/land-of-dreams.jpg"

export default function page() {
    return (
        <div className="flex flex-col justify-center items-center">
            <Navbar />
            <main className="bg-hero-stories bg-no-repeat bg-center lg:h-[650px] text-white mb-0 w-full flex items-center justify-center pl-28">
                <div className="max-w-[387px] ">
                    <span className="font-bold text-[12px] tracking-[2px]">LAST MONTHS FEATURED STORY</span>
                    <h1 className="font-bold text-[40px] py-6 tracking-[4.17px]"> HAZY FULL MOON OF APPALACHIA</h1>
                    <span className="text-[12px] tracking-[2px] ">March 2nd 2020
                        <b className="pl-[9px]">by John Appleseed</b>
                    </span>
                    <p className="leading-[25px] text-[15px] pt-4">
                        The dissected plateau area, while not actually made up of geological
                        mountains, is popularly called "mountains," especially in eastern
                        Kentucky and West Virginia, and while the ridges are not high,
                        the terrain is extremely rugged.
                    </p>
                    <Link href={"/"} className="flex uppercase pt-8 justify-between">
                        Read Story
                        <Image src={arrow} alt={"arrow"} />
                    </Link>
                </div>
            </main>
            <section className="flex text-white flex-wrap justify-center items-center max-w-[1440px]">
                <div className="w-[360px] h-[500px]">
                    <Image src={mountain} alt={"mountain"} className="absolute" />
                    <div className="z-10 relative flex flex-col justify-end h-full px-10">
                        <p className="text-lg font-bold"> The Mountains</p>
                        <small className="text-[13px] pb-4"> by John Appleseed</small>
                        <div className="w-full h-[1px] bg-[#979797]"></div>
                        <Link href={"/"} className="flex justify-between uppercase pt-2 pb-10">
                            Read Story
                            <Image src={arrow} alt={"arrow"} />
                        </Link>
                    </div>
                </div>
                <div className="w-[360px] h-[500px]">
                    <Image src={cityscapes} alt={"cityscapes"} className="absolute" />
                    <div className="z-10 relative flex flex-col justify-end h-full px-10">
                        <p className="text-lg font-bold">Sunset Cityscapes</p>
                        <small className="text-[13px] pb-4"> by Benjamin Cruz</small>
                        <div className="w-full h-[1px] bg-[#979797]"></div>
                        <Link href={"/"} className="flex justify-between uppercase pt-2 pb-10">
                            Read Story
                            <Image src={arrow} alt={"arrow"} />
                        </Link>
                    </div>
                </div>
                <div className="w-[360px] h-[500px]">
                    <Image src={voyage} alt={"voyage"} className="absolute" />
                    <div className="z-10 relative flex flex-col justify-end h-full px-10">
                        <p className="text-lg font-bold"> 18 Days Voyage</p>
                        <small className="text-[13px] pb-4">by Alexei Borodin</small>
                        <div className="w-full h-[1px] bg-[#979797]"></div>
                        <Link href={"/"} className="flex justify-between uppercase pt-2 pb-10">
                            Read Story
                            <Image src={arrow} alt={"arrow"} className="self-center" />
                        </Link>
                    </div>
                </div>
                <div className="w-[360px] h-[500px]">
                    <Image src={architecturals} alt={"architecturals"} className="absolute" />
                    <div className="z-10 relative flex flex-col justify-end h-full px-10">
                        <p className="text-lg font-bold">Architecturals</p>
                        <small className="text-[13px] pb-4">by Samantha Brooke</small>
                        <div className="w-full h-[1px] bg-[#979797]"></div>
                        <Link href={"/"} className="flex justify-between uppercase pt-2 pb-10">
                            Read Story
                            <Image src={arrow} alt={"arrow"} />
                        </Link>
                    </div>
                </div>


                <div className="w-[360px] h-[500px]">
                    <Image src={worldtour} alt={""} className="absolute" />
                    <div className="z-10 relative flex flex-col justify-end h-full px-10">
                        <small className="text-[13px] pb-4"> April 7th 2020</small>
                        <p className="text-lg font-bold">World Tour 2019</p>
                        <small className="text-[13px] pb-4">by Timothy Wagner</small>
                        <div className="w-full h-[1px] bg-[#979797]"></div>
                        <Link href={"/"} className="flex justify-between uppercase pt-2 pb-10">
                            Read Story
                            <Image src={arrow} alt={"arrow"} />
                        </Link>
                    </div>
                </div>
                <div className="w-[360px] h-[500px]">
                    <Image src={unforseen} alt={""} className="absolute" />
                    <div className="z-10 relative flex flex-col justify-end h-full px-10">
                        <small className="text-[13px] pb-4"> April 3rd 2020</small>
                        <p className="text-lg font-bold">  Unforeseen Corners</p>
                        <small className="text-[13px] pb-4">  by William Malcolm</small>
                        <div className="w-full h-[1px] bg-[#979797]"></div>
                        <Link href={"/"} className="flex justify-between uppercase pt-2 pb-10">
                            Read Story
                            <Image src={arrow} alt={"arrow"} />
                        </Link>
                    </div>
                </div>
                <div className="w-[360px] h-[500px]">
                    <Image src={king} alt={""} className="absolute" />
                    <div className="z-10 relative flex flex-col justify-end h-full px-10">
                        <small className="text-[13px] pb-4">March 29th 2020</small>
                        <p className="text-lg font-bold"> King on Africa: Part II</p>
                        <small className="text-[13px] pb-4">by Tim Hillenburg</small>
                        <div className="w-full h-[1px] bg-[#979797]"></div>
                        <Link href={"/"} className="flex justify-between uppercase pt-2 pb-10">
                            Read Story
                            <Image src={arrow} alt={"arrow"} />
                        </Link>
                    </div>
                </div>
                <div className="w-[360px] h-[500px]">
                    <Image src={nowhere} alt={""} className="absolute" />
                    <div className="z-10 relative flex flex-col justify-end h-full px-10">
                        <small className="text-[13px] pb-4">March 21th 2020</small>
                        <p className="text-lg font-bold"> The Trip to Nowhere</p>
                        <small className="text-[13px] pb-4">  by Felicia Rourke</small>
                        <div className="w-full h-[1px] bg-[#979797]"></div>
                        <Link href={"/"} className="flex justify-between uppercase pt-2 pb-10">
                            Read Story
                            <Image src={arrow} alt={"arrow"} />
                        </Link>
                    </div>
                </div>
                <div className="w-[360px] h-[500px]">
                    <Image src={rage} alt={""} className="absolute" />
                    <div className="z-10 relative flex flex-col justify-end h-full px-10">
                        <small className="text-[13px] pb-4">March 19th 2020</small>
                        <p className="text-lg font-bold">  Rage of The SeaI</p>
                        <small className="text-[13px] pb-4">      by Mohammed Abdul</small>
                        <div className="w-full h-[1px] bg-[#979797]"></div>
                        <Link href={"/"} className="flex justify-between uppercase pt-2 pb-10">
                            Read Story
                            <Image src={arrow} alt={"arrow"} />
                        </Link>
                    </div>
                </div>
                <div className="w-[360px] h-[500px]">
                    <Image src={running} alt={""} className="absolute" />
                    <div className="z-10 relative flex flex-col justify-end h-full px-10">
                        <small className="text-[13px] pb-4">March 16th 2020</small>
                        <p className="text-lg font-bold"> Running Free</p>
                        <small className="text-[13px] pb-4"> by Michelle</small>
                        <div className="w-full h-[1px] bg-[#979797]"></div>
                        <Link href={"/"} className="flex justify-between uppercase pt-2 pb-10">
                            Read Story
                            <Image src={arrow} alt={"arrow"} />
                        </Link>
                    </div>
                </div>
                <div className="w-[360px] h-[500px]">
                    <Image src={behind} alt={""} className="absolute" />
                    <div className="z-10 relative flex flex-col justify-end h-full px-10">
                        <small className="text-[13px] pb-4">March 11th 2020</small>
                        <p className="text-lg font-bold"> Behind the Waves</p>
                        <small className="text-[13px] pb-4">by Lamarr Wilson</small>
                        <div className="w-full h-[1px] bg-[#979797]"></div>
                        <Link href={"/"} className="flex justify-between uppercase pt-2 pb-10">
                            Read Story
                            <Image src={arrow} alt={"arrow"} />
                        </Link>
                    </div>
                </div>
                <div className="w-[360px] h-[500px]">
                    <Image src={calm} alt={""} className="absolute" />
                    <div className="z-10 relative flex flex-col justify-end h-full px-10">
                        <small className="text-[13px] pb-4">March 9th 2020</small>
                        <p className="text-lg font-bold">  Calm Waters</p>
                        <small className="text-[13px] pb-4">by Samantha Brooke</small>
                        <div className="w-full h-[1px] bg-[#979797]"></div>
                        <Link href={"/"} className="flex justify-between uppercase pt-2 pb-10">
                            Read Story
                            <Image src={arrow} alt={"arrow"} />
                        </Link>
                    </div>
                </div>
                <div className="w-[360px] h-[500px]">
                    <Image src={milky} alt={""} className="absolute" />
                    <div className="z-10 relative flex flex-col justify-end h-full px-10 mb-[0px]">
                        <small className="text-[13px] pb-4">March 5th 2020</small>
                        <p className="text-lg font-bold">The Milky Way</p>
                        <small className="text-[13px] pb-4">by Benjamin Cruz</small>
                        <div className="w-full h-[1px] bg-[#979797]"></div>
                        <Link href={"/"} className="flex justify-between uppercase pt-2 pb-10">
                            Read Story
                            <Image src={arrow} alt={"arrow"} />
                        </Link>
                    </div>
                </div>
                <div className="w-[360px] h-[500px] overflow-hidden">
                    <Image src={dark} alt={""} className="absolute" />
                    <div className="z-10 relative flex flex-col justify-end h-full px-10">
                        <small className="text-[13px] pb-4">March 4th 2020</small>
                        <p className="text-lg font-bold">Night at The Dark Forest</p>
                        <small className="text-[13px] pb-4"> by Mohammed Abdul</small>
                        <div className="w-full h-[1px] bg-[#979797]"></div>
                        <Link href={"/"} className="flex justify-between uppercase pt-2 pb-10">
                            Read Story
                            <Image src={arrow} alt={"arrow"} />
                        </Link>
                    </div>
                </div>
                <div className="w-[360px] h-[500px] overflow-hidden">
                    <Image src={somwerpet} alt={""} className="absolute" />
                    <div className="z-10 relative flex flex-col justify-end h-full px-10">
                        <small className="text-[13px] pb-4">March 1st 2020</small>
                        <p className="text-lg font-bold">Somwarpet’s Beauty</p>
                        <small className="text-[13px] pb-4">  by Michelle</small>
                        <div className="w-full h-[1px] bg-[#979797]"></div>
                        <Link href={"/"} className="flex justify-between uppercase pt-2 pb-10">
                            Read Story
                            <Image src={arrow} alt={"arrow"} />
                        </Link>
                    </div>
                </div>
                <div className="w-[360px] h-[500px]">
                    <Image src={land} alt={""} className="absolute" />
                    <div className="z-10 relative flex flex-col justify-end h-full px-10">
                        <small className="text-[13px] pb-4">February 25th 2020</small>
                        <p className="text-lg font-bold">  Land of Dreams</p>
                        <small className="text-[13px] pb-4"> by William Malcolm</small>
                        <div className="w-full h-[1px] bg-[#979797]"></div>
                        <Link href={"/"} className="flex justify-between uppercase pt-2 pb-10">
                            Read Story
                            <Image src={arrow} alt={"arrow"} />
                        </Link>
                    </div>
                </div>
            </section >
            <Footer />
        </div >
    )
}
