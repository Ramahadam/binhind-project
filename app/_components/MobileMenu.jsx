import Link from "next/link";
import SearchInput from "./SearchInput";
import LangSwitcher from "./LangSwitcher";
import BookingButton from "./BookingButton";
import { useTranslation } from "react-i18next";
import { renderNavbarLinks } from "../_utils/helper";
function MobileMenu({
  navItems,
  servicesOpen,
  services,
  setServicesOpen,
  menuRef,
}) {
  const { t } = useTranslation();
  const isMobileNav = true;
  return (
    <nav
      className="md:hidden mt-2 flex flex-col space-y-2 px-4 bg-primary py-4 w-full h-dvh"
      ref={menuRef}
    >
      {renderNavbarLinks(
        navItems,
        servicesOpen,
        setServicesOpen,
        services,
        t,
        isMobileNav
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
