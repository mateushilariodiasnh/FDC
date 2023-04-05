import DepositionsComponent from "./DepositionsComponent"
import { dataDepositions } from "./data/DepositionsData"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css/pagination"
import { Pagination, A11y, Navigation } from 'swiper';
import 'swiper/css'
import { useEffect, useState } from 'react';

export default function DepositionsShowList(): JSX.Element {
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect((): void => {
    setMounted(true);
  }, []);

  return (
    <>
      {mounted && (
        <Swiper
          modules={[Pagination, A11y, Navigation]}
          navigation
          spaceBetween={16}
          slidesPerView={1.2}
          centeredSlides
          pagination={{ clickable: true }}
          loop={true}
          breakpoints={{
            1024: {
              spaceBetween: 16,
              slidesPerView: 3,
              navigation: {
                prevEl: '.teste-buttom-prev',
                nextEl: '.teste-buttom-next',
              },
              pagination: false,
            },
          }}
        >

          {dataDepositions.map((item) => {
            return (
              <div key={item.id}>
                <SwiperSlide>
                  <DepositionsComponent className='h-full' data={item} />
                </SwiperSlide>
              </div>
            )
          })}
        </Swiper>
      )}
    </>
  )
}