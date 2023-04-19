import Link from "next/link"
import { Arrow } from "../icons"
import { Cut } from "../icons"

export default function InitialSection(): JSX.Element {
    return (
        <div>
            <section className=" bg-InitialImage relative z-10 bg-cover lg:grid grid-cols-2 lg:itens-center lg:justify-center 2xl:mx-auto pb-3 lg:pb-48">
                <section className='text-white pt-8 lg:pt-16 lg:pl-8 2xl:max-w-2xl 2xl:mx-auto 2xl:px-4 relative z-30'>
                    <h1 className='uppercase ml-6 mr-[72px] md:mx-6 font-nexaSlab font-black text-3.5xl lg:text-4.1xl '>Corporate Learn & Drive : sua academia de gestão</h1>
                    <p className='ml-6 md:mx-6 font-nexaSlab font-light text-3.5xl lg:text-4.1xl 2xl:mr-1'>Para empresas que querem transformar gaps em oportunidades</p>
                    <p className='mt-5 mx-6 font-normal font-openSans text-1.5xl lg:text-1xl'>Descubra os gaps do seu negócio com o apoio da FDC e crie <strong>trilhas de desenvolvimento específicas</strong> para a sua empresa. Com o programa Corporate Learn & Drive, seu time inicia a jornada para o futuro com a <strong>melhor escola de negócios da América Latina</strong>, cobrindo as principais dimensões necessárias para a evolução dos negócios - é uma verdadeira academia de gestão à sua disposição. <strong>A excelência educacional de sempre, em um formato que você nunca viu.</strong></p>
                    <div className='hidden lg:block border-l-4 border-tertiaryOrange ml-8 mt-16 mb-20 text-3.5xl font-openSans'>
                        <p className='ml-8 mr-10 pb-2 '>Cadastre-se e faça a <strong>avaliação de maturidade</strong> da sua empresa <strong>gratuitamente.</strong> </p>
                        <Link href='/cadastro' className="flex pointer-events-none">
                            <span className='uppercase text-white bg-primaryBlue hover:bg-white hover:text-primaryBlueDark ease-in-out duration-300 text-1.5xl font-openSans font-bold py-3 px-8 mt-4 ml-6 pointer-events-auto'>Quero começar agora</span>
                        </Link>
                    </div>
                </section>
                <picture>
                    <source srcSet={"/images/imagesOfTheHomePage/WomanInFrontOfTheNotebook.png".replace(".png", ".webp")} type="image/webp" />
                    <img className='lg:ml-10 pl-9 lg:pl-0 top-1 lg:h-162 mx-auto relative z-30 lg:top-20' src={"/images/imagesOfTheHomePage/WomanInFrontOfTheNotebook.png"} alt="Uma mulher olhando para um notebook" />
                </picture>
                <Cut className='absolute z-20 -bottom-1' />
            </section>
            <Link href='#suaEmpresaEUnica' className="relative flex justify-center items-center">
                <span className='lg:block hidden absolute pointer-events-none'>
                    <Arrow className='bottom-60 z-20 h-9 w-9 relative  animate-bounce rotate-90 pointer-events-auto' />
                </span>
            </Link>
            <div className=' lg:hidden border-l-4 border-tertiaryOrange ml-6 mt-14 mb-20 font-openSans text-1.5xl'>
                <p className='ml-6 mx-6 text-primaryBlueDark font-normal'>Cadastre-se e faça a <strong>avaliação de maturidade</strong> da sua empresa <strong>gratuitamente.</strong> </p>
                <Link href='/cadastro' className="flex pointer-events-none">
                    <span className='uppercase text-white font-bold bg-primaryBlue py-3 px-8 mt-5 mx-6 hover:bg-primaryBlueDark ease-in-out duration-300 pointer-events-auto'>Quero começar agora</span>
                </Link>
            </div>
            <Link href="#suaEmpresaEUnica">
                <span className="block lg:hidden">
                    <Arrow className='h-9 w-9 buttom-8 animate-bounce m-auto rotate-90' />
                </span>
            </Link>
        </div>
    )
}