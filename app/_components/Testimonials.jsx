import SliderGridTesimonials from "./SliderGridTesimonials";

function Testimonials() {
  return (
    <>
      <section className="bg-primary md:py-[10rem] py-[4rem] px-4 md:px-0">
        <article className="md:w-7xl mx-auto">
          <header className="text-center md:text-left">
            <h2 className="text-white md:text-h42 md:font-bold text-h40">
              What our clients are saying
            </h2>
            <p className="text-white font-regular md:text-balance max-w-[36rem] opacity-70">
              Our clients range from individual investors, to local,
              international as well as fortune 500 companies.Our clients range
              from individual investors, to local, international as well as
              fortune 500 companies.
            </p>
          </header>

          <SliderGridTesimonials />
        </article>
      </section>
    </>
  );
}

export default Testimonials;
