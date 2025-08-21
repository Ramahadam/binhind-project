import Image from "next/image";
import Banner from "./_components/Banner";
import SliderDemo from "./_components/SliderDemo";

export default function Home() {
  return (
    <div>
      <Banner>
        <SliderDemo />
      </Banner>
    </div>
  );
}
