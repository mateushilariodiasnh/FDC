import { IconHeader, LogoOneFDC, LogoTwoFDC } from './icons'
import { Hamb } from './icons'
import { useState } from "react"
import { OpenClosed } from "./icons"
import { ArrowSite } from "./icons"
import Link from 'next/link'

export default function Header(): JSX.Element {
    const [open, setOpen] = useState<boolean>(false)

    return (
        <header className='z-50 sticky top-0 left-0 bg-white py-4 lg:py-0 font-openSans'>
            <div className='flex items-center justify-between xl:max-w-7xl xl:mx-auto max-w-full flex-wrap w-full px-4 font-openSans'>
                <Link href='#'>
                    <div className='tems-center justify-between lg:space-x-4 flex space-y-2'>
                        <LogoOneFDC className='h-8 block lg:hidden' />
                        <LogoTwoFDC className="h-8 hidden lg:block" />
                        <IconHeader className="h-6 hidden lg:block" />
                    </div>
                </Link>
                <button onClick={(): void => setOpen(!open)}>
                    <Hamb className="h-5 cursor-pointer lg:hidden" />
                </button>

                <nav className={`${open ? "-top-1 left-0 absolute lg:relative bg-white " : "hidden"} px-8 lg:pr-1 pb-6 w-full lg:flex lg:items-center lg:w-auto lg:justify-between py-4 lg:py-4 lg:my-auto`}>
                    <div className='lg:flex lg:justify-between lg:flex-row-reverse lg:space-x-4'>
                        <button className={`flex justify-self-end py-6 mr-0 ml-auto lg:hidden`} onClick={(): void => setOpen(!open)}>
                            <OpenClosed className="h-5 w-5 lg:hidden" />
                        </button>
                        <div className='flex items-center justify-center'>
                            <Link href='#' className='w-full bg-tertiaryOrange hover:bg-primaryBlueDark flex justify-between ease-in-out duration-300 h-auto'>
                                <span className="inline-flex items-center text-white font-openSans text-1.5xl font-bold uppercase mx-auto lg:px-6 my-auto">
                                    Quero começar agora
                                </span>
                                <ArrowSite className="h-12" />
                            </Link>
                        </div>
                        <Link href='#'>
                            <button className='bg-white mt-4 lg:mt-0 py-3 px-28 text-primaryBlueDark hover:text-white hover:bg-primaryBlueDark font-openSans text-1.5xl font-bold border border-primaryBlueDarkhover:bg-primaryBlueDark uppercase lg:py-3 lg:px-5 w-full lg:h-12 ease-in-out duration-300'><strong>Retomar</strong>
                            </button>
                        </Link>
                    </div>
                </nav>
            </div>
        </header>
    )
}
