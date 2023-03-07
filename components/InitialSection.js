import { Telha } from "./icons"
import { Flecha } from "./icons"
import { Corte } from "./icons"

export default function InitialSection() {
    return (
        <div className="lg:hidden">
            <section className="bg-[url('../public/images/InitialImage.png')] bg-cover  ">
                <section className='text-white pt-8'>
                    <h1 className='uppercase mx-6 font-nexaSlab font-black text-2xl leading-snug'>Corporate Learn & Drive:
                        sua academia de gestão</h1>
                    <p className='mx-6 font-nexaSlab font-light text-3xl'>Para empresas que querem transformar gaps em oportunidades</p>
                    <p className='mt-4 mx-6 text-lg'>Descubra os gaps do seu negócio com o apoio da FDC e crie trilhas de desenvolvimento específicas para a sua empresa. Com o programa Corporate Learn & Drive, seu time inicia a jornada para o futuro com a melhor escola de negócios da América Latina, cobrindo as principais dimensões necessárias para a evolução dos negócios - é uma verdadeira academia de gestão à sua disposição. A excelência educacional de sempre, em um formato que você nunca viu.</p>
                    <Telha className="h-93 w-82 mt-2 ml-3" />
                </section>
                <Corte/>
            </section>
            <div className=' lg:block border-l-4 border-[#FAA635] ml-6 mt-12 mb-20'>
                <p className='ml-6 mx-6 text-base text-[#005E83]'>Cadastre-se e faça a <strong>avaliação de maturidade</strong> da sua empresa <strong>gratuitamente.</strong> </p>
                <button className='uppercase text-white bg-[#2A9FBC] py-3 px-10 mt-4 ml-6'>Quero começar agora</button>
            </div>
            <a href="#suaEmpresaEUnica">
                <Flecha className='h-9 w-9 buttom-8 animate-bounce m-auto rotate-90' />
            </a>
        </div>
    )
}
