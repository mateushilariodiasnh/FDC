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
import FieldsContent from "./FieldsContent"

export default function About() {
    return (
        <section className='relative overflow-hidden'>
            <div className='bg-primaryGrayDark pt-16'>
                <div className='border-t-8 border-secondaryGrayDark mx-6 lg:max-w-3.5xl lg:mx-auto'></div>
                <h2 className='uppercase text-center text-primaryBlue mt-10 mb-8 text-2xl lg:text-4xl font-nexaSlab'>Sobre a FDC</h2>
                <div className='border-t-8 border-secondaryGrayDark mx-6 lg:max-w-3.5xl lg:mx-auto'></div>
                <p className='text-white text-1.5xl mx-6 mt-10 lg:max-w-2xl lg:mx-auto font-openSans  '><strong>A FDC impulsiona o desenvolvimento</strong> das organizações com uma abordagem focada em resultados, inclusão e sustentabilidade para os negócios. Olhamos para a real necessidade, bem como para os desafios e objetivos das organizações e de seus profissionais, contribuindo para o aprimoramento das competências gerenciais e individuais e a melhoria constante da governança, gestão e dos resultados. </p>
                <p className='text-white text-1.5xl mt-2 mx-6 lg:max-w-2xl lg:mx-auto font-openSans'><strong>Nossas soluções geram impacto e compreendem temáticas globais,</strong> acompanhando as transformações do mundo e da sociedade na velocidade que o mercado exige.</p>
                <div className=' mx-14 text-white pt-10 lg:px-auto lg:max-w-3.5xl lg:mx-auto'>
                    <div className='lg:grid gap-1 lg:grid-cols-4 lg:space-x-6'>
                        <article>
                            <Fields ><h3>45 anos</h3></Fields>
                            <FieldsContent ><p className='pt-2 pb-6 pl-4 pr-16 '>de história de sucesso e liderança</p></FieldsContent>
                        </article>
                        <article>
                            <Fields ><h3>+1 milhão</h3></Fields>
                            <FieldsContent ><p className='pt-1 pb-6 pl-4 pr-5'>de executivos capacitados em programas</p></FieldsContent>
                        </article>
                        <article>
                            <Fields ><h3>+700</h3></Fields>
                            <FieldsContent ><p className='pt-2 pb-4 pl-4 pr-8 ' >docentes com notoriedade nacional e internacional</p></FieldsContent>
                        </article>
                        <article>
                            <Fields ><h3>+900</h3></Fields>
                            <FieldsContent ><p className='pt-3 pb-6 px-4 '>empresas cliente atendidas por ano</p></FieldsContent>
                        </article>
                    </div>
                    <div className='lg:grid gap-1 lg:grid-cols-3 lg:mt-6 lg:space-x-6'>
                        <article>
                            <Fields ><h3>+37 mil</h3></Fields>
                            <FieldsContent ><p className='pt-3 pb-6 px-4 '>executivos participantes por ano</p></FieldsContent>
                        </article>
                        <article>
                            <Fields ><h3>1ª em Educação</h3></Fields>
                            <FieldsContent ><p className='pt-3 pb-6 px-4 '>Executiva na América Latina há 15 anos consecutivos*</p></FieldsContent>
                        </article>
                        <article>
                            <Fields ><h3>9ª melhor</h3></Fields>
                            <FieldsContent ><p className='pt-3 pb-10 px-4 '>escola de negócios do mundo*</p></FieldsContent>
                        </article>
                    </div>
                </div>

                <div className='opacity-8 relative z-10 font-openSans'>
                    <p className='text-center text-white mt-12 '>*Segundo o ranking de Educação Executiva 2022 do Financial Times.</p>
                    <button className='block mx-auto uppercase border border-white text-white hover:bg-white hover:text-[#005E83] h-12 my-12 text-center px-6'>Conheça mais</button>
                </div>

                <div className=' grid grid-flow-row place-content-center bg-white items-center space-y-6 mx-6 md:min-w-sm lg:max-w-3.5xl mb-20 py-12 lg:flex lg:space-x-6 lg:py-15 lg:px-12 md:mx-auto relative z-10'>
                    <div>
                        <div className='h-2 w-12 bg-[#FAA635] mb-4'></div>
                        <p className='uppercase lg:pr-16 text-base font-nexaSlab'>Ranking e Certificações</p>
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
                        modules={[Pagination]}
                        pagination={{ clickable: true }}
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
    )
}