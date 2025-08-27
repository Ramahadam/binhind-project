"use client";
import Link from "next/link";
import { useTranslation } from "react-i18next";

function BookingButton() {
  const { t } = useTranslation();
  return (
    <Link
      href="/booking"
      className="px-6 py-2 bg-white text-primary rounded-md shadow hover:opacity-80 transition w-[12rem] "
    >
      {t("bookAppointment")}
    </Link>
  );
}

export default BookingButton;
