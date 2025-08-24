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

// Render Props Pattern
const render = (client) => (
  <SwiperSlide key={client.documentId}>
    <div className="h-full flex items-center flex-col md:flex-row justify-center text-white p-8 text-center md:text-left ">
      <div className="md:order-1 order-2">
        <h1 className="text-h40 font-bold text-white mb-4 ">
          {client?.hero_item_title}
        </h1>

        <p className="md:text-p18  md:mb-[4.3rem] md:max-w-[80%]  mx-auto md:mx-0">
          {client?.text}
        </p>

        <button className="text-p18 px-4 py-2 rounded-md ">Read More</button>
      </div>
      {client?.image[0]?.url && (
        <Image
          src={constructImageUrl(client.image[0].url)}
          alt="person"
          width={400}
          height={500}
          className="w-48 md:w-auto md:order-2 order-1"
        />
      )}
    </div>
  </SwiperSlide>
);

function HeroSectionContent() {
  // Fetch clients testimonials (qoute, image, name, company/position)
  const { data: heroItems } = useGetHeroItemsQuery(undefined, {
    suspense: true,
  });

  //   console.log(heroItems.data);

  return <SliderDemo data={heroItems?.data} render={render} />;
}

function HeroSection() {
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
