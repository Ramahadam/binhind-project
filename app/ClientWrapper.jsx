"use client";

import { useSelector } from "react-redux";
import { useEffect } from "react";

// app/layout.js

export default function ClientWrapper({ children }) {
  const lang = useSelector((state) => state.language.lang);

  useEffect(() => {
    // Update html lang attribute
    if (typeof window !== "undefined") {
      document.documentElement.lang = lang.startsWith("ar") ? "ar" : "en";
      document.documentElement.dir = lang.startsWith("ar") ? "rtl" : "ltr";
    }
  }, [lang]);

  return <div>{children}</div>;
}
