import Link from "next/link"
import { Arrow } from "./icons"
import { Cut } from "./icons"

export default function InitialSection(): JSX.Element {
    return (
        <div>
            <section className=" bg-InitialImage relative z-10 bg-cover lg:grid grid-cols-2 lg:itens-center lg:justify-center 2xl:mx-auto pb-3 lg:pb-48">
                <section className='text-white pt-8 lg:pt-16 lg:pl-8 2xl:max-w-2xl 2xl:mx-auto 2xl:px-4'>
                    <h1 className='uppercase ml-6 mr-[72px] md:mx-6 font-nexaSlab font-black text-3.5xl lg:text-4.1xl '>Corporate Learn & Drive : sua academia de gestão</h1>
                    <p className='ml-6 md:mx-6 font-nexaSlab font-light text-3.5xl lg:text-4.1xl 2xl:mr-1'>Para empresas que querem transformar gaps em oportunidades</p>
                    <p className='mt-5 mx-6 font-normal font-openSans text-1.5xl lg:text-1xl'>Descubra os gaps do seu negócio com o apoio da FDC e crie <strong>trilhas de desenvolvimento específicas</strong> para a sua empresa. Com o programa Corporate Learn & Drive, seu time inicia a jornada para o futuro com a <strong>melhor escola de negócios da América Latina</strong>, cobrindo as principais dimensões necessárias para a evolução dos negócios - é uma verdadeira academia de gestão à sua disposição. <strong>A excelência educacional de sempre, em um formato que você nunca viu.</strong></p>
                    <div className='hidden lg:block border-l-4 border-tertiaryOrange ml-8 mt-16 mb-20 text-3.5xl font-openSans'>
                        <p className='ml-8 mr-10 pb-2 '>Cadastre-se e faça a <strong>avaliação de maturidade</strong> da sua empresa <strong>gratuitamente.</strong> </p>
                        <Link href='#'>
                            <button className='uppercase text-white bg-primaryBlue hover:bg-white hover:text-primaryBlueDark ease-in-out duration-300 text-1.5xl font-openSans font-bold py-3 px-8 mt-4 ml-6'>Quero começar agora</button>
                        </Link>
                    </div>
                </section>
                <picture>
                    <source srcSet={"/images/WomanInFrontOfTheNotebook.png".replace(".png", ".webp")} type="image/webp" />
                    <img className='lg:ml-3 px-6 lg:h-[648px] lg:w-[574px] mx-auto relative z-30 lg:top-20' src={"/images/WomanInFrontOfTheNotebook.png"} alt="Uma mulher olhando para um notebook" />
                </picture>
                <Cut className='absolute z-20 -bottom-1' />
            </section>
            <Link href='#suaEmpresaEUnica'>
                <button className='mx-auto lg:block hidden'>
                    <Arrow className='bottom-64 z-20 h-9 w-9 relative animate-bounce rotate-90' />
                </button>
            </Link>
            <div className=' lg:hidden border-l-4 border-tertiaryOrange ml-6 mt-12 mb-20 font-openSans text-1.5xl'>
                <p className='ml-6 mx-6 text-primaryBlueDark font-normal'>Cadastre-se e faça a <strong>avaliação de maturidade</strong> da sua empresa <strong>gratuitamente.</strong> </p>
                <Link href='#'>
                    <button className='uppercase text-white font-bold bg-primaryBlue py-3 px-10 mt-4 ml-6 hover:bg-primaryBlueDark ease-in-out duration-300'>Quero começar agora</button>
                </Link>
            </div>
            <Link href="#suaEmpresaEUnica">
                <button className="block mx-auto lg:hidden">
                    <Arrow className='h-9 w-9 buttom-8 animate-bounce m-auto rotate-90' />
                </button>
            </Link>
        </div>
    )
}