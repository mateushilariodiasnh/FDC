import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css/pagination"
import { Pagination, A11y } from 'swiper';
import 'swiper/css'
import Cards from './Card'
import Data from './CardsData.js'

export default function CardsMobille() {
  return (
    <div className='lg:hidden'>
      <Swiper
        modules={[Pagination, A11y]}
        spaceBetween={16}
        slidesPerView={1.5}
        pagination={{ clickable: true }}
        breakpoints={{
          640: {
            slidesPerView: 2.7,
            spaceBetween: 16,
          }
        }}
      >
          {Data.map((item) => {
            return (
              <div className="bullets">
                <SwiperSlide key={item.id}>
                  <Cards image={item.image} content={item.content} />
                </SwiperSlide>
              </div>
            )
          })}
      </Swiper>
    </div>
  )
}