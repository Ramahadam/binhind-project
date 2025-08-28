import { ChevronDownIcon } from "@heroicons/react/24/outline";
import Button from "../_components/Button";
import Link from "next/link";

// Helper to extract text from Strapi rich text blocks
export const extractSectionText = (data) => {
  const sectionHeaderText = data?.data?.section_header;

  const sectionIntroText =
    data?.data?.section_intro
      ?.map((block) => block.children.map((c) => c.text).join(""))
      .join("\n") || "";

  return { sectionHeaderText, sectionIntroText };
};

// export function extractHeaderFromStrapi(data) {
//   return data?.data.client_section_header;
// }

export function constructImageUrl(imageName) {
  return `${process.env.NEXT_PUBLIC_DEV_HOST}:${process.env.NEXT_PUBLIC_PORT}${imageName}`;
}

/**
 * getPageNumbers Algorithm
 * Source: https://gist.github.com/kottenator/9d936eb3e4e3c3e02598
 * Author: kottenator
 */

export function getPageNumbers(currentPage, pageCount) {
  let delta = 2,
    left = currentPage - delta,
    right = currentPage + delta + 1,
    range = [],
    rangeWithDots = [],
    l;

  for (let i = 1; i <= pageCount; i++) {
    if (i == 1 || i == pageCount || (i >= left && i < right)) {
      range.push(i);
    }
  }

  for (let i of range) {
    if (l) {
      if (i - l === 2) {
        rangeWithDots.push(l + 1);
      } else if (i - l !== 1) {
        rangeWithDots.push("...");
      }
    }
    rangeWithDots.push(i);
    l = i;
  }

  return rangeWithDots;
}

export function renderNavbarLinks(
  navItems,
  servicesOpen,
  setServicesOpen,
  services,
  t,
  isMobileNav = false
) {
  // Conditional rendering for services
  const servicesNavList =
    isMobileNav === false ? (
      <div className="fixed rounded-b-xl left-1/2 mt-6 -translate-x-1/2 pb-9 max-w-[90rem] w-screen grid grid-cols-4 bg-primary text-white shadow-lg z-50">
        {services?.map((service) => (
          <Link
            key={service.id}
            href={`/our-services/${service.slug}?id=${service.documentId}`}
            onClick={() => setServicesOpen(false)}
            className="block px-6 py-3 hover:bg-primary hover:opacity-40 transition"
          >
            {service.title}
          </Link>
        ))}
      </div>
    ) : (
      <div className="p-2 flex flex-col space-y-1 overflow-scroll max-h-40 bg-red-50 text-primary w-full">
        {services?.map((service, idx) => (
          <Link
            key={service.id}
            href={`/our-services/${service.slug}?id=${service.documentId}`}
            className="py-1 hover:text-primary"
            onClick={() => setMenuOpen(false)}
          >
            {service.title}
          </Link>
        ))}
      </div>
    );

  return navItems.map((item) =>
    item.label === "services" ? (
      <div key={item.href} className="group relative">
        <Button
          variant="primary"
          size="md"
          fullWidth
          icon={
            <ChevronDownIcon
              className={`h-4 w-4 ${servicesOpen ? "rotate-180" : ""}`}
            />
          }
          iconPosition="right"
          onClick={() => setServicesOpen(!servicesOpen)}
        >
          {t(item.label)}
        </Button>

        {servicesOpen && servicesNavList}
      </div>
    ) : (
      <Link
        key={item.href}
        href={item.href}
        onClick={() => setServicesOpen(false)}
        className="text-paragraph hover:text-lightGray transition"
      >
        {t(item.label)}
      </Link>
    )
  );
}
