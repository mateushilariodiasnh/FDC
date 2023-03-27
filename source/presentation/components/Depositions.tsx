import DepositionsComponent from "./DepositionsComponent"
import { dataDepositions } from "./data/DepositionsData"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css/pagination"
import { Pagination, A11y, Navigation } from 'swiper';
import 'swiper/css'
import { useEffect, useState } from 'react';

export default function List(): JSX.Element {
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
          spaceBetween={0}
          centeredSlides= {false}
          slidesPerView={1}
          pagination={{ clickable: true }}
          loop={true}
          breakpoints={{
            1024: {
              spaceBetween: 20,
              slidesPerView: 3,
              centeredSlides: true,
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
              <div className="bullets" key={item.id}>
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