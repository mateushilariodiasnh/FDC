import { MainLogo, IconHeader } from "../icons"
import Link from "next/link"

interface IHeaderProps {
    className?: string;
}

export default function HeaderMobile({ className }: IHeaderProps): JSX.Element {
    return (
        <Link href='/index' className="flex justify-center my-4 lg:my-6 space-x-1 lg:space-x-6">
            <MainLogo className='h-7 lg:h-12' />
            <IconHeader className='h-6 lg:h-9 lg:mt-1' />
        </Link>
    )
}