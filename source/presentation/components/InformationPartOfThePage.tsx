import CardsMobileShowList from "./CardsMobileShowList";
import CardComponent from "./CardComponent";
import { FdcOneWaterMark } from "./icons";
import { dataCards } from './data/CardsData'

export default function Information(): JSX.Element {
    return (
        <section id='suaEmpresaEUnica' className="mt-16 lg:mt-14">
            <div className='text-center font-nexaSlab'>
                <div className='border-t-8 border-white m-6 lg:max-w-3.5xl lg:mx-auto'></div>
                <h2 className='uppercase text-primaryBlue mt-10 mb-2 text-3.5xl lg:text-4.5xl'>Sua empresa é única</h2>
                <p className='text-primaryBlueDark mx-8 mb-9 text-1.5xl lg:text-1xl'>É por isso que a jornada dela também tem de ser</p>
                <div className='border-t-8 border-white m-6 lg:max-w-3.5xl lg:mx-auto'></div>
            </div>
            <section className='relative overflow-hidden'>
                <div className='mt-4 lg:mt-1 lg:grid lg:grid-cols-2 lg:max-w-3xl lg:mx-auto lg:space-x-6 lg:space-y-6'>
                    <div className='mx-6 z-10 font-openSans text-primaryGrayDark text-1.5xl'>
                        <p className='lg:pt-7 lg:grid-cols-1'>Avaliamos as <strong>lacunas do seu negócio</strong> para sugerir os conteúdos que precisam ser trabalhados e isso faz toda a diferença.</p>
                        <p className='lg:grid-cols-1 pt-3'>Seu time ainda pode adicionar módulos de interesse de acordo com a cultura e as necessidades pontuais da organização, formando uma <strong>grade curricular flexível.</strong> </p>
                    </div>

                    <div className="cardsInformation block lg:hidden w-full overflow-hidden relative z-40">
                        <CardsMobileShowList data={dataCards}/>
                    </div>

                    {dataCards.map(dataCard => {
                        return (
                            <article className=" hidden lg:block z-10" key={dataCard.id}>
                                <CardComponent data={dataCard} />
                            </article>
                        )
                    })}

                </div>

                <span className='top-[360px] lg:top-80 left-1/2 -translate-x-1/2  absolute px-2 w-151 lg:w-525 2xl:w-full'>
                    <FdcOneWaterMark className='-z-10' />
                </span>

                <div className='relative items-center justify-center lg:flex pt-40 lg:pt-36'>

                    <picture className="absolute z-40 w-64 top-4 left-4 lg:w-112 lg:left-28 lg:top-64 2xl:left-60">
                        <source srcSet={"/images/IllustrativeTableOne.png".replace(".png", ".webp")} type="image/webp" />
                        <img src={"/images/IllustrativeTableOne.png"} alt="primeira tabela" />
                    </picture>
                    <picture className="absolute z-30 w-80 top-28 right-1 lg:top-12 lg:right-12 lg:left-auto lg:w-151 2xl:top-20 2xl:right-40 ">
                        <source srcSet={"/images/IllustrativeTableTwo.png".replace(".png", ".webp")} type="image/webp" />
                        <img src={"/images/IllustrativeTableTwo.png"} alt="segunda tabela" />
                    </picture>
                    <picture className="absolute z-20 -top-12 lg:top-8 h-102 w-473">
                        <source srcSet={"/images/NewCut.png".replace(".png", ".webp")} type="image/webp" />
                        <img src={"/images/NewCut.png"} alt="corte por cima da terceira tabela" />
                    </picture>
                    <picture className="relative z-10 w-full top-6 lg:top-0 mx-3 lg:w-241">
                        <source srcSet={"/images/IllustrativeTableThree.png".replace(".png", ".webp")} type="image/webp" />
                        <img src={"/images/IllustrativeTableThree.png"} alt="terceira tabela" />
                    </picture>

                </div>
            </section>
        </section>
    )
}