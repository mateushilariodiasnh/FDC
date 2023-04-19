import { ArrowSite } from "../components/icons";
import Link from "next/link";
import { useForm } from "react-hook-form";
import HeaderMobile from "../components/common/headerMobile";

export default function RetomarCodigo(): JSX.Element {

    const { register, handleSubmit, formState: { errors } } = useForm();

    return (
        <>
            <header>
                <HeaderMobile />
            </header>

            <main className="px-4 w-full lg:px-0 lg:max-w-2.5xl md:max-w-md md:mx-auto ">
                <div className=' grid grid-flow-row mt-14 lg:mt-16'>
                    <div>
                        <div className='h-2 w-12 bg-primaryBlue mb-4'></div>
                        <h1 className='uppercase font-bold font-nexaSlab text-2.5 text-3.8xl text-primaryBlueDark'>Retomar</h1>
                    </div>
                </div>
                <div className="pt-10 font-openSans font-normal text-1.5xl text-primaryGrayDark">
                    <p>Para continuar, informe seu e-mail e insira o código de verificação recebido:</p>
                </div>

                <form className="flex flex-col gap-7 pt-10 lg:pt-10 lg:pl-36 lg:pr-36">
                    <div className="flex flex-col">
                        <label htmlFor="" className="font-openSans font-bold text-primaryGrayDark text-1.5xl">E-mail cadastrado</label>
                        <input type="email" id="email" placeholder="seunome@empresa.com.br" className="border border-primaryGrayDark py-2 pl-4 mt-1" {...register('email')} />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="" className="font-openSans font-bold text-primaryGrayDark text-1.5xl">Código de verificação</label>
                        <input type="email" id="email" className="border border-primaryGrayDark py-2 pl-4 mt-1" {...register('email')} />
                    </div>
                    <Link href='#' className='w-full bg-primaryBlue hover:bg-primaryBlueDark flex justify-between ease-in-out duration-300 h-auto mt-3'>
                        <span className="inline-flex items-center text-white font-openSans text-1.5xl font-bold uppercase mx-auto lg:px-6 my-auto">
                            Retomar
                        </span>
                        <ArrowSite className="h-12" />
                    </Link>
                </form>

                <div className="mt-10 lg:mt-9 text-center font-openSans text-1.5xl">
                    <a href="/retomar" className="text-primaryBlue font-bold underline">Não recebi um código de verificação</a>
                </div>
            </main>
        </>
    )
}