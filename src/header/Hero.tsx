const Hero = () => {
  const handleClick = () => {
    const element = document.querySelector(".about");
    if (element) {
      var headerOffset = 110;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative overflow-x-hidden mt-[4.4rem] md:mt-20">
      <div
        style={{
          backgroundImage: `url("https://themewagon.github.io/orthoc/images/hero-bg.png")`,
          backgroundRepeat: "no-repeat",
          objectFit: "contain",
          position: "relative",
        }}
        className="h-screen relative"
      >
        <div className="absolute top-16 left-3 md:top-20 md:left-20 px-3 md:px-10 lg:px-14 w-full lg:w-1/2 text-white animate-slide">
          <div>
            <h1 className="py-2 font-bold font-mooli text-4xl tracking-wide w-full  lg:w-3/4 leading-snug capitalize">
              We provide best Healthcare
            </h1>
            <p className="leading-relaxed mt-1 mb-6 lg:text-start md:w-3/4 lg:w-full px-3 md-px-0">
              Oriental Hospital is a purpose-built multispecialty, tertiary care
              private hospital in Lagos, Nigeria. Oriental Hospital offers the
              best range of healthcare services from specialty to medical and
              surgical services. This is a first-of-its-kind facility in Nigeria
              and delivers the best
            </p>
          </div>
          <div className="ml-5 md:ml-3 lg:ml-0 ">
            <button
              onClick={handleClick}
              className="bg-white text-green-400 py-2 text-lg px-8 font-semibold rounded-lg hover:bg-transparent hover:border hover:border-white hover:text-white duration-200"
            >
              Read More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
