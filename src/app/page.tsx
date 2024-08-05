import Image from "next/image";
import Footer from "../component/footer";
import Navbar from "../component/navbar";
import stories from "../starter-code/assets/home/desktop/beautiful-stories.jpg"
import create from "../starter-code/assets/home/desktop/create-and-share.jpg"
import design from "../starter-code/assets/home/desktop/designed-for-everyone.jpg"
import embed from "../starter-code/assets/features/desktop/embed.svg"
import responsive from "../starter-code/assets/features/desktop/responsive.svg"
import nolimit from "../starter-code/assets/features/desktop/no-limit.svg"
import mountain from "../starter-code/assets/stories/desktop/mountains.jpg"
import voyage from "../starter-code/assets/stories/desktop/18-days-voyage.jpg"
import architecturals from "../starter-code/assets/stories/desktop/architecturals.jpg"
import cityscapes from "../starter-code/assets/stories/desktop/cityscapes.jpg"
import InviteBtn from "../component/invite";
import Link from "next/link";
import arrow from "../starter-code/assets/shared/desktop/arrow.svg"

export default function Page() {
    return (
        <div className="flex flex-col justify-center items-center">
            <Navbar />
            <main className="flex flex-col justify-center items-center">
                <div className="flex bg-black ">
                    <div className="text-white lg:w-[610px] lg:px-28 self-center">
                        <h1 className="text-[40px] font-bold mb-[35px] uppercase"> Create and share your photo Stories</h1>
                        <p className="mb-[35px]">
                            Photosnap is a platform for photographers and visual storytellers. We make it
                            easy to share photos, tell stories and connect with others.
                        </p>
                        <InviteBtn />
                    </div>
                    <div>
                        <Image src={create} alt={"create"} />
                    </div>
                </div>
                <div className="flex bg-white">
                    <div>
                        <Image src={stories} alt={"beautify stories image"} />
                    </div>
                    <div className="text-black lg:w-[610px] lg:px-28 self-center">
                        <h1 className="text-[40px] font-bold mb-[35px] uppercase"> Beautiful stories every time</h1>
                        <p className="mb-[35px]">
                            We provide design templates to ensure your stories look terrific. Easily add
                            photos, text, embed maps and media from other networks. Then share your story
                            with everyone.
                        </p>
                        <Link href={"/"} className="flex uppercase">
                            View the stories
                            <Image src={arrow} alt={"arrow"} />
                        </Link>
                    </div>

                </div>
                <div className="flex bg-white">
                    <div className="text-black lg:w-[610px] lg:px-28 self-center">
                        <h1 className="text-[40px] font-bold mb-[35px] uppercase">Designed for everyone</h1>
                        <p className="mb-[35px]">
                            Photosnap can help you create stories that resonate with your audience. Our
                            tool is designed for photographers of all levels, brands, businesses you name it.
                        </p>
                        <Link href={"/"} className="flex uppercase">
                            View the stories
                            <Image src={arrow} alt={"arrow"} />
                        </Link>
                    </div>
                    <div>
                        <Image src={design} alt={""} />
                    </div>
                </div>
                <div className="flex text-white justify-center items-center relative">
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
                </div>
                <div className="flex lg:w-[1110px] justify-between py-24 items-end">
                    <div className="flex flex-col text-center items-center w-[350px] px-4">
                        <Image src={responsive} alt={""} width={50} height={50} className="mb-12" />
                        <h2 className="text-lg font-bold pb-2">100% Responsive</h2>
                        <p>
                            No matter which the device you’re on, our site is fully responsive and stories
                            look beautiful on any screen.
                        </p>
                    </div>
                    <div className="flex flex-col text-center items-center w-[350px] px-4">
                        <Image src={nolimit} alt={""} width={50} height={50} className="mb-12" />
                        <h2 className="text-lg font-bold pb-2">  No Photo Upload Limit</h2>
                        <p>
                            Our tool has no limits on uploads or bandwidth. Freely upload in bulk and
                            share all of your stories in one go.
                        </p>
                    </div>
                    <div className="flex flex-col text-center items-center w-[350px] px-4">
                        <Image src={embed} alt={""} width={50} height={50} className="mb-12 " />
                        <h2 className="text-lg font-bold pb-2"> Available to Embed</h2>
                        <p>
                            Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos,
                            Google Maps, and more.
                        </p>
                    </div>
                </div>
            </main >
            < Footer />
        </div >
    )
}