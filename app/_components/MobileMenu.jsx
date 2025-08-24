import {
  ChevronDownIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import SearchInput from "./SearchInput";
import LanguageButton from "./LanguageButton";
import BookingButton from "./BookingButton";
function MobileMenu({ navItems, servicesOpen, setServicesOpen, menuRef }) {
  return (
    <nav
      className="md:hidden mt-2 flex flex-col space-y-2 px-4 bg-primary py-4 w-full h-dvh"
      ref={menuRef}
    >
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

      {/* Mobile: Search, Language, Booking in column */}
      <div className="mt-6 flex flex-col space-y-3">
        {/* Search */}
        <SearchInput />
        {/* Language */}
        <LanguageButton />
        {/* Booking */}
        <BookingButton />
      </div>
    </nav>
  );
}

export default MobileMenu;
