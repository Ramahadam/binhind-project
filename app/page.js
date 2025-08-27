import Banner from "./_components/Banner";
import Footer from "./_components/Footer";
import SliderDemo from "./_components/SliderDemo";
import SliderGrid from "./_components/SliderGrid";
import SliderGridTesimonials from "./_components/SliderGridTesimonials";
import Link from "next/link";
import { FaFacebook, FaGooglePlus, FaTwitter } from "react-icons/fa";
import Testimonials from "./_components/Testimonials";
import OurTeam from "./_components/OurTeam";

export default function Home() {
  return (
    <div>
      <OurTeam />

      <Testimonials />
      <Footer />
    </div>
  );
}
