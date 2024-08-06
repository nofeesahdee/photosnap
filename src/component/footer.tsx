import Link from "next/link"
import Logo from "../starter-code/assets/shared/desktop/logo.svg"
import facebook from "../starter-code/assets/shared/desktop/facebook.svg"
import instagram from "../starter-code/assets/shared/desktop/instagram.svg"
import youtube from "../starter-code/assets/shared/desktop/youtube.svg"
import twitter from "../starter-code/assets/shared/desktop/twitter.svg"
import pinterest from "../starter-code/assets/shared/desktop/pinterest.svg"
import Image from 'next/image'
import InviteBtn from "./invite"

export default function Footer() {
    return (
        <footer className="bg-black text-white flex w-[1440px] justify-between items-center p-[165px]" >
            <div className="flex h-[122px] w-[350px] justify-between">
                <div className=" flex flex-col justify-between">
                    <Image src={Logo} alt={"logo"} />
                    <div className='flex'>
                        <Link href={'/'}><Image src={facebook} alt={"facebook logo"} /></Link>
                        <Link href={'/'}><Image src={youtube} alt={"youtube logo"} /></Link>
                        <Link href={'/'}><Image src={twitter} alt={"twitter logo"} /></Link>
                        <Link href={'/'}><Image src={pinterest} alt={"pinterest logo"} /></Link>
                        <Link href={'/'}><Image src={instagram} alt={"instagram logo"} /></Link>
                    </div>
                </div>
                <ul className='flex flex-col justify-between uppercase'>
                    <Link href={'/'}><li>Home</li></Link>
                    <Link href={'/stories'}><li>Stories</li></Link>
                    <Link href={'/features'}><li>Features</li></Link>
                    <Link href={'/pricing'}><li>Pricing</li></Link>
                </ul>
            </div >
            <div className="h-[122px] flex flex-col justify-between">
                <InviteBtn />
                <span> Copyright 2019. All Rights Reserved</span>
            </div>
        </footer >
    )
}
