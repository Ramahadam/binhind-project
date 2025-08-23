"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { FaWhatsapp } from "react-icons/fa";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

import { BsTelephone } from "react-icons/bs";
import { FaRegEnvelope } from "react-icons/fa6";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import required modules
import { Grid, Navigation } from "swiper/modules";
import Link from "next/link";
import Image from "next/image";

export default function App() {
  return (
    <div className="relative">
      <Swiper
        navigation={{
          prevEl: ".custom-prev",
          nextEl: ".custom-next",
        }}
        // slidesPerView={2}
        grid={{
          rows: 1,
        }}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Grid, Navigation]}
        className="mySwiper team-slider  h-80 w-[80%]"
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
        <SwiperSlide>
          <article className="text-center flex items-center flex-col gap-3">
            <figure>
              <Image src="/person.png" width={200} height={184} alt="person" />

              <figcaption>
                <p className="font-medium md:text-h22 text-primary my-1">
                  Name here
                </p>
                <p className="opacity-40 uppercase font-bold text-p14 tracking-wide">
                  Position here
                </p>
              </figcaption>
            </figure>

            <div className="flex items-center justify-center gap-3">
              <Link href="#">
                <FaWhatsapp />
              </Link>
              <Link href="#">
                <BsTelephone />
              </Link>
              <Link href="#">
                <FaRegEnvelope />
              </Link>
            </div>
          </article>
        </SwiperSlide>
        <SwiperSlide>
          <article className="text-center flex items-center flex-col gap-3">
            <figure>
              <Image src="/person.png" width={200} height={184} alt="person" />

              <figcaption>
                <p className="font-medium md:text-h22 text-primary my-1">
                  Name here
                </p>
                <p className="opacity-40 uppercase font-bold text-p14 tracking-wide">
                  Position here
                </p>
              </figcaption>
            </figure>

            <div className="flex items-center justify-center gap-3">
              <Link href="#">
                <FaWhatsapp />
              </Link>
              <Link href="#">
                <BsTelephone />
              </Link>
              <Link href="#">
                <FaRegEnvelope />
              </Link>
            </div>
          </article>
        </SwiperSlide>
        <SwiperSlide>
          <article className="text-center flex items-center flex-col gap-3">
            <figure>
              <Image src="/person.png" width={200} height={184} alt="person" />

              <figcaption>
                <p className="font-medium md:text-h22 text-primary my-1">
                  Name here
                </p>
                <p className="opacity-40 uppercase font-bold text-p14 tracking-wide">
                  Position here
                </p>
              </figcaption>
            </figure>

            <div className="flex items-center justify-center gap-3">
              <Link href="#">
                <FaWhatsapp />
              </Link>
              <Link href="#">
                <BsTelephone />
              </Link>
              <Link href="#">
                <FaRegEnvelope />
              </Link>
            </div>
          </article>
        </SwiperSlide>
      </Swiper>

      {/* Arrows OUTSIDE Swiper */}
      <button className="custom-prev absolute md:-left-18 left-0 top-1/3 -translate-y-1/2 z-50 p-3 bg-transparent cursor-pointer ">
        <MdKeyboardArrowLeft className="h-8 w-8" />
      </button>
      <button className="custom-next absolute md:-right-18 right-0 top-1/3 -translate-y-1/2 z-50 p-3  bg-transparent cursor-pointer">
        <MdKeyboardArrowRight className="h-8 w-8" />
      </button>
    </div>
  );
}
