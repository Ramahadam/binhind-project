"use client";

import { usePathname } from "next/navigation";
import Banner from "./_components/Banner";
import SliderDemo from "./_components/SliderDemo";

function ClientWrapper() {
  const pathname = usePathname();

  // Render the slider on home page
  if (pathname === "/")
    return (
      <Banner>
        <SliderDemo />
      </Banner>
    );

  // Render background cover

  return (
    <div className="relative h-dvh">
      {/**** Reduce the hero cover hight if is not home page****/}
      <Banner height={true} />
    </div>
  );
}

export default ClientWrapper;
