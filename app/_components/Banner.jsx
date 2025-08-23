import Image from "next/image";

function Banner({ children, height }) {
  return (
    // <div className={`relative w-[100%] h-dvh`}>
    <div className={`relative w-[100%]  ${height ? "h-[80%]" : "h-dvh"} `}>
      {/* Grayscale background image */}
      <Image
        src="/hero_bg_cover.png"
        alt="image shows some buildings"
        fill
        className="object-cover grayscale md:object-fill "
        priority
      />

      {/* Linear gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(75,38,21,0.28) 0%, rgba(75,38,21,0.68) 100%)",
        }}
      />

      <div className="absolute inset-0 flex items-center justify-center">
        {children}
      </div>
    </div>
  );
}

export default Banner;
