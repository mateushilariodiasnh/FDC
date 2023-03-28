import Fields from "./Field"
import { FdcTwoWaterMark } from "./icons"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination } from 'swiper';
import 'swiper/css'
import FieldsContent from "./FieldsContent"
import Link from "next/link";

export default function About(): JSX.Element {
    return (
        <section className='relative overflow-hidden'>
            <div className='bg-primaryGrayDark pt-16 lg:pt-40'>
                <div className='border-y-8 border-secondaryGrayDark mx-6 lg:max-w-3.5xl lg:mx-auto'>
                <h2 className='uppercase text-center text-primaryBlue mt-12 mb-10 text-2xl lg:text-4xl font-nexaSlab lg:text-4.5xl'>Sobre a FDC</h2>
                </div>
                <p className='text-white text-1.5xl mx-6 mt-14 lg:max-w-xl lg:mx-auto font-openSans  '><strong>A FDC impulsiona o desenvolvimento</strong> das organizações com uma abordagem focada em resultados, inclusão e sustentabilidade para os negócios. Olhamos para a real necessidade, bem como para os desafios e objetivos das organizações e de seus profissionais, contribuindo para o aprimoramento das competências gerenciais e individuais e a melhoria constante da governança, gestão e dos resultados. </p>
                <p className='text-white text-1.5xl mt-2 mx-6 lg:max-w-xl lg:mx-auto font-openSans'><strong>Nossas soluções geram impacto e compreendem temáticas globais,</strong> acompanhando as transformações do mundo e da sociedade na velocidade que o mercado exige.</p>
                <div className=' mx-14 text-white relative z-20 pt-12 lg:px-auto lg:max-w-3.5xl lg:mx-auto'>
                    <div className='lg:grid gap-1 lg:grid-cols-4 lg:space-x-6'>
                        <article>
                            <Fields ><h3>45 anos</h3></Fields>
                            <FieldsContent ><p className='pt-2 pb-6 pl-4 pr-16 lg:pr-8 lg:pb-2'>de história de sucesso e liderança</p></FieldsContent>
                        </article>
                        <article>
                            <Fields ><h3>+1 milhão</h3></Fields>
                            <FieldsContent ><p className='pt-1 pb-6 pl-4 pr-5 lg:pt-2 lg:pr-2 lg:pb-2'>de executivos capacitados em programas</p></FieldsContent>
                        </article>
                        <article>
                            <Fields ><h3>+700</h3></Fields>
                            <FieldsContent ><p className='pt-2 pb-4 pl-4 pr-8 lg:pr-3 lg:pb-2' >docentes com notoriedade nacional e internacional</p></FieldsContent>
                        </article>
                        <article>
                            <Fields ><h3>+900</h3></Fields>
                            <FieldsContent ><p className='pt-3 pb-6 px-4 lg:pb-2'>empresas cliente atendidas por ano</p></FieldsContent>
                        </article>
                    </div>
                    <div className='lg:grid gap-1 lg:grid-cols-3 lg:mt-6 lg:space-x-6'>
                        <article>
                            <Fields ><h3>+37 mil</h3></Fields>
                            <FieldsContent ><p className='pt-3 pb-6 px-4 lg:pr-8 lg:pt-1 lg:pb-2'>executivos participantes por ano</p></FieldsContent>
                        </article>
                        <article>
                            <Fields ><h3>1ª em Educação</h3></Fields>
                            <FieldsContent ><p className='pt-3 pb-6 px-4 lg:pt-1 lg:pb-2'>Executiva na América Latina há 15 anos consecutivos*</p></FieldsContent>
                        </article>
                        <article>
                            <Fields ><h3>9ª melhor</h3></Fields>
                            <FieldsContent ><p className='pt-3 pb-10 px-4 lg:pt-1 lg:pb-2'>escola de negócios do mundo*</p></FieldsContent>
                        </article>
                    </div>
                </div>

                <div className='opacity-8 relative z-10 font-openSans'>
                    <p className='text-center text-white mt-6 -mb-2 text-xs'>*Segundo o ranking de Educação Executiva 2022 do Financial Times.</p>
                    <Link href='#'>
                        <button className='block mx-auto uppercase border border-white text-white hover:bg-white hover:text-primaryBlueDark ease-in-out duration-300 h-12 my-12 text-center px-6'>Conheça mais</button>
                    </Link>
                </div>

                <div className=' grid grid-flow-row place-content-center bg-white items-center justify-center space-y-6 mx-6 lg:max-w-3.5xl mb-20 py-12 lg:flex lg:space-x-6 lg:py-11 lg:px-12 md:mx-auto relative z-10 '>
                    <div>
                        <div className='h-2 w-12 bg-tertiaryOrange mb-4'></div>
                        <p className='uppercase lg:pr-16 text-base font-nexaSlab'>Ranking e Certificações</p>
                    </div>
                    <picture>
                        <source srcSet={"/images/FTLogoWithRankingInformation.png".replace(".png", ".webp")} type="image/webp" />
                        <img className="h-14 lg:h-full mx-auto" src={"/images/FTLogoWithRankingInformation.png"} alt="logo da FT com uma informação de ranking ao lado" />
                    </picture>
                    <picture>
                        <source srcSet={"/images/AmbaLogo.png".replace(".png", ".webp")} type="image/webp" />
                        <img className="h-11 lg:h-full mx-auto" src={"/images/AmbaLogo.png"} alt="logo da Amba" />
                    </picture>
                    <picture>
                        <source srcSet={"/images/EquisLogo.webp".replace(".png", ".webp")} type="image/webp" />
                        <img className="h-16 lg:h-full mx-auto" src={"/images/EquisLogo.webp"} alt="logo da Equis" />
                    </picture>
                </div>

                <span className='lg:bottom-12 aria-hidden:"true" absolute px-2 items-center justify-center h-full w-full lg:h-[634px] lg:w-full mx-auto '>
                    <FdcTwoWaterMark className='-z-10' />
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
                                <source srcSet={"/images/MainBeltOfTheBuilding.png".replace(".png", ".webp")} type="image/webp" />
                                <img src={"/images/MainBeltOfTheBuilding.png"} alt="a faixada do prédio" />
                            </picture>
                        </SwiperSlide>
                        <SwiperSlide>
                            <picture>
                                <source srcSet={"/images/ExteriorOfTheBuilding.png".replace(".png", ".webp")} type="image/webp" />
                                <img src={"/images/ExteriorOfTheBuilding.png"} alt="a parte externa do prédio" />
                            </picture>
                        </SwiperSlide>
                        <SwiperSlide>
                            <picture>
                                <source srcSet={"/images/InteriorOfTheBuilding.png".replace(".png", ".webp")} type="image/webp" />
                                <img src={"/images/InteriorOfTheBuilding.png"} alt="a parte interna do prédio" />
                            </picture>
                        </SwiperSlide>
                    </Swiper>
                </div>

            </div>
        </section>
    )
}