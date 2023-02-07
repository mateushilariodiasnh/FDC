import List from "./Depositions";
import { DownArrowList } from "./icons";
import { FdcThree } from "./icons";

export default function DepoimentosPart() {
    return (
        <>
            <section className='bg-white relative overflow-hidden'>
                <div className='pt-16 relative z-10'>
                    <div className='border-t-8 border-[#E3E3E3] m-6 lg:max-w-3xl lg:mx-auto'></div>
                    <h2 className='uppercase text-[#2A9FBC] text-center mt-10 mb-8 text-2xl lg:text-4xl font-nexaSlab'>Sua empresa em boa companhia </h2>
                    <div className='border-t-8 border-[#E3E3E3] m-6 lg:max-w-3xl lg:mx-auto'></div>
                    <p className='mx-6 my-10 mt-10 lg:max-w-xl lg:mx-auto text-base font-openSans'>Confira os depoimentos de executivos e colaboradores que já participaramde programas empresariais da FDC.</p>
                </div>

                <div className='bullets flex items-center justify-center lg:max-w-7xl mx-auto pb-20 relative z-10'>
                    <div className='teste-buttom-prev'>
                        <DownArrowList className=" h-4 rotate-90 hidden lg:block" />
                    </div>
                    <List className="font-openSans" />
                    <div className='teste-buttom-next '>
                        <DownArrowList className="h-4 -rotate-90 hidden lg:block" />
                    </div>
                </div>

                <span className='lg:-bottom-96 aria-hidden:"true" absolute px-2 items-center justify-center h-full w-full lg:h-[634px] lg:w-[1815px] mx-auto '>
                    <FdcThree className='-z-10' />
                </span>
            </section>
        </>
    )
}