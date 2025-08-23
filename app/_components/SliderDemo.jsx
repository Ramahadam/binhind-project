"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Image from "next/image";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

export default function VerticalDotsCarousel() {
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
        <SwiperSlide>
          <div className="h-full flex items-center flex-col md:flex-row justify-center text-white p-8 text-center md:text-left ">
            <div className="md:order-1 order-2">
              <h1 className="text-h40 font-bold text-white mb-4 ">
                Lorem Ipsum {" "}
              </h1>

              <p className="md:text-p18  md:mb-[4.3rem] md:max-w-[80%]  mx-auto md:mx-0">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s{" "}
              </p>

              <button className="text-p18 px-4 py-2 rounded-md ">
                Read More
              </button>
            </div>
            <Image
              src="/person.png"
              alt=""
              width={400}
              height={500}
              className="w-48 md:w-auto md:order-2 order-1"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-full flex items-center flex-col md:flex-row justify-center text-white p-8 text-center md:text-left ">
            <div className="md:order-1 order-2">
              <h1 className="text-h40 font-bold text-white mb-4 ">
                Lorem Ipsum {" "}
              </h1>

              <p className="md:text-p18  md:mb-[4.3rem] mb-3 md:max-w-[80%]  mx-auto md:mx-0">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s{" "}
              </p>

              <button className="text-p18 px-4 py-2 rounded-md ">
                Read More
              </button>
            </div>
            <Image
              src="/person.png"
              alt=""
              width={400}
              height={500}
              className="w-48 md:w-auto md:order-2 order-1"
            />
          </div>
        </SwiperSlide>
      </Swiper>

      {/* Vertical Dots */}
      <div className="swiper-pagination-vertical absolute   md:!-left-10 md:mt-15 h-full flex md:flex-col justify-center md:!space-y-3 space-x-2 " />

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
