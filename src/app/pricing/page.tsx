
import Navbar from '../../component/navbar'
import Footer from '../../component/footer'
import Link from 'next/link'
import Beta from '../../component/beta'
import Image from 'next/image'
import check from "../../starter-code/assets/pricing/desktop/check.svg"

export default function page() {
    return (
        <div className="flex flex-col justify-center items-center">
            <Navbar />
            <main className='h-[490px] w-full flex text-white justify-center max-w-[1440px]'>
                <div className='bg-black w-1/2 flex justify-center flex-col px-[112px] '>
                    <h1 className='uppercase text-[40px] font-bold mb-[21px] tracking-[4.17px]'>Pricing</h1>
                    <p className='text-[15px] max-w-[387px] leading-[25px]'>
                        Create a your stories, Photosnap is a platform for photographers and visual storytellers.
                        Its the simple way to create and share your photos.
                    </p>
                </div>
                <div className='lg:bg-hero-pricing-desktop md:bg-hero-pricing-tablet sm:bg-hero-pricing-mobile w-1/2 bg-no-repeat'></div>
            </main>
            <section className='flex flex-col justify-center items-center my-[165px]'>
                <div className='flex'>
                    <span>monthly</span>
                    <button></button>
                    <span>yearly</span>
                </div>
                <div className='flex flex-wrap w-[1110px] justify-between items-center text-center'>
                    <div className='flex flex-col justify-center items-center w-[350px] h-[407px] bg-[#F5F5F5] px-10'>
                        {/* $190.00 per year */}
                        {/* $390.00 per year */}
                        {/* $990.00 per year */}
                        <span className='text-2xl font-bold mb-[18px]'>Basic</span>
                        <p>
                            Includes basic usage of our platform.
                            Recommended for new and aspiring photographers.
                        </p>
                        <div className='my-8'>
                            <span className='text-[40px] font-bold'> $19.00 </span> <br /><small> per month</small>
                        </div>
                        <Link href={"/"} className="flex justify-center items-center uppercase bg-black w-[270px] h-[40px] text-white font-bold">
                            Pick Plan
                        </Link>
                    </div>
                    <div className='w-[350px] h-[470px] text-white bg-black'>
                        <div className='w-full h-2 bg-gradient-to-r from-[#FFC593] via-[#BC7198]/.52 to-[#5A77FF]'></div>
                        <div className='flex flex-col justify-center items-center h-full px-10'>
                            <span className='text-2xl font-bold mb-[18px]'>Pro</span>
                            <p>
                                More advanced features available.
                                Recommended for photography veterans and professionals.
                            </p>
                            <div className='my-8'>
                                <span className='text-[40px] font-bold'>$39.00</span><br /><small> per month</small>
                            </div>
                            <Link href={"/"} className="flex justify-center items-center uppercase bg-white w-[270px] h-[40px] text-black font-bold">
                                Pick Plan
                            </Link>
                        </div>
                    </div>
                    <div className='flex flex-col justify-center items-center w-[350px] h-[407px] bg-[#F5F5F5] px-10'>
                        <span className='text-2xl font-bold mb-[18px]'>Business</span>
                        <p>
                            Additional features available such as more detailed metrics.
                            Recommended for business owners.
                        </p>
                        <div className='my-8'>
                            <span className='text-[40px] font-bold'> $99.00 </span><br /><small> per month</small>
                        </div>
                        <Link href={"/"} className="flex justify-center items-center uppercase bg-black w-[270px] h-[40px] text-white font-bold">
                            Pick Plan
                        </Link>
                    </div >
                </div >
            </section >
            <section className='mb-[165px]'>
                <h1 className='uppercase text-center font-bold text-[40px] my-10'>compare</h1>
                <table className='w-[731px]  uppercase font-bold'>
                    <tr className='border-b-2 text-left p-4'>
                        <th className='p-4'>The Features</th>
                        <th className='p-4'>Basic</th>
                        <th className='p-4'>Pro</th>
                        <th className='p-4'>Business</th>
                    </tr>
                    <tr className='border-b-2 my-4'>
                        <td className='p-4'>Unlimited Story Posting</td>
                        <td className='px-8'><Image src={check} alt={'check'} /></td>
                        <td className='px-8'><Image src={check} alt={'check'} /></td>
                        <td className='px-8'><Image src={check} alt={'check'} /></td>
                    </tr>
                    <tr className='border-b-2'>
                        <td className='p-4'>Unlimited Photo Upload</td>
                        <td className='px-8'><Image src={check} alt={'check'} /></td>
                        <td className='px-8'><Image src={check} alt={'check'} /></td>
                        <td className='px-8'><Image src={check} alt={'check'} /></td>
                    </tr>
                    <tr className='border-b-2'>
                        <td className='p-4'> Embedding Custom Content</td>
                        <td className='px-8'></td>
                        <td className='px-8'><Image src={check} alt={'check'} /></td>
                        <td className='px-8'><Image src={check} alt={'check'} /></td>
                    </tr>
                    <tr className='border-b-2'>
                        <td className='p-4'> Customize Metadata</td>
                        <td></td>
                        <td className='px-8'><Image src={check} alt={'check'} /></td>
                        <td className='px-8'><Image src={check} alt={'check'} /></td>
                    </tr>
                    <tr className='border-b-2'>
                        <td className='p-4'> Advanced Metrics</td>
                        <td></td>
                        <td></td>
                        <td className='px-8'><Image src={check} alt={'check'} /></td>
                    </tr>
                    <tr className='border-b-2'>
                        <td className='p-4'> Photo Downloads</td>
                        <td></td>
                        <td></td>
                        <td className='px-8'><Image src={check} alt={'check'} /></td>
                    </tr>
                    <tr className='border-b-2'>
                        <td className='p-4'>Search Engine Indexing</td>
                        <td></td>
                        <td></td>
                        <td className='px-8'><Image src={check} alt={'check'} /></td>
                    </tr>
                    <tr className='border-b-2'>
                        <td className='p-4'>Custom Analytics</td>
                        <td></td>
                        <td></td>
                        <td className='px-8'><Image src={check} alt={'check'} /></td>
                    </tr>
                </table>
            </section>

            <Beta />
            <Footer />
        </div >
    )
}
