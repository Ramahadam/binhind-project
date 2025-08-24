"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper } from "swiper/react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import required modules
import { Grid, Navigation } from "swiper/modules";

export default function SliderGrid({ data, render }) {
  return (
    <div className="relative">
      <Swiper
        navigation={{
          prevEl: ".custom-prev-ourteam",
          nextEl: ".custom-next-ourteam",
        }}
        grid={{
          rows: 1,
        }}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        modules={[Grid, Navigation]}
        className="mySwiper team-slider h-80 w-[80%]"
        breakpoints={{
          375: {
            // from 768px and up (tablets + desktops)
            slidesPerView: 2,
          },
          768: {
            // from 768px and up (tablets + desktops)
            slidesPerView: 3,
          },
        }}
      >
        {data?.map(render)}
      </Swiper>

      {/* Arrows OUTSIDE Swiper */}
      <button className="custom-prev-ourteam absolute md:-left-2 left-0 top-1/3 -translate-y-1/2 z-50 p-3 bg-transparent cursor-pointer ">
        <MdKeyboardArrowLeft className="h-8 w-8" />
      </button>
      <button className="custom-next-ourteam absolute md:-right-2 right-0 top-1/3 -translate-y-1/2 z-50 p-3  bg-transparent cursor-pointer">
        <MdKeyboardArrowRight className="h-8 w-8" />
      </button>
    </div>
  );
}
