import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css/pagination"
import { Pagination, A11y } from 'swiper';
import 'swiper/css'
import Cards from './Card'
import { IDataCard } from "./data/CardsData";

interface ICardProps {
  data: IDataCard[];
}

export default function CardsMobille({data}: ICardProps): JSX.Element {
  return (
    <div className='lg:hidden'>
      <Swiper
        modules={[Pagination]}
        spaceBetween={16}
        slidesPerView={1.20}
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
              <article className="" key={item.id}>
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