"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Image from "next/image";

const SwiperComponent = () => {
  return (
    <Swiper
      loop={true}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      pagination={{ clickable: true }}
    >
      <SwiperSlide>
        <div className=" relative flex h-full w-full items-center justify-center gap-4">
          <Image
            src="/images/aula-1.webp"
            alt="Imagen del aula 1"
            fill
            className="object-fill"
          />
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="flex h-full w-full items-center justify-center gap-4">
          <Image
            src="/images/aula-2.png"
            alt="Imagen del aula 2"
            fill
            className="object-fill"
          />
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="flex h-full w-full items-center justify-center gap-4">
          <Image
            src="/images/aula-3.jpg"
            alt="Imagen del aula 3"
            fill
            className="object-fill"
          />
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default SwiperComponent;
