import CardsMobille from "./CardsMobille";
import Cards from "./Card";
import { CardImageOne } from "./icons";
import { CardImageTwo } from "./icons";
import { CardImageThree } from "./icons";
import { CardImageFour } from "./icons";
import { CardImageFive } from "./icons";
import { FdcOne } from "./icons";
import { Tableone } from "./icons";
import { Tabletwo } from "./icons";
import { Tablethree } from "./icons";

export default function Information() {
    return (
        <section>
            <div id='suaEmpresaEUnica' className='text-center font-nexaSlab mt-16'>
                <div className='border-t-8 border-white m-6 lg:max-w-3.5xl lg:mx-auto'></div>
                <h2 className='uppercase text-primaryBlue mt-10 mb-2 text-3.5xl '>Sua empresa é única</h2>
                <p className='text-primaryBlueDark mx-8 mb-8 text-1.5xl '>É por isso que a jornada dela também tem de ser</p>
                <div className='border-t-8 border-white m-6 lg:max-w-3.5xl lg:mx-auto'></div>
            </div>
            <section className='relative overflow-hidden'>
                <div className='mx-6 mt-4 lg:grid lg:grid-cols-2 max-w-3.5xl lg:mx-auto lg:space-x-6 lg:space-y-6'>
                    <div className='lg:pl-6 z-10 font-openSans text-primaryGrayDark text-1.5xl'>
                        <p className='lg:pt-8 lg:grid-cols-1'>Avaliamos as <strong>lacunas do seu negócio</strong> para sugerir os conteúdos que precisam ser trabalhados e isso faz toda a diferença.</p>
                        <p className='lg:grid-cols-1 pt-3'>Seu time ainda pode adicionar módulos de interesse de acordo com a cultura e as necessidades pontuais da organização, formando uma <strong>grade curricular flexível.</strong> </p>
                    </div>

                    <CardsMobille className="relative " />

                    <article className=' hidden lg:block z-10'>
                        <Cards>
                            <CardImageOne className=" h-16 mx-auto mt-8 mb-7 " /><strong>Learn:</strong> mais de <strong>220 módulos,</strong> distribuídos em 7 dimensões empresariais
                        </Cards>
                    </article>
                    <article className=' hidden lg:block z-10'>
                        <Cards>
                            <CardImageTwo className="h-16 mx-auto mt-8 mb-4 " /><strong>Drive:</strong> transposição do conhecimento para a prática, com <strong>metodologia exclusiva FDC</strong>
                        </Cards>
                    </article>
                    <article className=' hidden lg:block z-10'>
                        <Cards>
                            <CardImageThree className="h-16 mx-auto lg:mt-14 mb-4" /><strong>Relatórios gerenciais</strong> para acompanhar o engajamento do time
                        </Cards>
                    </article>
                    <article className=' hidden lg:block z-10'>
                        <Cards>
                            <CardImageFour className="h-16 mx-auto mt-8 mb-4" />Desenvolvimento <strong>Blended Learning,</strong> com turmas de até 30 pessoas
                        </Cards>
                    </article>
                    <article className=' hidden lg:block z-10'>
                        <Cards>
                            <CardImageFive className="h-16 mx-auto mt-8 mb-4 " />Conteúdos exclusivos, seguindo o padrão de <strong>excelência da FDC</strong>
                        </Cards>
                    </article>

                </div>

                <span className='lg:bottom-72 aria-hidden:"true" absolute px-2 items-center justify-center h-full w-full lg:h-[634px] lg:w-[1815px] mx-auto '>
                    <FdcOne className='-z-10' />
                </span>

                <div className='relative items-center justify-center flex pt-32'>
                    <Tableone className="absolute z-40 w-52 -top-10 left-4 lg:w-[351px] lg:top-80 2xl:left-60" />
                    <Tabletwo className=" absolute z-30 w-72 top-12 right-1 lg:w-[520px] 2xl:top-20 2xl:right-40" />
                    <Tablethree className=" relative z-20 mx-3 lg:w-[964px]" />
                </div>
            </section>
        </section>
    )
}