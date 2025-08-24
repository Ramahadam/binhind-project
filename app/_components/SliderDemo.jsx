"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

export default function SliderDemo({ data, render }) {
  return (
    <div className="relative flex items-center justify-center h-full">
      <div className=" relative"></div>
      <Swiper
        direction="horizontal" // slides move horizontally
        modules={[Navigation, Pagination]}
        navigation={{
          prevEl: ".custom-prev-heroPage",
          nextEl: ".custom-next-heroPage",
        }}
        pagination={{
          clickable: true,
          type: "bullets",
          el: ".swiper-pagination-vertical",
        }}
        className="md:max-w-[80rem] h-full max-w-screen "
      >
        {data?.map(render)}
      </Swiper>

      {/* Vertical Dots */}
      <div className="swiper-pagination-vertical absolute  md:!-left-10 md:mt-15  flex md:flex-col justify-center md:!space-y-3 space-x-2 " />

      {/* Arrows OUTSIDE Swiper */}
      <button className="custom-prev-heroPage absolute md:-left-18 left-0 md:top-[22rem]  z-50 p-3 bg-transparent cursor-pointer ">
        <ChevronLeftIcon className="md:h-12 h-8 text-white" />
      </button>
      <button className="custom-next-heroPage absolute md:-right-18  right-0 md:top-[22rem]  z-50 p-3  bg-transparent cursor-pointer">
        <ChevronRightIcon className="md:h-12 h-8 text-white" />
      </button>
    </div>
  );
}
