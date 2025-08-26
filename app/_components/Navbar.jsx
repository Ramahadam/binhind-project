"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
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
import { useGetServicesQuery } from "../_services/binhindApi";

const navItems = [
  { href: "/about-us", label: "About Us" },
  {
    href: "/our-services",
    label: "Services",
    subItems: [
      {
        href: "/our-services/legal-consultation",
        label: "Legal Consultation Services",
      },
      { href: "/our-services/defense", label: "… and Defense in All Cases" },
      {
        href: "/our-services/companies-institutions",
        label: "Services for Companies and Institutions",
      },
      {
        href: "/our-services/company-establishment",
        label: "Establishing National and Foreign Companies",
      },
      {
        href: "/our-services/foreign-investment",
        label: "Foreign Investment Services",
      },
      {
        href: "/our-services/banks-finance",
        label: "Banks and Financial Institutions",
      },
      { href: "/our-services/arbitration", label: "Arbitration" },
      {
        href: "/our-services/commercial-agencies",
        label: "Commercial Agencies",
      },
      { href: "/our-services/contracts", label: "Contracts" },
      {
        href: "/our-services/corporate-governance",
        label: "Corporate Governance Services",
      },
      {
        href: "/our-services/intellectual-property",
        label: "Intellectual Property",
      },
      { href: "/our-services/vision-2030", label: "Supporting Vision 2030" },
      { href: "/our-services/notarization", label: "Notarization" },
      { href: "/our-services/liquidation", label: "Companies Liquidation" },
      {
        href: "/our-services/restructuring",
        label: "Corporate Restructuring and Reorganization",
      },
      { href: "/our-services/estates", label: "Estates" },
      { href: "/our-services/insurance", label: "Insurance" },
      {
        href: "/our-services/internal-regulations",
        label: "Internal Regulations for Companies",
      },
      { href: "/our-services", label: "See More" },
    ],
  },
  { href: "/our-team", label: "Our Team" },
  { href: "/blog", label: "Blog" },
  { href: "/contact-us", label: "Contact Us" },
];

export default function Navbar() {
  const { data: services } = useGetServicesQuery();

  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  // console.log(services?.data);
  // BUG Multiple requests are getting fired when clicked on any items in navbar

  const menuRef = useRef(null);

  useEffect(() => {
    function handleOusideClick(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setServicesOpen(false);
        setMenuOpen(false);
      }
    }

    document.addEventListener("click", handleOusideClick);

    return () => document.removeEventListener("click", handleOusideClick);
  }, [setServicesOpen]);

  return (
    <header className=" bg-primary  px-2 py-1 text-white" ref={menuRef}>
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
          menuRef={menuRef}
          services={services?.data}
        />

        {/* Mobile menu button */}
        <MenuButton
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
          menuRef={menuRef}
        />
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
