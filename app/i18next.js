import i18n from "i18next";

import { initReactI18next, Translation } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        services: "Our Services",
        blog: "Our Blog",
        about: "About Us",
        contact: "Contact Us",
      },
    },
    ar: {
      translation: {
        services: "خدماتنا",
        blog: "مدونتنا",
        about: "معلومات عنا",
        contact: "اتصل بنا",
      },
    },
  },
  lng: "en", // default
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

export default i18n;
