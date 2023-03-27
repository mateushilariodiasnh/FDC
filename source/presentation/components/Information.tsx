import CardsMobille from "./CardsMobille";
import Cards from "./Card";
import { FdcOne } from "./icons";
import { dataCards } from './data/CardsData'

export default function Information(): JSX.Element {
    return (
        <section>
            <div id='suaEmpresaEUnica' className='text-center font-nexaSlab mt-16 lg:mt-7'>
                <div className='border-t-8 border-white m-6 lg:max-w-3.5xl lg:mx-auto'></div>
                <h2 className='uppercase text-primaryBlue mt-10 mb-2 text-3.5xl lg:text-4.5xl'>Sua empresa é única</h2>
                <p className='text-primaryBlueDark mx-8 mb-8 text-1.5xl lg:text-1xl'>É por isso que a jornada dela também tem de ser</p>
                <div className='border-t-8 border-white m-6 lg:max-w-3.5xl lg:mx-auto'></div>
            </div>
            <section className='relative overflow-hidden'>
                <div className='mt-4 lg:grid lg:grid-cols-2 max-w-3xl lg:mx-auto lg:space-x-6 lg:space-y-6 mb-24'>
                    <div className='lg:pl-6 mx-6 z-10 font-openSans text-primaryGrayDark text-1.5xl'>
                        <p className='lg:pt-8 lg:grid-cols-1'>Avaliamos as <strong>lacunas do seu negócio</strong> para sugerir os conteúdos que precisam ser trabalhados e isso faz toda a diferença.</p>
                        <p className='lg:grid-cols-1 pt-3'>Seu time ainda pode adicionar módulos de interesse de acordo com a cultura e as necessidades pontuais da organização, formando uma <strong>grade curricular flexível.</strong> </p>
                    </div>

                    <div className="Card block lg:hidden w-full overflow-hidden relative ml-6 pl-6">
                        <CardsMobille data={dataCards} />
                    </div>

                    {dataCards.map(dataCard => {
                        return (
                            <article className=" hidden lg:block z-10" key={dataCard.id}>
                                <Cards data={dataCard} />
                            </article>
                        )
                    })}

                </div>

                <span className='lg:top-80 aria-hidden:"true" absolute px-2 items-center justify-center h-full w-full mx-auto '>
                    <FdcOne className='-z-10' />
                </span>

                <div className='relative items-center justify-center flex pt-40 lg:pt-32'>

                    <picture className="absolute z-40 w-64 -top-10 left-4 lg:w-[351px] lg:top-80 2xl:left-60">
                        <source srcSet={"/images/IllustrativeTableOne.png".replace(".png", ".webp")} type="image/webp" />
                        <img src={"/images/IllustrativeTableOne.png"} alt="primeira tabela" />
                    </picture>
                    <picture className="absolute z-30 w-80 top-12 left-8 right-1 lg:right-0 lg:left-auto lg:w-[520px] 2xl:top-20 2xl:right-40 ">
                        <source srcSet={"/images/IllustrativeTableTwo.png".replace(".png", ".webp")} type="image/webp" />
                        <img src={"/images/IllustrativeTableTwo.png"} alt="segunda tabela" />
                    </picture>
                    <picture className="relative z-20 w-full top-6 lg:top-0 mx-3 lg:w-[964px]">
                        <source srcSet={"/images/IllustrativeTableThree.png".replace(".png", ".webp")} type="image/webp" />
                        <img src={"/images/IllustrativeTableThree.png"} alt="terceira tabela" />
                    </picture>

                </div>
            </section>
        </section>
    )
}