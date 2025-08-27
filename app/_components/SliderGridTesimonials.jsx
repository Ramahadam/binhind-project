"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import required modules
import { Grid, Navigation } from "swiper/modules";
import Link from "next/link";
import Image from "next/image";
import { useSelector } from "react-redux";

export default function SliderGridTesimonials({ data, render }) {
  const lang = useSelector((state) => state.language.lang);
  const langDir = lang === "ar-SA" ? "RTL" : "LTR";

  return (
    <div className="relative">
      <Swiper
        navigation={{
          prevEl: ".custom-prev-testimonials",
          nextEl: ".custom-next-testimonials",
        }}
        // slidesPerView={2}
        key={langDir}
        dir={langDir}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation]}
        className="mySwiper"
      >
        {data?.map(render)}
      </Swiper>

      {/* Arrows OUTSIDE Swiper */}
      <button
        className={`custom-prev-testimonials absolute bg-white rounded-full z-50 p-3 cursor-pointer  ${
          langDir === "RTL" ? "left-0" : "right-20"
        } `}
      >
        <FaArrowLeft className="md:h-8 md:w-8 h-4" />
      </button>
      <button
        className={`custom-next-testimonials bg-white absolute rounded-full  z-50 p-3  cursor-pointer  ${
          langDir === "RTL" ? "left-20" : "right-0"
        } `}
      >
        <FaArrowRight className="md:h-8 md:w-8 h-4" />
      </button>
    </div>
  );
}
