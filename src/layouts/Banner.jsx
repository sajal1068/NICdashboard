import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const Banner = () => {
  return (
    <>
      <Swiper
      spaceBetween={30}
      slidesPerView={1}
      loop={true}
      pagination={{ clickable: true }}
      className="w-full flex mx-auto"
    >
      <SwiperSlide>
        <img src="/images/ajadi_banner.jpg" alt="Slide 1" className="w-full rounded" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/images/ajadi_banner.jpg" alt="Slide 2" className="w-full rounded" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/images/ajadi_banner.jpg" alt="Slide 3" className="w-full rounded" />
      </SwiperSlide>
    </Swiper>
    </>
  );
}

export default Banner;
