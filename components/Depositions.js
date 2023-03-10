import Depoimento from "./Depoimentos"
import depositions from "./DepositionsData"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css/pagination"
import { Pagination, A11y, Navigation } from 'swiper';
import 'swiper/css'
import { useEffect, useState } from 'react';

export default function List() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (

    <>
      {mounted && (
        <Swiper
          modules={[Pagination, A11y, Navigation]}
          navigation
          spaceBetween={0}
          slidesPerView={1}
          pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
          loop={true}
          breakpoints={{
            1024: {
              slidesPerView: 3,
              navigation: {
                prevEl: '.teste-buttom-prev',
                nextEl: '.teste-buttom-next',
              },
              pagination: false,
            },
          }}

        >
          {depositions.map((item) => {
            return (
              <div className="bullets">
                <SwiperSlide key={item.id}>
                  <Depoimento data={item} />
                </SwiperSlide>
              </div>
            )
          })}
        </Swiper>
      )}
    </>

  )
}