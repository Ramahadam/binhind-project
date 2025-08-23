import SliderGrid from "./SliderGrid";

function OurTeam() {
  return (
    <section className="bg-background h-[40rem] mt-[5rem] md:mt-[10rem] max-w-7xl mx-auto">
      <div className="wrapper ">
        <div className="text-center md:text-h42 text-h22 ">
          <h2 className="mb-4">Our Team</h2>
          <p className="text-p16 md:text-18 text-foreground mb-12 w-[90%] md:w-[47rem] mx-auto">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever since the 1500s
          </p>
        </div>
        <SliderGrid />
      </div>
    </section>
  );
}

export default OurTeam;
