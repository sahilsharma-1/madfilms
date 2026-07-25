"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";

import "swiper/css";

export default function HeroSlider() {
  return (
    <Swiper
      modules={[Autoplay]}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      loop={true}
      className="h-screen"
    >
      {/* Slide 1 */}
      <SwiperSlide>
        <div className="relative h-screen w-full">
          {/* Desktop */}
          <Image
            src="/images/hero.jpg"
            alt="Hero"
            fill
            priority
            className="hidden object-cover md:block"
          />

          {/* Mobile */}
          <Image
            src="/images/heromobile.jpg"
            alt="Hero Mobile"
            fill
            priority
            className="block object-cover md:hidden"
          />
        </div>
      </SwiperSlide>

      {/* Slide 2 */}
      <SwiperSlide>
        <div className="relative h-screen w-full">
          {/* Desktop */}
          <Image
            src="/images/hero2.jpg"
            alt="Hero 2"
            fill
            className="hidden object-cover md:block"
          />

          {/* Mobile */}
          <Image
            src="/images/heromobile.jpg"
            alt="Hero Mobile 2"
            fill
            className="block object-cover md:hidden"
          />
        </div>
      </SwiperSlide>

      {/* Slide 3 */}
      <SwiperSlide>
        <div className="relative h-screen w-full">
          {/* Desktop */}
          <Image
            src="/images/hero3.jpg"
            alt="Hero 3"
            fill
            className="hidden object-cover md:block"
          />

          {/* Mobile */}
          <Image
            src="/images/heromobile3.jpg"
            alt="Heromobile.jpg"
            fill
            className="block object-cover md:hidden"
          />
        </div>
      </SwiperSlide>
    </Swiper>
  );
}