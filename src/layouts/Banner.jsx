import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination'; 
import 'swiper/css/navigation';
import { Navigation, Autoplay, Pagination, EffectFade } from 'swiper/modules';
import 'swiper/css/effect-fade';

const Banner = () => {
  const slides = [
    { image: "/images/ajadi_banner.jpg" },
    { image: "/images/banner-02.jpg" },
  ];

  return (
    <section className="relative w-full bg-white">
      <div className="relative group mx-auto w-full">
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          loop={true}
          effect={'fade'} 
          modules={[Navigation, Pagination, Autoplay, EffectFade]}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          pagination={{ 
            clickable: true,
            el: '.custom-pagination' 
          }}
          className="w-full banner-swiper"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              {/* RESPONSIVE HEIGHT LOGIC:
                - h-[200px]: Small mobile phones
                - sm:h-[300px]: Large phones
                - md:h-[400px]: Tablets
                - lg:h-[500px]: Standard Desktops
                - xl:h-[600px]: Large Monitors
              */}
              <div className="relative w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px] overflow-hidden">
                <img 
                  src={slide.image} 
                  alt={`Banner ${index + 1}`} 
                  // 'object-cover' ensures the container is filled
                  // 'object-center' keeps the middle of the image visible
                  className="w-full h-full object-cover object-center animate-slow-zoom" 
                />
                
                {/* Optional: Subtle Overlay to make arrows/text pop */}
                <div className="absolute inset-0 bg-black/10"></div>
              </div>
            </SwiperSlide>
          ))}
          
          {/* Responsive Navigation Arrows - Hidden on small mobile for cleaner UI */}
          <div className="swiper-button-prev !hidden md:!flex !opacity-0 group-hover:!opacity-100 transition-opacity duration-300"></div>
          <div className="swiper-button-next !hidden md:!flex !opacity-0 group-hover:!opacity-100 transition-opacity duration-300"></div>
        </Swiper>
      </div>

      {/* Pagination Container - Spaced consistently */}
      <div className="custom-pagination flex justify-center py-4 h-2"></div>

      <style jsx global>{`
        /* arrow styling */
        .banner-swiper .swiper-button-next,
        .banner-swiper .swiper-button-prev {
          color: white !important;
          background: rgba(0, 0, 0, 0.3);
          width: 50px;
          height: 50px;
          border-radius: 50%;
          backdrop-filter: blur(4px);
        }
        
        .banner-swiper .swiper-button-next:after,
        .banner-swiper .swiper-button-prev:after {
          font-size: 1.1rem !important;
          font-weight: 900;
        }

        /* Responsive Dot Styling */
        .custom-pagination .swiper-pagination-bullet {
          background: #d1d5db;
          opacity: 1;
          width: 8px;
          height: 8px;
          margin: 0 5px !important;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        
        .custom-pagination .swiper-pagination-bullet-active {
          background: #dc2626 !important; 
          width: 28px;
          border-radius: 10px;
        }

        @keyframes slow-zoom {
          0% { transform: scale(1); }
          100% { transform: scale(1.1); }
        }
        
        .animate-slow-zoom {
          animation: slow-zoom 12s infinite alternate ease-in-out;
        }

        /* Adjustments for very small screens */
        @media (max-width: 640px) {
          .custom-pagination .swiper-pagination-bullet {
             width: 6px;
             height: 6px;
          }
          .custom-pagination .swiper-pagination-bullet-active {
             width: 18px;
          }
        }
      `}</style>
    </section>
  );
}

export default Banner;