import i18n from "i18next";

import { initReactI18next, Translation } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        services: "Services",
        blog: "Blog",
        about: "About",
        aboutUs: "About Us",
        contacts: "contacts",
        contactUs: "Contact Us",
        ourTeam: "Our Team",
        copyRights: "All rights reserved",
        ourStrategy: "Our Strategy",
        ourAdvantages: "Our Advantages",
        socialResponsibility: "Social Responsibility",
        ourServices: "Our Services",
        bookAppointment: "Book appointment",
        readMore: "Read More",
      },
    },
    "ar-SA": {
      translation: {
        services: "خدماتنا",
        blog: "مدونتنا",
        aboutUs: "معلومات عنا",
        contactUs: "اتصل بنا",
        readMore: "اقرأ المزيد",
        ourTeam: "فريقنا",
        bookAppointment: "حجز موعد",
        subscribe: "اشترك",
        contacts: "جهات الاتصال",
        copyRights: "جميع الحقوق محفوظة",
        ourStrategy: "استراتيجيتنا",
        ourAdvantages: "مميزاتنا",
        socialResponsibility: "المسؤولية الاجتماعية",
        ourServices: "خدماتنا",
        about: "معلومات عنا",
        back: "الرجوع",
      },
    },
  },
  lng: "en", // default
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

export default i18n;
