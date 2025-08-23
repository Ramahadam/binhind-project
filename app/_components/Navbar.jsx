"use client";

import Link from "next/link";
import { useState } from "react";
import {
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import DesktopMenu from "./DesktopMenu";
import MenuButton from "./MenuButton";
import MobileMenu from "./MobileMenu";

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
    <header className=" bg-primary  px-2 py-1 text-white">
      <div className="max-w-[90rem] mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="">
          <Image src="./logo.svg" alt="" width={120} height={120} />
        </Link>

        {/* Desktop nav */}
        <DesktopMenu
          navItems={navItems}
          servicesOpen={servicesOpen}
          setServicesOpen={setServicesOpen}
        />

        {/* Mobile menu button */}
        <MenuButton menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      </div>

      {/* Mobile nav dropdown */}
      {menuOpen && (
        <MobileMenu
          navItems={navItems}
          servicesOpen={servicesOpen}
          setServicesOpen={setServicesOpen}
        />
      )}
    </header>
  );
}
