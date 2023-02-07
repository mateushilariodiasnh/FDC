import Fields from "./Field"
import { Ft } from "./icons"
import { Amba } from "./icons"
import { Equis } from "./icons"
import { FdcTwo } from "./icons"
import { Localfachada } from "./icons"
import { LocalFachadaOne } from "./icons"
import { LocalFachadaTwo } from "./icons"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, A11y } from 'swiper';
import 'swiper/css'

export default function About() {
    return (
        <>
            <section className='relative overflow-hidden'>
                <div className='bg-[#5C585B] pt-16'>
                    <div className='border-t-8 border-[#686366] mx-6 lg:max-w-4xl lg:mx-auto'></div>
                    <h2 className='uppercase text-center text-[#2A9FBC] mt-10 mb-8 text-2xl lg:text-4xl font-nexaSlab'>Sobre a FDC</h2>
                    <div className='border-t-8 border-[#686366] mx-6 lg:max-w-4xl lg:mx-auto'></div>
                    <p className='text-[#FFFFFF] mx-6 mt-10 px-4 lg:max-w-2xl lg:mx-auto font-openSans  '><strong>A FDC impulsiona o desenvolvimento</strong> das organizações com uma abordagem focada em resultados, inclusão e sustentabilidade para os negócios. Olhamos para a real necessidade, bem como para os desafios e objetivos das organizações e de seus profissionais, contribuindo para o aprimoramento das competências gerenciais e individuais e a melhoria constante da governança, gestão e dos resultados. </p> <br></br>
                    <p className='text-[#FFFFFF] mx-6 px-4 lg:max-w-2xl lg:mx-auto font-openSans'><strong>Nossas soluções geram impacto e compreendem temáticas globais,</strong> acompanhando as transformações do mundo e da sociedade na velocidade que o mercado exige.</p>
                    <div className=' mx-14 text-white pt-10 lg:px-auto lg:max-w-4xl lg:mx-auto'>
                        <div className='lg:grid gap-1 lg:grid-cols-4 lg:space-x-6'>
                            <article>
                                <Fields ><h3>45 anos</h3></Fields>
                                <p className='pb-4'>de história de sucesso e liderança</p>
                            </article>
                            <article>
                                <Fields >+1 milhão</Fields>
                                <p className='pb-4'>de executivos capacitados em programas</p>
                            </article>
                            <article>
                                <Fields >+700</Fields>
                                <p className='pb-4' >docentes com notoriedade nacional e internacional</p>
                            </article>
                            <article>
                                <Fields >+900</Fields>
                                <p className='pb-4'>empresas cliente atendidas por ano</p>
                            </article>
                        </div>
                        <div className='lg:grid gap-1 lg:grid-cols-3 lg:mt-6 lg:space-x-6'>
                            <article>
                                <Fields >+37 mil</Fields>
                                <p className='pb-4'>executivos participantes por ano</p>
                            </article>
                            <article>
                                <Fields >1ª em Educação</Fields>
                                <p className='pb-4'>Executiva na América Latina há 15 anos consecutivos*</p>
                            </article>
                            <article>
                                <Fields >9ª melhor</Fields>
                                <p className='pb-10'>escola de negócios do mundo*</p>
                            </article>
                        </div>
                    </div>

                    <div className='opacity-8 relative z-10 font-openSans'>
                        <p className='text-center text-white mt-12 '>*Segundo o ranking de Educação Executiva 2022 do Financial Times.</p>
                        <button className='block mx-auto uppercase border border-white text-white hover:bg-white hover:text-[#005E83] h-12 my-12 text-center px-6'>Conheça mais</button>
                    </div>

                    <div className=' grid grid-flow-row place-content-center bg-white items-center space-y-6 mx-6 md:min-w-sm max-w-4xl mb-20 py-12 lg:flex lg:space-x-6 lg:px-12 md:mx-auto relative z-10'>
                        <div>
                            <div className='h-2 w-12 bg-[#FAA635] mb-4'></div>
                            <p className='uppercase text-center lg:pr-16 text-base font-nexaSlab'>Ranking e Certificações</p>
                        </div>
                        <Ft className='h-14 lg:h-full mx-auto' />
                        <Amba className='h-10 lg:h-full mx-auto' />
                        <Equis className='h-10 lg:h-full mx-auto ' />
                    </div>

                    <span className='lg:bottom-12 aria-hidden:"true" absolute px-2 items-center justify-center h-full w-full lg:h-[634px] lg:w-[1815px] mx-auto '>
                        <FdcTwo className='-z-10' />
                    </span>

                    <div className='bullets'>
                        <Swiper
                            breakpoints={{
                                1024: {
                                    slidesPerView: 3
                                }
                            }}
                        >
                            <SwiperSlide>
                                <picture>
                                    <Localfachada />
                                </picture>
                            </SwiperSlide>
                            <SwiperSlide>
                                <picture>
                                    <LocalFachadaOne />
                                </picture>
                            </SwiperSlide>
                            <SwiperSlide>
                                <picture>
                                    <LocalFachadaTwo />
                                </picture>
                            </SwiperSlide>
                        </Swiper>
                    </div>

                </div>
            </section>
        </>
    )
}