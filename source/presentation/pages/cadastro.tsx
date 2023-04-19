import { MainLogo, IconHeader, ArrowSite } from "../components/icons";
import ListCadastroShow from "../components/componentsCadastro/listShowList";
import { dataList } from "../components/data/dataCadastro/listData";
import Link from "next/link";
import { useForm } from "react-hook-form";
import HeaderDesktop from "../components/common/headerDesktop";
import HeaderMobile from "../components/common/headerMobile";

export default function Register(): JSX.Element {

    const { register, handleSubmit, formState: { errors } } = useForm();

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
                <div className=' grid grid-flow-row mt-12 lg:mt-16 ml-6 lg:ml-0 '>
                    <div>
                        <div className='h-2 w-12 bg-primaryBlue mb-4'></div>
                        <h1 className='uppercase lg:pr-16 font-bold font-nexaSlab text-2.5 text-3.8xl text-primaryBlueDark'>Avaliação de maturidade</h1>
                    </div>
                </div>
                <div className="pt-7 lg:pt-9 px-6 lg:px-0 font-openSans font-normal text-1.5xl text-primaryGrayDark space-y-2">
                    <p><strong>Mais do que trabalhar para empresas, trabalhamos com empresas.</strong> Pautado nessa filosofia da FDC, o Corporate Learn & Drive tem seu início marcado pela identificação de gaps. Esse é o ponto de partida para criarmos juntos uma jornada de desenvolvimento feita sob medida para sua empresa.</p>
                    <p>Ao final, você receberá o raio-x completo da sua empresa, com a maturidade da mesma em relação às grandes empresas do mercado que já participaram da avaliação, seguida de uma trilha de desenvolvimento sugerida pela FDC.</p>
                </div>

                <div className="mx-6 lg:mx-0 mt-6 lg:mt-8 mb-10">
                    <ListCadastroShow data={dataList} />
                </div>

                <form className="flex flex-col px-4 md:px-0 space-y-6 mx-auto max-w-1.5sm lg:pt-1">

                    <div className="flex flex-col">
                        <label htmlFor="">Seu nome</label>
                        <input type="text" id="name" placeholder="Nome Sobrenome" className="border border-primaryGrayDark py-2 pl-4 mt-1" {...register('name')} />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="">E-mail corporativo</label>
                        <input type="email" id="email" placeholder="seunome@empresa.com.br" className="border border-primaryGrayDark py-2 pl-4 mt-1" {...register('email')} />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="">Telefone com DDD</label>
                        <input type="tel" id="telephone" placeholder="(00) 00000-0000" className="border border-primaryGrayDark py-2 pl-4 mt-1" {...register('telephone')} />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="">Cargo</label>
                        <input type="text" id="office" placeholder="Seu cargo" className="border border-primaryGrayDark py-2 pl-4 mt-1" {...register('office')} />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="">Nome da empresa</label>
                        <input type="text" id="company" placeholder="Sua empresa" className="border border-primaryGrayDark py-2 pl-4 mt-1" {...register('company')} />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="">CNPJ</label>
                        <input type="text" id="CNPJ" placeholder="00.000.000/0000-00" className="border border-primaryGrayDark py-2 pl-4 mt-1" {...register('CNPJ')} />
                    </div>
                    <div className="pt-1 lg:pt-0">
                        <input type="checkbox" name="" id="" />
                        <label htmlFor="" className="pl-2 font-openSans font-normal text-1.5xl text-primaryGrayDark">Aceito os <strong className="text-primaryBlue underline">termos de uso</strong>  e <strong className="text-primaryBlue underline">política de privacidade</strong>.</label>
                    </div>
                    <div className="pb-4 lg:pb-2">
                        <input type="checkbox" name="" id="" />
                        <label htmlFor="" className="pl-2 font-openSans font-normal text-1.5xl text-primaryGrayDark">Autorizo o recebimento de comunicações (WhatsApp, SMS, e-mail* e ligação).</label>
                    </div>

                    <Link href='/cadastro-realizado' className='w-full bg-primaryBlue hover:bg-primaryBlueDark flex justify-between ease-in-out duration-300 h-auto'>
                        <span className="inline-flex items-center text-white font-openSans text-1.5xl font-bold uppercase mx-auto lg:px-6 my-auto">
                            Cadastrar
                        </span>
                        <ArrowSite className="h-12" />
                    </Link>

                </form>

                <div className="font-openSans font-normal text-1.5xl mx-auto text-primaryGrayDark pt-8 lg:pt-10 px-4 md:px-0 mb-11 max-w-1.5sm">
                    <p>*Caso não encontre os e-mails da FDC em sua caixa de entrada, verifique o Spam.</p>
                </div>
            </main>
        </>
    )
}