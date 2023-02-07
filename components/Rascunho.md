import { Logo } from './icons'
import { Hamb } from './icons'
import { useState } from "react"
import { OpenClosed } from "./icons"
import { ArrowSite } from "./icons"

export default function Header() {
    const [open, setOpen] = useState(true)

    return (
        <>
            <header className='z-10 sticky flex flex-col lg:block'>
                <div className='flex flex-col lg:block'>
                    <div className={`${open ? "" : "hidden"} p-4 flex justify-between bg-white fixed  top-0 w-full lg:block`}>
                        <div>
                            <Logo className="h-8" />
                        </div>
                        <div className='p-[6px]'>
                            <Hamb className="h-5 lg:hidden" onClick={() => setOpen(!open)} />
                        </div>
                    </div>
                    <nav className={`${open ? "hidden" : "block"} p-4 bg-white top-0 left-0 w-full flex flex-col transition-all lg:space-x-4 lg:py-0 lg:px-0 lg:flex-row lg:relative lg:translate-y-0 py-6 space-y-4 fixed lg:block`}>
                        <button className={` self-end `} onClick={() => setOpen(!open)}>
                            <OpenClosed className="h-5 w-5 lg:hidden" />
                        </button>
                        <div className='lg:flex-col-reverse'>
                            <div className="flex">
                                <button className='bg-[#FAA635] text-[#FFFFFF] uppercase h-12 w-g lg:w-68  pl-4 lg:py-3 lg:px-8 lg:w-68'>Quero começar agora
                                </button>
                                <button className="flex items-center">
                                    <ArrowSite className="pr-4 h-12 w-16 lg:w-68" />
                                </button>
                            </div>
                            <button className='bg-[#FFFFFF] py-3 px-28 text-[#005E83] border border-[#005E83] uppercase lg:py-3 lg:px-5'>Retornar</button>
                        </div>
                    </nav>
                </div>
            </header>
        </>
    )
}




import { Logo } from './icons'
import { Hamb } from './icons'
import { useState } from "react"
import { OpenClosed } from "./icons"
import { ArrowSite } from "./icons"

export default function Header() {
    const [open, setOpen] = useState(false)

    return (
        <>
            <header className='z-10 sticky py-6'>
                <div className='flex items-center justify-between xl:max-w-7xl xl:mx-auto max-w-full px-[8%] flex-wrap w-full'>
                    <Logo className="h-8 lg:block" />
                    <Hamb className="h-5 cursor-pointer lg:hidden" onClick={() => setOpen(!open)} />

                    <nav className={`${open ? "block top-0 left-0" : "hidden"} absolute bg-white px-4 pb-6 w-full lg:flex lg:items-center lg:w-auto`}>
                        <div className='lg:flex lg:justify-between lg:flex-row-reverse'>
                            <button className={` self-end py-6 left-auto top-5 right-5`} onClick={() => setOpen(!open)}>
                                <OpenClosed className="h-5 w-5 lg:hidden" />
                            </button>
                            <div className='flex lg:pl-4'>
                                <button className='bg-[#FAA635] text-[#FFFFFF] uppercase h-12 w-full lg:w-68  pl-4 lg:py-3 lg:px-8 lg:w-full'>Quero começar agora
                                </button>
                                <button className="items-center">
                                    <ArrowSite className="pr-4 h-12 w-16 lg:w-68" />
                                </button>
                            </div>
                            <button className='bg-[#FFFFFF] mt-4 py-3 px-28 text-[#005E83] border border-[#005E83] uppercase lg:py-3 lg:px-5 w-full'>Retornar
                            </button>
                        </div>

                    </nav>
                </div>
            </header>
        </>
    )
}
