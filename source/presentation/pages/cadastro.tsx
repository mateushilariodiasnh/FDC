import { LogoOneFDC } from "../components/icons";
import Link from "next/link";

export default function Register(): JSX.Element {
    return (
        <>
            <header>
                <Link href='#' className="flex justify-center my-4">
                    <LogoOneFDC className='h-8' />
                </Link>
            </header>
            <main>
                <div className=' grid grid-flow-row place-content-center mt-12 ml-6 '>
                    <div>
                        <div className='h-2 w-12 bg-primaryBlue mb-4'></div>
                        <h1 className='uppercase lg:pr-16 font-bold font-nexaSlab text-2.5 text-3.8xl text-primaryBlueDark'>Avaliação de maturidade</h1>
                    </div>
                </div>
                <div className="pt-6 px-6 font-openSans font-normal text-1.5xl space-y-2">
                    <p><strong>Mais do que trabalhar para empresas, trabalhamos com empresas.</strong> Pautado nessa filosofia da FDC, o Corporate Learn & Drive tem seu início marcado pela identificação de gaps. Esse é o ponto de partida para criarmos juntos uma jornada de desenvolvimento feita sob medida para sua empresa.</p>
                    <p>Ao final, você receberá o raio-x completo da sua empresa, com a maturidade da mesma em relação às grandes empresas do mercado, seguida de uma trilha de desenvolvimento personalizada sugerida pela FDC. </p>
                </div>
            </main>
        </>
    )
}