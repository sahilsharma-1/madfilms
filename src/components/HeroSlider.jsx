"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

import Image from "next/image";

export default function HeroSlider() {
  return (
    <Swiper
      modules={[Autoplay]}
      autoplay={{ delay: 5000 }}
      loop={true}
      className="h-screen"
    >
      <SwiperSlide>
        <Image
          src="/images/hero.jpg"
          fill
          className="object-cover"
          alt=""
        />
      </SwiperSlide>

      <SwiperSlide>
        <Image
          src="/images/hero2.jpg"
          fill
          className="object-cover"
          alt=""
        />
      </SwiperSlide>

      <SwiperSlide>
        <Image
          src="/images/hero3.jpg"
          fill
          className="object-cover"
          alt=""
        />
      </SwiperSlide>
    </Swiper>
  );
}