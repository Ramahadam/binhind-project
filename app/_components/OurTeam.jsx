"use client";

import SliderGrid from "./SliderGrid";

import Image from "next/image";
import {
  useGetOurTeamsQuery,
  useGetTeamMembersQuery,
} from "../_services/binhindApi";
import { constructImageUrl, extractSectionText } from "../_utils/helper";
import { SwiperSlide } from "swiper/react";
import Spinner from "./Spinner";
import { Suspense } from "react";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import Message from "./Message";
import { FaWhatsapp } from "react-icons/fa";
import { BsTelephone } from "react-icons/bs";
import { FaRegEnvelope } from "react-icons/fa6";
import Link from "next/link";
import { useSelector } from "react-redux";

// Render Props Pattern
const render = (team) => (
  <SwiperSlide key={team.documentId}>
    <article className="text-center flex items-center flex-col gap-3">
      <figure>
        {team?.image[0]?.url && (
          <Image
            src={constructImageUrl(team.image[0].url)}
            width={200}
            height={184}
            alt="person"
          />
        )}
        <figcaption>
          <p className="font-medium md:text-h22 text-primary my-1">
            {team.name}
          </p>
          <p className="opacity-40 uppercase font-bold text-p14 tracking-wide">
            {team.position}
          </p>
        </figcaption>
      </figure>

      <div className="flex items-center justify-center gap-3">
        <Link href={team.whatsapp_number}>
          <FaWhatsapp />
        </Link>
        <Link href={team.mobile_number}>
          <BsTelephone />
        </Link>
        <Link href={team.email}>
          <FaRegEnvelope />
        </Link>
      </div>
    </article>
  </SwiperSlide>
);

function OurTeamContent() {
  // Fetch client header text & intro text
  const lang = useSelector((state) => state.language.lang);
  const { data: ourTeamsPage } = useGetOurTeamsQuery(lang, {
    suspense: true,
  });

  // Fetch clients testimonials (qoute, image, name, company/position)
  const { data: ourTeams } = useGetTeamMembersQuery(lang, {
    suspense: true,
  });

  // Extract header and intro text
  const { sectionHeaderText, sectionIntroText } =
    extractSectionText(ourTeamsPage);

  return (
    <section className="bg-background h-[40rem] mt-[5rem] md:mt-[10rem] max-w-7xl mx-auto">
      <div className="wrapper ">
        <div className="text-center md:text-h42 text-h22 ">
          <h2 className="mb-4"> {sectionHeaderText}</h2>
          <p className="text-p16 md:text-18 text-foreground mb-12 w-[90%] md:w-[47rem] mx-auto">
            {sectionIntroText}
          </p>
        </div>
        <SliderGrid data={ourTeams?.data} render={render} />
      </div>
    </section>
  );
}

function OurTeam() {
  return (
    <ErrorBoundary
      fallback={
        <Message msgType="error" message="Coud not load testimonilas" />
      }
    >
      <Suspense fallback={<Spinner />}>
        <OurTeamContent />
      </Suspense>
    </ErrorBoundary>
  );
}

export default OurTeam;
