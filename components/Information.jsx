import CardsMobille from "./CardsMobille";
import Cards from "./Card";
import { FdcOne } from "./icons";
import Data from './data/CardsData.jsx'

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
                <div className='mx-6 mt-4 lg:grid lg:grid-cols-2 max-w-3.5xl lg:mx-auto lg:space-x-6 lg:space-y-6 mb-24'>
                    <div className='lg:pl-6 z-10 font-openSans text-primaryGrayDark text-1.5xl'>
                        <p className='lg:pt-8 lg:grid-cols-1'>Avaliamos as <strong>lacunas do seu negócio</strong> para sugerir os conteúdos que precisam ser trabalhados e isso faz toda a diferença.</p>
                        <p className='lg:grid-cols-1 pt-3'>Seu time ainda pode adicionar módulos de interesse de acordo com a cultura e as necessidades pontuais da organização, formando uma <strong>grade curricular flexível.</strong> </p>
                    </div>

                    <div className="Card block lg:hidden w-full overflow-hidden px-6">
                        <CardsMobille className="relative" data={Data} />
                    </div>

                    {Data.map(data => {
                        return (
                            <article className=" hidden lg:block z-10" key={data.id}>
                                <Cards image={data.image} content={data.content} />
                            </article>
                        )
                    })}

                </div>

                <span className='lg:bottom-72 aria-hidden:"true" absolute px-2 items-center justify-center h-full w-full lg:h-[634px] lg:w-[1815px] mx-auto '>
                    <FdcOne className='-z-10' />
                </span>

                <div className='relative items-center justify-center flex pt-32'>

                    <picture className="absolute z-40 w-52 -top-10 left-4 lg:w-[351px] lg:top-80 2xl:left-60">
                        <source srcSet={"/images/IllustrativeTableOne.png".replace(".png", ".webp")} type="image/webp" />
                        <img src={"/images/IllustrativeTableOne.png"} alt="primeira tabela" />
                    </picture>
                    <picture className="absolute z-30 w-72 top-12 right-1 lg:w-[520px] 2xl:top-20 2xl:right-40 ">
                        <source srcSet={"/images/IllustrativeTableTwo.png".replace(".png", ".webp")} type="image/webp" />
                        <img src={"/images/IllustrativeTableTwo.png"} alt="segunda tabela" />
                    </picture>
                    <picture className="relative z-20 mx-3 lg:w-[964px]">
                        <source srcSet={"/images/IllustrativeTableThree.png".replace(".png", ".webp")} type="image/webp" />
                        <img src={"/images/IllustrativeTableThree.png"} alt="terceira tabela" />
                    </picture>

                </div>
            </section>
        </section>
    )
}