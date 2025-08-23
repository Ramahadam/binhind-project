import { FaFacebook, FaGooglePlus, FaTwitter } from "react-icons/fa";
import Banner from "./_components/Banner";
import SliderDemo from "./_components/SliderDemo";
import SliderGrid from "./_components/SliderGrid";
import SliderGridTesimonials from "./_components/SliderGridTesimonials";
import Link from "next/link";

import { GrGooglePlus } from "react-icons/gr";
import { FaFacebookF } from "react-icons/fa6";

export default function Home() {
  return (
    <div>
      {/* Section 01 */}
      {/* <Banner>
        <SliderDemo />
      </Banner> */}
      {/* Section 02    */}
      {/* <section className="bg-background">
        <div className="text-center md:text-h42 text-h22">
          <h2 className="mb-4">Our Team</h2>
          <p className="text-p16 md:text-18 text-foreground mb-12 w-[90%] md:w-full mx-auto">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever since the 1500s
          </p>
        </div>
        <SliderGrid />
      </section>
      <section className="bg-primary md:py-[10rem] py-[4rem]  ">
        <article className="w-7xl mx-auto">
          <header className="text-center md:text-left">
            <h2 className="text-white md:text-h42 md:font-bold text-h40">
              What our clients are saying
            </h2>
            <p className="text-white font-regular text-balance max-w-[36rem] opacity-70">
              Our clients range from individual investors, to local,
              international as well as fortune 500 companies.Our clients range
              from individual investors, to local, international as well as
              fortune 500 companies.
            </p>
          </header>

          <SliderGridTesimonials />
        </article>
      </section> */}

      <footer className="bg-primary py-[3.5rem] flex flex-col mt-[8rem] text-p14 text-white md:text-p16 ">
        <div className="wrapper max-w-7xl md:w-[80rem] mx-auto ">
          {/* Newsletter Subscription */}
          <section
            className="flex flex-col md:flex-row md:justify-end items-center justify-center mb-4 gap-8 "
            aria-label="Newsletter Subscription"
          >
            <form className="bg-white flex items-center rounded-sm py-1 pr-2">
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
            </form>
            {/* Contact & Social Links */}
            <div
              aria-label="Contact and Social Media"
              className="flex items-center gap-4 justify-center md:justify-end"
            >
              <Link href="/contact">Contacts</Link>
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
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/strategy">Our Strategy</Link>
              </li>
              <li>
                <Link href="/advantages">Our Advantages</Link>
              </li>
              <li>
                <Link href="/social-responsibility">Social Responsibility</Link>
              </li>
              <li>
                <Link href="/services">Our Services</Link>
              </li>
            </ul>

            <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
          </nav>
        </div>
      </footer>
    </div>
  );
}
