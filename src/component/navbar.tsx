
import Logo from "../starter-code/assets/shared/desktop/logo.svg"
import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {
    return (
        <header className='flex justify-between py-4 w-[1110px] items-center'>
            <Link href={'/'}><Image src={Logo} alt={'logo'} /></Link>
            <ul className='lg:flex lg:w-[269px] self-center justify-between uppercase'>
                <Link href={'/stories'}><li>Stories</li></Link>
                <Link href={'/features'}><li>Features</li></Link>
                <Link href={'/pricing'}><li>Pricing</li></Link>
            </ul>
            <button className='bg-black text-white uppercase px-6 py-3'> Get an invite</button>
        </header >
    )
}

