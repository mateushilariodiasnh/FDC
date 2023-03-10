import { IconHeader, LogoOneFDC, LogoTwoFDC } from './icons'
import { Hamb } from './icons'
import { useState } from "react"
import { OpenClosed } from "./icons"
import { ArrowSite } from "./icons"

export default function Header() {
    const [open, setOpen] = useState(false)

    return (
        <header className='z-50 sticky top-0 left-0 bg-white py-4 lg:py-0 font-openSans'>
            <div className='flex items-center justify-between xl:max-w-7xl xl:mx-auto max-w-full  flex-wrap w-full px-5 font-openSans'>
                <div className='tems-center justify-between lg:space-x-4 flex space-y-2'>
                    <LogoOneFDC className='h-8 block lg:hidden' />
                    <LogoTwoFDC className="h-8 hidden lg:block" />
                    <IconHeader className="h-8 hidden lg:block" />
                </div>
                <button onClick={() => setOpen(!open)}>
                    <Hamb className="h-5 cursor-pointer lg:hidden" />
                </button>

                <nav className={`${open ? "-top-1 left-0 absolute lg:relative bg-white " : "hidden"}  px-4 pb-6 w-full lg:flex lg:items-center lg:w-auto lg:justify-between py-4 lg:my-auto`}>
                    <div className='lg:flex lg:justify-between lg:flex-row-reverse lg:space-x-4'>
                        <button className={`flex justify-self-end py-6 mr-0 ml-auto lg:hidden`} onClick={() => setOpen(!open)}>
                            <OpenClosed className="h-5 w-5 lg:hidden" />
                        </button>
                        <div className='flex '>
                            <button className='bg-tertiaryOrange hover:bg-primaryBlueDark text-white font-openSans text-1.5xl font-bold uppercase h-12 lg:h-auto w-full lg:w-68 pl-4 lg:py-3 lg:px-8 lg:w-full my-auto lg:ml-0'>Quero começar agora
                            </button>
                            <button className="items-center">
                                <ArrowSite className="lg:pr-4 h-12 lg:h-12 lg:mr-0 w-16 lg:w-68" />
                            </button>
                        </div>
                        <button className='bg-white mt-4 lg:mt-0 py-3 px-28 text-primaryBlueDark hover:text-white font-openSans text-1.5xl font-bold border border-primaryBlueDarkhover:bg-primaryBlueDark uppercase lg:py-3 lg:px-5 w-full lg:w-40 lg:h-12'><strong>Retomar</strong>
                        </button>
                    </div>
                </nav>
            </div>
        </header>
    )
}
