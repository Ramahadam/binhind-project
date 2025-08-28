import {
  ChevronDownIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import SearchInput from "./SearchInput";
import LangSwitcher from "./LangSwitcher";
import BookingButton from "./BookingButton";
import Button from "./Button";
import { useTranslation } from "react-i18next";
function MobileMenu({
  navItems,
  servicesOpen,
  services,
  setServicesOpen,
  menuRef,
}) {
  const { t } = useTranslation();

  return (
    <nav
      className="md:hidden mt-2 flex flex-col space-y-2 px-4 bg-primary py-4 w-full h-dvh"
      ref={menuRef}
    >
      {navItems.map((item) =>
        item.label === "services" ? (
          <div key={item.label}>
            {/* <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className="flex justify-between items-center w-full py-2 text-left"
            >
              {item.label}
              <ChevronDownIcon
                className={`h-4 w-4 transition-transform ${
                  servicesOpen ? "rotate-180" : ""
                }`}
              />
            </button> */}

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
              className="!text-left justify-start !px-0"
            >
              {t(item.label)}
            </Button>

            {
              //List of services
              servicesOpen && (
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
              )
            }
          </div>
        ) : (
          <Link //Other pages
            key={item.href}
            href={item.href}
            className="py-1 hover:text-primary"
            onClick={() => setMenuOpen(false)}
          >
            {t(item.label)}
          </Link>
        )
      )}

      {/* Mobile: Search, Language, Booking in column */}
      <div className="mt-6 flex flex-col space-y-3">
        {/* Search */}
        <SearchInput />
        {/* Language */}
        <LangSwitcher />
        {/* Booking */}
        <BookingButton />
      </div>
    </nav>
  );
}

export default MobileMenu;
