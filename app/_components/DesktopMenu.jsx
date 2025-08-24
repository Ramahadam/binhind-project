"use client";
import {
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import SearchInput from "./SearchInput";
import LanguageButton from "./LanguageButton";
import BookingButton from "./BookingButton";
import { useRef } from "react";

function DesktopMenu({ navItems, servicesOpen, setServicesOpen, menuRef }) {
  return (
    <>
      {/* Desktop nav */}
      <nav
        className="hidden md:flex space-x-6 items-center relative"
        ref={menuRef}
      >
        {navItems.map((item) =>
          item.subItems ? (
            <div key={item.href} className="group relative">
              <button
                className="flex items-center transition bg-transparent text-white"
                onClick={() => setServicesOpen(!servicesOpen)}
              >
                {item.label}
                {servicesOpen ? (
                  <ChevronUpIcon className="ml-1 h-4 w-4" />
                ) : (
                  <ChevronDownIcon className="ml-1 h-4 w-4" />
                )}
              </button>

              {servicesOpen && (
                <div className="fixed rounded-b-xl left-1/2 mt-6 -translate-x-1/2 pb-9 max-w-[90rem] w-screen grid grid-cols-4 bg-primary text-white shadow-lg z-50">
                  {item.subItems.map((sub) => (
                    <Link
                      key={sub.href}
                      href={sub.href}
                      onClick={() => setServicesOpen(false)}
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
              onClick={() => setServicesOpen(false)}
              className="text-paragraph hover:text-primary transition"
            >
              {item.label}
            </Link>
          )
        )}
      </nav>

      {/* Desktop right side (Search, Language, Booking) */}
      {/* Mobile: Search, Language, Booking in column */}
      <div className="hidden  md:flex items-center gap-4">
        {/* Search */}
        <SearchInput />
        {/* Language */}
        <LanguageButton />
        {/* Booking */}
        <BookingButton />
      </div>
    </>
  );
}

export default DesktopMenu;
