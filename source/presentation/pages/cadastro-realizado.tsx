import Link from "next/link";
import HeaderDesktop from "../components/common/headerDesktop";
import HeaderMobile from "../components/common/headerMobile";
import { ArrowSite } from "../components/icons";

export default function CadastroRealizado() {
    return (
        <>
            <header>
                <div className="block lg:hidden">
                    <HeaderMobile />
                </div>
                <div className="hidden lg:block">
                    <HeaderDesktop />
                </div>
            </header>

            <main className="max-w-2.5xl mx-auto">

                <div className='grid grid-flow-row mt-12 lg:mt-16 px-6 lg:px-0'>
                    <div>
                        <div className='h-2 w-12 bg-primaryBlue mb-4'></div>
                        <h1 className='uppercase font-bold font-nexaSlab text-2.5 text-3.8xl pt-1 lg:pt-0 text-primaryBlueDark'>Seu cadastro foi realizado com sucesso!</h1>
                    </div>
                </div>

                <div className="font-openSans text-1.5xl text-primaryGrayDark font-normal px-6 lg:px-0">
                    <p className="pt-6 lg:pt-10">Agora, você pode iniciar o raio-x da FDC e descobrir o grau de maturidade da sua empresa.</p>
                    <p className="pt-2">Vamos lá?</p>
                </div>

                <div className="pt-8 lg:pt-9 px-4 lg:px-0 max-w-1.5sm mx-auto">
                    <Link href='#' className='w-full bg-primaryBlue hover:bg-primaryBlueDark flex justify-between ease-in-out duration-300 h-auto'>
                        <span className="inline-flex items-center text-white font-openSans text-1.5xl font-bold uppercase mx-auto lg:px-6 my-auto">
                            Iniciar o questionário
                        </span>
                        <ArrowSite className="h-12" />
                    </Link>
                </div>

            </main>
        </>
    )
}