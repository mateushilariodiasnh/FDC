import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css/pagination"
import { Pagination } from 'swiper';
import 'swiper/css'
import Cards from './CardComponent'
import { IDataCard } from "./data/CardsData";

interface ICardProps {
  data: IDataCard[];
}

export default function CardsMobile({data}: ICardProps): JSX.Element {
  return (
    <div className='lg:hidden'>
      <Swiper
        modules={[Pagination]}
        spaceBetween={16}
        slidesPerView={1.20}
        pagination={{ clickable: true }}
        centeredSlides={true}
        breakpoints={{
          640: {
            slidesPerView: 2.7,
            spaceBetween: 16,
          }
        }}
      >
          {data.map((item) => {
            return (
              <article key={item.id}>
                <SwiperSlide key={item.id}>
                  <Cards data={item} />
                </SwiperSlide>
              </article>
            )
          })}
      </Swiper>
    </div>
  )
}