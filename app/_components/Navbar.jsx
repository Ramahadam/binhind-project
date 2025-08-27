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
import { useSelector } from "react-redux";

const navItems = [
  { href: "/about-us", label: "aboutUs" },
  {
    href: "/our-services",
    label: "services",
  },
  { href: "/our-team", label: "ourTeam" },
  { href: "/blog", label: "blog" },
  { href: "/contact-us", label: "contactUs" },
];

export default function Navbar() {
  const lang = useSelector((state) => state.language.lang);
  const { data: services } = useGetServicesQuery(lang);

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

    document.addEventListener("mousemove", handleOusideClick);

    return () => document.removeEventListener("mousemove", handleOusideClick);
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
          services={services?.data}
        />
      )}
    </header>
  );
}
