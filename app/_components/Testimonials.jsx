"use client";
import Image from "next/image";
import {
  useGetClientPagesQuery,
  useGetClientsQuery,
} from "../_services/binhindApi";
import { constructImageUrl, extractSectionText } from "../_utils/helper";
import SliderGridTesimonials from "./SliderGridTesimonials";
import { SwiperSlide } from "swiper/react";
import Spinner from "./Spinner";
import { Suspense } from "react";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import Message from "./Message";
import { useSelector } from "react-redux";

// Render Props Pattern
const render = (client) => (
  <SwiperSlide key={client.documentId}>
    <article className="text-white font-regular mt-12">
      <figure className="flex gap-8 flex-wrap  md:flex-nowrap">
        {client?.image[0]?.url && (
          <Image
            src={constructImageUrl(client.image[0].url)}
            alt="person"
            width={370}
            height={370}
            className=""
          />
        )}

        <figcaption className="grid justify-between">
          <blockquote className="md:text-p24">
            <p className="ext-ellipsis opacity-70">
              &quot;{client.testimonial}&quot;
            </p>
          </blockquote>
          <footer className="self-end">
            <p className="font-semibold text-p18">{client.name}</p>
            <p className="font-regular text-p16 opacity-70">
              {client.position}
            </p>
          </footer>
        </figcaption>
      </figure>
    </article>
  </SwiperSlide>
);

function TestimonialsContent() {
  // Fetch client header text & intro text
  const lang = useSelector((state) => state.language.lang);
  const { data: clientsPages } = useGetClientPagesQuery(lang, {
    suspense: true,
  });

  // Fetch clients testimonials (qoute, image, name, company/position)
  const { data: clients } = useGetClientsQuery(lang, {
    suspense: true,
  });

  // Extract header and intro text
  const { sectionHeaderText, sectionIntroText } =
    extractSectionText(clientsPages);

  return (
    <section className="bg-primary md:py-[10rem] py-[4rem] px-4 md:px-0">
      <article className="md:w-7xl mx-auto">
        <header className="text-center md:text-left">
          <h2 className="text-white md:text-h42 md:font-bold text-h40">
            {sectionHeaderText}
          </h2>
          <p className="text-white font-regular md:text-balance max-w-[36rem] opacity-70">
            {sectionIntroText}
          </p>
        </header>

        {/* Slider component for testimonials */}

        <SliderGridTesimonials data={clients?.data} render={render} />
      </article>
    </section>
  );
}

function Testimonials() {
  return (
    <ErrorBoundary
      fallback={
        <Message msgType="error" message="Coud not load testimonilas" />
      }
    >
      <Suspense fallback={<Spinner />}>
        <TestimonialsContent />
      </Suspense>
    </ErrorBoundary>
  );
}

export default Testimonials;
