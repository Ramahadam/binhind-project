"use client";
import Image from "next/image";
import {
  useGetClientPagesQuery,
  useGetClientsQuery,
  useGetHeroItemsQuery,
} from "../_services/binhindApi";
import { constructImageUrl, extractSectionText } from "../_utils/helper";
import SliderDemo from "./SliderDemo";
import { SwiperSlide } from "swiper/react";
import Spinner from "./Spinner";
import { Suspense } from "react";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import Message from "./Message";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
let trans;

function HeroSectionContent() {
  // Fetch clients testimonials (qoute, image, name, company/position)
  const lang = useSelector((state) => state.language.lang);
  const { data: heroItems } = useGetHeroItemsQuery(lang, {
    suspense: true,
  });

  // Render Props Pattern
  const render = (hero) => (
    <SwiperSlide key={hero.documentId}>
      <div
        className={`h-full flex items-center flex-col md:flex-row justify-center text-white p-8 text-center md:text-left ${
          lang === "ar-SA" && "md:text-right"
        }`}
      >
        <div className="md:order-1 order-2">
          <h1 className={`text-h40 font-bold text-white mb-4 `}>
            {hero?.hero_item_title}
          </h1>

          <p className="md:text-p18  md:mb-[4.3rem] md:max-w-[80%]  mx-auto md:mx-0">
            {hero?.text}
          </p>

          <button className="text-p18 px-4 py-2 rounded-md ">
            {trans("readMore")}
          </button>
        </div>
        {hero?.image[0]?.url && (
          <Image
            src={constructImageUrl(hero.image[0].url)}
            alt="person"
            width={400}
            height={500}
            className="w-48 md:w-auto md:order-2 order-1"
          />
        )}
      </div>
    </SwiperSlide>
  );

  //   console.log(heroItems.data);

  return <SliderDemo data={heroItems?.data} render={render} />;
}

function HeroSection() {
  const { t } = useTranslation();
  trans = t;
  return (
    <ErrorBoundary
      fallback={
        <Message msgType="error" message="Coud not load testimonilas" />
      }
    >
      <Suspense fallback={<Spinner />}>
        <HeroSectionContent />
      </Suspense>
    </ErrorBoundary>
  );
}

export default HeroSection;
