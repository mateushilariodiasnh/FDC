import { Flecha } from "./icons"
import { Corte } from "./icons"
import KVwomanInFrontOfTheNotebook from '/public/images/KVwomanInFrontOfTheNotebook.png'

export default function InitialSection() {
    return (
        <div className="">
            <section className="bg-[url('../public/images/InitialImage.png')] bg-cover lg:grid grid-cols-2 lg:itens-center lg:justify-center 2xl:mx-auto ">
                <section className='text-white pt-8 lg:pt-24 2xl:max-w-2xl 2xl:mx-auto 2xl:px-4'>
                    <h1 className='uppercase ml-6 mr-[72px] md:mx-6 font-nexaSlab font-black text-3.5xl '>Corporate Learn & Drive : sua academia de gestão</h1>
                    <p className='ml-6 md:mx-6 font-nexaSlab font-light text-3.5xl'>Para empresas que querem transformar gaps em oportunidades</p>
                    <p className='mt-4 mx-6 text-lg font-openSans'>Descubra os gaps do seu negócio com o apoio da FDC e crie <strong>trilhas de desenvolvimento específicas</strong> para a sua empresa. Com o programa Corporate Learn & Drive, seu time inicia a jornada para o futuro com a <strong>melhor escola de negócios da América Latina</strong>, cobrindo as principais dimensões necessárias para a evolução dos negócios - é uma verdadeira academia de gestão à sua disposição. <strong>A excelência educacional de sempre, em um formato que você nunca viu.</strong></p>
                    <div className='hidden lg:block border-l-4 border-[#FAA635] ml-6 mt-16 mb-20 text-2xl font-openSans'>
                        <p className='ml-6 mx-6'>Cadastre-se e faça a <strong>avaliação de maturidade</strong> da sua empresa <strong>gratuitamente.</strong> </p>
                        <button className='uppercase text-white bg-[#2A9FBC] py-3 px-10 mt-4 ml-6'>Quero começar agora</button>
                    </div>
                </section>
                <picture className=' my-auto'>
                    <img className='h-93 w-82 mt-2 ml-3 lg:h-[648px] lg:w-[574px]' src={KVwomanInFrontOfTheNotebook.src} alt="Uma mulher olhando para um notebook" />
                </picture>
                <a href='#suaEmpresaEUnica' className='ml-auto mr-0 top-8 lg:block hidden'>
                    <Flecha className='h-9 w-9 absolute animate-bounce rotate-90' />
                </a>
                <Corte />
            </section>
            <div className=' lg:hidden border-l-4 border-[#FAA635] ml-6 mt-12 mb-20'>
                <p className='ml-6 mx-6 text-base text-[#005E83]'>Cadastre-se e faça a <strong>avaliação de maturidade</strong> da sua empresa <strong>gratuitamente.</strong> </p>
                <button className='uppercase text-white bg-[#2A9FBC] py-3 px-10 mt-4 ml-6'>Quero começar agora</button>
            </div>
            <a href="#suaEmpresaEUnica" className="block lg:hidden">
                <Flecha className='h-9 w-9 buttom-8 animate-bounce m-auto rotate-90' />
            </a>
        </div>
    )
}