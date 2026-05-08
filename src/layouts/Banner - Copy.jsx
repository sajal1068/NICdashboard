import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination'; 
import { Navigation , Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css/navigation';

const Banner = () => {
  return (
    <>
    <Swiper
  spaceBetween={30}
  slidesPerView={1}
  loop={true}
  // Add the modules prop to enable the new functionalities
  modules={[Navigation, Pagination, Autoplay]}
  // Enable and configure the autoplay behavior
  autoplay={{
    delay: 5000, // Time in milliseconds between slides
    disableOnInteraction: false, // Prevents autoplay from stopping when the user interacts with the carousel
  }}
  // Add the navigation prop to enable next/previous arrows
  navigation={true}
  // Configure pagination and make it clickable
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
