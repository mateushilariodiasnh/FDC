import { LogoOneFDC } from "../components/icons";
import Link from "next/link";
import { useForm } from "react-hook-form";

export default function Retomar(): JSX.Element {

    return (
        <>
            <header>
                <Link href='#' className="flex justify-center my-4">
                    <LogoOneFDC className='h-8' />
                </Link>
            </header>
            <main className="px-4 w-full lg:max-w-2.5xl md:mx-auto ">
                <div className=' grid grid-flow-row mt-12 lg:mt-20'>
                    <div>
                        <div className='h-2 w-12 bg-primaryBlue mb-4'></div>
                        <h1 className='uppercase font-bold font-nexaSlab text-2.5 text-3.8xl text-primaryBlueDark'>Retomar</h1>
                    </div>
                </div>
                <div>
                    <div className="pt-10 font-openSans font-normal text-1.5xl text-primaryGrayDark">
                        <p>Para continuar o questionário de onde você parou, é necessário inserir um código de verificação. Informe seu e-mail para recebê-lo e voltar à análise.</p>
                    </div>
                </div>

                <form className="flex flex-col pt-10 lg:flex-row lg:w-full">
                    <div className="flex flex-col gap-1">
                        <label htmlFor="" className="font-openSans font-bold text-primaryGrayDark text-1.5xl">E-mail cadastrado</label>
                        <input type="email" name="email" id="email" placeholder="seunome@empresa.com.br" className="border border-primaryGrayDark py-2 pl-4" />
                    </div>

                    <Link href='#' className='bg-primaryBlue  hover:bg-primaryBlueDark text-white lg:w-auto lg:h-12 flex justify-between ease-in-out duration-300 mt-5 py-3 lg:px-5 '><strong className='font-openSans text-1.5xl font-bold uppercase mx-auto'>Enviar</strong>
                    </Link>
                </form>

                <div className="mt-10 font-openSans text-1.5xl">
                    <p className="text-primaryGrayDark font-normal mb-6">Após receber o código por e-mail, clique no link abaixo:</p>
                    <a href="#" className="text-primaryBlue font-bold underline">Já tenho um código de verificação</a>
                </div>


            </main>
        </>
    )
}