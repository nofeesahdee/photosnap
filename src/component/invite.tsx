import Image from 'next/image'
import Link from 'next/link'
import arrow from "../starter-code/assets/shared/desktop/arrow.svg"

export default function InviteBtn() {
    return (
        <Link href={"/"} className="flex uppercase justify-between">
            Get an invite
            <Image src={arrow} alt={"arrow"} />
        </Link>
    )
}
