"use client";
import Link from "next/link";
import { useTranslation } from "react-i18next";

function BookingButton() {
  const { t } = useTranslation();
  return (
    <Link
      href="/booking"
      className="px-6 py-2   text-white rounded-md border border-MeduimGray hover:opacity-80 transition w-[12rem] text-center"
    >
      {t("bookAppointment")}
    </Link>
  );
}

export default BookingButton;
