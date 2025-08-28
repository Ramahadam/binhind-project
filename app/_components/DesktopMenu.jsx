"use client";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import SearchInput from "./SearchInput";
import LangSwitcher from "./LangSwitcher";
import BookingButton from "./BookingButton";
import { useTranslation } from "react-i18next";
import Button from "./Button";

function DesktopMenu({
  navItems,
  servicesOpen,
  setServicesOpen,
  menuRef,
  services,
}) {
  const { t } = useTranslation();

  return (
    <>
      {/* Desktop nav */}
      <nav
        className="hidden md:flex space-x-6 items-center relative"
        ref={menuRef}
      >
        {navItems.map((item) =>
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

              {servicesOpen && (
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
              )}
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
        )}
      </nav>

      <div className="hidden  md:flex items-center gap-4">
        {/* Search */}
        <SearchInput />
        {/* Language */}
        <LangSwitcher />
        {/* Booking */}
        <BookingButton />
      </div>
    </>
  );
}

export default DesktopMenu;
