"use client";

import { usePathname } from "next/navigation";
import Banner from "./_components/Banner";
import { useEffect } from "react";
import HeroSection from "./_components/HeroSection";

import { DM_Sans } from "next/font/google";

function RenderBanner({ children }) {
  const pathname = usePathname();

  useEffect(() => {
    // Scroll to top whenever route changes

    window.scrollTo(0, 0);
  }, [pathname]);

  // Render the slider on home page
  if (pathname === "/")
    return (
      <Banner>
        <HeroSection />
      </Banner>
    );

  // Render background cover
  return (
    <div className="relative ">
      {/**** Reduce the hero cover hight if is not home page****/}
      <Banner height={true} />
    </div>
  );
}

export default RenderBanner;
