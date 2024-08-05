import Link from "next/link"
import Logo from "../starter-code/assets/shared/desktop/logo.svg"
import Image from 'next/image'
import InviteBtn from "./invite"

export default function Footer() {
    return (
        <footer className="bg-black text-white flex w-[1440px] justify-between items-center p-[165px]" >
            <div className="flex">
                <div>
                    <Image src={Logo} alt={"logo"} />
                    <ul className='flex'>
                        <Link href={'/'}><li>Home</li></Link>
                        <Link href={'/'}><li>Stories</li></Link>
                        <Link href={'/'}><li>Features</li></Link>
                        <Link href={'/'}><li>Pricing</li></Link>
                    </ul>
                </div>
                <ul className=' justify-between uppercase'>
                    <Link href={'/'}><li>Home</li></Link>
                    <Link href={'/stories'}><li>Stories</li></Link>
                    <Link href={'/features'}><li>Features</li></Link>
                    <Link href={'/pricing'}><li>Pricing</li></Link>
                </ul>
            </div >
            <div>
                <InviteBtn />
                <span> Copyright 2019. All Rights Reserved</span>
            </div>
        </footer >
    )
}
