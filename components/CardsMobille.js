import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css/pagination"
import { Pagination, A11y } from 'swiper';
import 'swiper/css'
import Cards from './Card'
import { CardImageOne } from './icons'
import { CardImageTwo } from './icons'
import { CardImageThree } from './icons'
import { CardImageFour } from './icons'
import { CardImageFive } from './icons'

export default function CardsMobille() {
    return (
        <>
          <div className='lg:hidden'>
            <Swiper
              modules={[Pagination, A11y]}
              spaceBetween={0}
              slidesPerView={1}
              pagination={{ clickable: true }}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log('slide change')}
              breakpoints={{
                640: {
                  slidesPerView: 2.7,
                  spaceBetween: 16,
                }
              }}
            >
              <SwiperSlide className=''>
                <Cards>
                  <CardImageOne className=" h-16 mx-auto mt-8 mb-4" /><strong>Learn:</strong> mais de <strong>220 módulos,</strong> distribuídos em 7 dimensões empresariais
                </Cards>
              </SwiperSlide>
              <SwiperSlide >
                <Cards>
                  <CardImageTwo className="h-16 mx-auto mt-8 mb-4" /><strong>Drive:</strong> transposição do conhecimento para a prática, com <strong>metodologia exclusiva FDC</strong>
                </Cards>
              </SwiperSlide>
              <SwiperSlide>
                <Cards>
                  <CardImageThree className="h-16 mx-auto mt-8 mb-4" /><strong>Relatórios gerenciais</strong> para acompanhar o engajamento do time
                </Cards>
              </SwiperSlide>
              <SwiperSlide>
                <Cards>
                  <CardImageFour className="h-16 mx-auto mt-8 mb-4" />Desenvolvimento <strong>Blended Learning,</strong> com turmas de até 30 pessoas
                </Cards>
              </SwiperSlide>
              <SwiperSlide>
                <Cards>
                  <CardImageFive className="h-16 mx-auto mt-8 mb-4" />Conteúdos exclusivos, seguindo o padrão de <strong>excelência da FDC</strong>
                </Cards>
              </SwiperSlide>
            </Swiper>
          </div>
        </>
    )
}