"use client";
import { use } from "react";
import { useParams, useSearchParams } from "next/navigation";
import Link from "next/link";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { useGetServiceByIdQuery } from "@/app/_services/binhindApi";
import { useRouter } from "next/navigation";

export default function Service({ params }) {
  const searchParams = useSearchParams();
  const router = useRouter();

  const id = searchParams.get("id");

  const { data: service } = useGetServiceByIdQuery(id, { suspense: true });

  return (
    <section className="bg-[url(/bitmap.png)] bg-cover object-cover">
      <div className="max-w-7xl mx-auto ">
        <button
          onClick={router.back}
          href="#"
          className="flex items-center text-primary mt-4 bg-transparent cursor-pointer"
        >
          <MdKeyboardArrowLeft className="text-3xl" />
          <span className="text-p16">Back</span>
        </button>

        <header className="mt-[5rem]">
          <h2 className="section-header">{service?.data?.title}</h2>
          <p className="section-intro">{service?.data?.description}</p>
        </header>

        <article>
          {service?.data?.article?.map((section) => (
            <div key={section.id}>
              <h3 className="my-8">{section?.article_header}</h3>
              <div className="border-l-4 border-lightGray md:max-w-[58rem]">
                <div className="list-disc relative before:h-3 before:w-3 before:bg-primary before:absolute before:left-4 before:top-[6px]">
                  <div className=" md:ml-8">
                    {section?.article_description}
                    <ul className="list-none space-y-2 ">
                      {section?.article_items &&
                        section?.article_items.map((listItem) => (
                          <li key={listItem.id}>
                            <h4 className="my-6">
                              {/* Our advisory services about: */}
                            </h4>
                            <p className="before:content-['-'] before:mr-2 before:inline-block">
                              {listItem.item}
                            </p>
                          </li>
                        ))}{" "}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </article>

        <footer className="mt-[5rem]">
          <p>{service?.data?.service_footer_text}</p>
        </footer>
      </div>
    </section>
  );
}
