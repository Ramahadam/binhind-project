"use client";
import { FaTwitter } from "react-icons/fa";

import Link from "next/link";

import { GrGooglePlus } from "react-icons/gr";
import { FaFacebookF } from "react-icons/fa6";
import SignupForm from "./SignupForm";
import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-primary py-[3.5rem] flex flex-col mt-[8rem] text-p14 text-white md:text-p16 ">
      <div className="wrapper max-w-7xl md:w-[80rem] mx-auto ">
        {/* Newsletter Subscription */}
        <section
          className="flex flex-col md:flex-row md:justify-end items-center justify-center mb-4 gap-8 "
          aria-label="Newsletter Subscription"
        >
          {/* <form className="bg-white flex items-center rounded-sm py-1 pr-2">
            <input
              type="email"
              id="newsletter"
              placeholder="Email"
              className="outline-0 pl-2"
            />
            <button
              type="submit"
              className="bg-primary text-white rounded-sm px-3 py-1 cursor-pointer"
            >
              Subscribe
            </button>
          </form> */}
          <SignupForm />
          {/* Contact & Social Links */}
          <div
            aria-label="Contact and Social Media"
            className="flex items-center gap-4 justify-center md:justify-end"
          >
            <p>{t("contacts")}</p>
            <nav aria-label="Social Media Links">
              <ul className="flex gap-4">
                <li>
                  <Link href="#" aria-label="Twitter">
                    <FaTwitter className="text-white" />
                  </Link>
                </li>
                <li>
                  <Link href="#" aria-label="Facebook">
                    <FaFacebookF className="text-white" />
                  </Link>
                </li>
                <li>
                  <Link href="#" aria-label="Google Plus">
                    <GrGooglePlus className="text-white" />
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </section>

        <hr className="w-full h-2 opacity-40" />

        {/* Footer Navigation / Copyright */}
        <nav
          aria-label="Footer Navigation"
          className="copyright opacity-75 flex flex-col md:flex-row justify-center md:justify-between mt-[3rem] text-center md:text-left"
        >
          <ul className="flex gap-4 flex-col md:flex-row">
            <li>
              <Link href="/about-us">{t("about")}</Link>
            </li>
            <li>
              <Link href="/strategy">{t("ourStrategy")}</Link>
            </li>
            <li>
              <Link href="/advantages">{t("ourAdvantages")}</Link>
            </li>
            <li>
              <Link href="/social-responsibility">
                {t("socialResponsibility")}
              </Link>
            </li>
            <li>
              <Link href="/services">{t("ourServices")}</Link>
            </li>
          </ul>

          <p>
            &copy; {new Date().getFullYear()}
            {t("copyRights")}
          </p>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
