"use client";
import SearchInput from "./SearchInput";
import LangSwitcher from "./LangSwitcher";
import BookingButton from "./BookingButton";
import { useTranslation } from "react-i18next";
import { renderNavbarLinks } from "../_utils/helper";

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
        {renderNavbarLinks(
          navItems,
          servicesOpen,
          setServicesOpen,
          services,
          t
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
