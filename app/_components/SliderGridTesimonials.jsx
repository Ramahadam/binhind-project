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

export default function SliderGridTesimonials({ data, render }) {
  return (
    <div className="relative">
      <Swiper
        navigation={{
          prevEl: ".custom-prev-testimonials",
          nextEl: ".custom-next-testimonials",
        }}
        // slidesPerView={2}

        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation]}
        className="mySwiper"
      >
        {data?.map(render)}
        {/* <article className="text-white font-regular mt-12">
            <figure className="flex gap-8 flex-wrap  md:flex-nowrap">
              <Image
                src="/person.png"
                alt="person"
                width={370}
                height={370}
                className=""
              />
              <figcaption className="grid justify-between">
                <blockquote className="md:text-p24">
                  <p className="ext-ellipsis opacity-70">
                    &quot;With the help of the hospitable staff of Al Safar and
                    Partners I was able to get my work done without any hassle.
                    The help I received helped me a great deal to overcome the
                    issues that I faced. I was always updated about my case and
                    my queries never went unanswered&quot;
                  </p>
                </blockquote>
                <footer className="self-end">
                  <p className="font-semibold text-p18">Mohammed Saif</p>
                  <p className="font-regular text-p16 opacity-70">
                    CEO/Company
                  </p>
                </footer>
              </figcaption>
            </figure>
          </article> */}
        {/* <SwiperSlide>
          <article className="text-white font-regular mt-12">
            <figure className="flex gap-8 flex-wrap  md:flex-nowrap">
              <Image
                src="/person.png"
                alt="person"
                width={370}
                height={370}
                className=""
              />
              <figcaption className="grid justify-between">
                <blockquote className="md:text-p24">
                  <p className="ext-ellipsis opacity-70">
                    &quot;With the help of the hospitable staff of Al Safar and
                    Partners I was able to get my work done without any hassle.
                    The help I received helped me a great deal to overcome the
                    issues that I faced. I was always updated about my case and
                    my queries never went unanswered&quot;
                  </p>
                </blockquote>
                <footer className="self-end">
                  <p className="font-semibold text-p18">Mohammed Saif</p>
                  <p className="font-regular text-p16 opacity-70">
                    CEO/Company
                  </p>
                </footer>
              </figcaption>
            </figure>
          </article>
        </SwiperSlide> */}
      </Swiper>

      {/* Arrows OUTSIDE Swiper */}
      <button className="custom-prev-testimonials absolute bg-white rounded-full right-20  z-50 p-3 cursor-pointer ">
        <FaArrowLeft className="md:h-8 md:w-8 h-4" />
      </button>
      <button className="custom-next-testimonials bg-white absolute rounded-full right-0  z-50 p-3  cursor-pointer">
        <FaArrowRight className="md:h-8 md:w-8 h-4" />
      </button>
    </div>
  );
}
