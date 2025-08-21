// components/Navbar.tsx
"use client";

import Link from "next/link";
import { useState } from "react";
import {
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";

const navItems = [
  { href: "/about-us", label: "About Us" },
  {
    href: "/services",
    label: "Services",
    subItems: [
      {
        href: "/services/legal-consultation",
        label: "Legal Consultation Services",
      },
      { href: "/services/defense", label: "… and Defense in All Cases" },
      {
        href: "/services/companies-institutions",
        label: "Services for Companies and Institutions",
      },
      {
        href: "/services/company-establishment",
        label: "Establishing National and Foreign Companies",
      },
      {
        href: "/services/foreign-investment",
        label: "Foreign Investment Services",
      },
      {
        href: "/services/banks-finance",
        label: "Banks and Financial Institutions",
      },
      { href: "/services/arbitration", label: "Arbitration" },
      { href: "/services/commercial-agencies", label: "Commercial Agencies" },
      { href: "/services/contracts", label: "Contracts" },
      {
        href: "/services/corporate-governance",
        label: "Corporate Governance Services",
      },
      {
        href: "/services/intellectual-property",
        label: "Intellectual Property",
      },
      { href: "/services/vision-2030", label: "Supporting Vision 2030" },
      { href: "/services/notarization", label: "Notarization" },
      { href: "/services/liquidation", label: "Companies Liquidation" },
      {
        href: "/services/restructuring",
        label: "Corporate Restructuring and Reorganization",
      },
      { href: "/services/estates", label: "Estates" },
      { href: "/services/insurance", label: "Insurance" },
      {
        href: "/services/internal-regulations",
        label: "Internal Regulations for Companies",
      },
      { href: "/services", label: "See More" },
    ],
  },
  { href: "/our-team", label: "Our Team" },
  { href: "/blog", label: "Blog" },
  { href: "/contact-us", label: "Contact Us" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="bg-primary border-b border-gray-200 px-2 py-1 text-white">
      <div className="max-w-[90rem] mx-auto flex items-center justify-between">
        <Link href="/" className="">
          <Image src="./logo.svg" alt="" width={120} height={120} />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex space-x-6 relative">
          {navItems.map((item) =>
            item.subItems ? (
              <div key={item.href} className="group">
                <button
                  className="flex items-center transition bg-transparent text-white"
                  onClick={() => setServicesOpen(!servicesOpen)}
                >
                  {item.label}{" "}
                  {servicesOpen ? (
                    <ChevronUpIcon className="ml-1 h-4 w-4" />
                  ) : (
                    <ChevronDownIcon className="ml-1 h-4 w-4" />
                  )}
                </button>

                {/* Full width dropdown */}
                {servicesOpen && (
                  <div className="fixed rounded-b-xl  left-1/2 mt-6 -translate-x-1/2 pb-9  max-w-[90rem] w-screen grid grid-cols-4 bg-primary text-white shadow-lg z-50 justify-center items-center ">
                    {item.subItems.map((sub) => (
                      <Link
                        key={sub.href}
                        href={sub.href}
                        className="block px-6 py-3 hover:bg-primary hover:opacity-40 transition"
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="text-paragraph hover:text-primary transition"
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        {/* Mobile menu button */}
        <span
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-paragraph h-8 w-8 text-white"
          aria-label="Toggle Menu"
        >
          {menuOpen ? <XMarkIcon /> : <Bars3Icon />}
        </span>
      </div>

      {/* Mobile nav dropdown */}
      {menuOpen && (
        <nav className="md:hidden mt-2 flex flex-col space-y-2 px-4 relative bg-primary py-4 w-full h-dvh">
          {navItems.map((item) =>
            item.subItems ? (
              <div key={item.href}>
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className="flex justify-between items-center w-full py-2 text-left"
                >
                  {item.label}
                  <ChevronDownIcon
                    className={`h-4 w-4 transition-transform ${
                      servicesOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {servicesOpen && (
                  <div className="ml-4 flex flex-col space-y-1">
                    {item.subItems.map((sub) => (
                      <Link
                        key={sub.href}
                        href={sub.href}
                        className="py-1 hover:text-primary"
                        onClick={() => setMenuOpen(false)}
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="py-1 hover:text-primary"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            )
          )}
        </nav>
      )}
    </header>
  );
}
