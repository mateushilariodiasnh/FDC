import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css/pagination"
import { Pagination, A11y } from 'swiper';
import 'swiper/css'
import Cards from './Card'

export default function CardsMobille({data}) {
  return (
    <div className='lg:hidden'>
      <Swiper
        modules={[Pagination]}
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
          {data.map((item) => {
            return (
              <div className="bullets" >
                <SwiperSlide >
                  <Cards image={item.image} content={item.content} />
                </SwiperSlide>
              </div>
            )
          })}
      </Swiper>
    </div>
  )
}