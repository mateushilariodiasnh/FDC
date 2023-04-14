import { IconHeader, LogoOneFDC, LogoTwoFDC } from '../icons'
import { Hamb } from '../icons'
import { useState } from "react"
import { MenuOpenClosed } from "../icons"
import { ArrowSite } from '../icons'
import Link from 'next/link'

export default function Header(): JSX.Element {
    const [open, setOpen] = useState<boolean>(false)

    return (
        <header className='z-50 sticky top-0 left-0 bg-white py-4 lg:py-0 font-openSans'>
            <div className='flex items-center justify-between xl:max-w-7xl xl:mx-auto max-w-full flex-wrap w-full px-4 lg:pl-0 lg:pr-4 font-openSans'>
                <Link href='#'>
                    <div className='items-center justify-between lg:space-x-6 flex'>
                        <LogoOneFDC className='h-8 block lg:hidden' />
                        <LogoTwoFDC className="lg:my-auto h-8 hidden lg:block" />
                        <IconHeader className="lg:my-auto h-6 hidden lg:block" />
                    </div>
                </Link>
                <button onClick={(): void => setOpen(!open)}>
                    <Hamb className="h-5 cursor-pointer lg:hidden" />
                </button>

                <nav className={`${open ? "-top-1 left-0 absolute lg:relative bg-white " : "hidden"} px-8 lg:px-4 lg:pr-1 pb-6 w-full lg:flex lg:items-center lg:w-auto lg:justify-between py-4 lg:py-4 lg:my-auto`}>
                    <div className='lg:flex lg:justify-between lg:flex-row-reverse lg:space-x-4'>
                        <button className={`flex justify-self-end py-6 mr-0 ml-auto lg:hidden`} onClick={(): void => setOpen(!open)}>
                            <MenuOpenClosed className="h-5 w-5 lg:hidden" />
                        </button>
                        <div className='flex items-center justify-center'>
                            <Link href='/cadastro' className='w-full bg-tertiaryOrange hover:bg-primaryBlueDark flex justify-between ease-in-out duration-300 h-auto'>
                                <span className="inline-flex items-center text-white font-openSans text-1.5xl font-bold uppercase mx-auto lg:px-6 my-auto">
                                    Quero começar agora
                                </span>
                                <ArrowSite className="h-12" />
                            </Link>
                        </div>
                        <Link href='#' className='bg-white border border-primaryBlueDark hover:bg-primaryBlueDark text-primaryBlueDark hover:text-white w-full lg:w-auto lg:h-12 flex justify-between ease-in-out duration-300 mt-4 lg:mt-0 py-3 lg:px-5 px-28'><strong className='font-openSans text-1.5xl font-bold uppercase mx-auto'>Retomar</strong>
                        </Link>
                    </div>
                </nav>
            </div>
        </header>
    )
}
