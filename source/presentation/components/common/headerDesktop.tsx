import { MainLogo, IconHeader } from "../icons"
import Link from "next/link"

interface IHeaderProps {
    className?: string;
}

export default function HeaderDesktop({ className }: IHeaderProps): JSX.Element {
    return (
        <Link href='/index' className="flex justify-center my-5 space-x-1 lg:space-x-2">
            <MainLogo className='h-12 mt-2' />
            <IconHeader className='h-8 mt-5' />
        </Link>
    )
}