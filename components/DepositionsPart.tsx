import List from "./Depositions";
import { DownArrowList } from "./icons";
import { FdcThree } from "./icons";

export default function DepoimentosPart(): JSX.Element {
    return (
        <section className='bg-white relative overflow-hidden'>
            <div className='pt-10 relative z-10 lg:pt-24'>
                <div className='border-y-8 border-secondaryGrayMedium m-6 lg:max-w-3.5xl lg:mx-auto'>
                    <h2 className='uppercase text-primaryBlue text-center mt-10 mb-8 lg:mt-12 lg:mb-10 text-2xl lg:text-4.5xl font-nexaSlab'>Sua empresa em boa companhia </h2>
                </div>
                <p className='mx-6 my-10 lg:mt-12 lg:mb-14 lg:max-w-xl lg:mx-auto text-1.5xl font-normal font-openSans text-primaryGrayDark '>Confira os depoimentos de executivos e colaboradores que já participaram de programas empresariais da FDC.</p>
            </div>

            <div className='bullets flex items-center justify-center lg:max-w-7xl mx-auto pb-20 relative z-10'>
                <div className='teste-buttom-prev relative z-20 lg:mr-7'>
                    <DownArrowList className=" h-4 rotate-90 hidden lg:block" />
                </div>
                <List />
                <div className='teste-buttom-next relative z-20 lg:ml-7'>
                    <DownArrowList className="h-4 -rotate-90 hidden lg:block" />
                </div>
                <span className='-bottom-96 lg:-bottom-96 aria-hidden:"true" absolute px-2 items-center justify-center h-full w-[605px] lg:h-[634px] lg:w-[1815px] mx-auto '>
                    <FdcThree className='-z-10' />
                </span>
            </div>

        </section>
    )
}