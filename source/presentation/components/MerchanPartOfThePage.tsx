import Link from "next/link"

export default function Merchan(): JSX.Element {
    return (
        <section className=" bg-InitialImage xl:bg-cover ">
            <div className='m-auto pb-16 max-w-2xl lg:max-w-3xl pt-16 lg:py-32'>
                <h2 className='text-white mx-6 text-xl lg:text-4.1xl font-nexaSlab'>Transforme os gaps do seu negócio em oportunidades com a FDC</h2>
                <div className='border-l-4 border-tertiaryOrange ml-6 mt-8 font-openSans'>
                    <p className='ml-6 text-white mx-6 text-base lg:mr-12 lg:text-1xl'>Cadastre-se agora mesmo e faça a <strong>avaliação de maturidade</strong> da sua empresa <strong>gratuitamente.</strong> </p>
                    <Link href='#'>
                        <button className='uppercase text-white bg-primaryBlue py-3 px-10 lg:px-8 mt-4 ml-4 mr-4 hover:bg-white hover:text-primaryBlueDark ease-in-out duration-300 font-bold text-1.5xl font-openSans '>Quero começar agora</button>
                    </Link>
                </div>
            </div>
        </section>
    )
}