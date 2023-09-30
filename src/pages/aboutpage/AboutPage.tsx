import { useEffect } from "react";
import AboutSlides from "./AboutSlides";

const AboutPage = () => {
  useEffect(() => {
    document.title = "About Page";
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="">
      <div className="relative mt-[4.5rem] md:mt-20 max-w-[1250px] mx-auto w-full">
        <div
          className="relative lg:mt-24 h-80"
          style={{
            backgroundImage: `url("https://t4.ftcdn.net/jpg/05/77/10/93/360_F_577109305_4wdGSgeokK8hq3n0sO7BX640AeqEKvoK.jpg")`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        ></div>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 text-white text-center flex flex-col justify-center">
          <h1 className="text-4xl font-bold font-nunito">About Us</h1>
          <h2 className="text-4xl mt-3 md:mt-6 font-bold font-nunito">
            Oriental Hospital
          </h2>
        </div>
      </div>

      <div className=" bg-primary lg:mt-4 text-white px-3 pl-4 py-8 md:px-24 md:py-20">
        <div className="my-4">
          <div className="flex mt-6">
            <span>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHV14vuAVEfrZKKhnv9HegYAVN9AdF-y4qORONAkTYU3JqggoM"
                alt="mission_icon"
                className="bg-white w-14 mr-2 mb-3"
              />
            </span>
            <h1 className="font-bold font-roboto text-3xl py-3">Our Mission</h1>
          </div>
          <p className="text-base font-roboto tracking-wider">
            Our mission is to serve the health care needs of our community by
            providing comprehensive care to prevent illness, relieve suffering,
            restore health and promote well being during each life stage. We
            will provide advanced procedures and modern technology, within our
            available resources, with a focus on caring, compassion and patient
            safety.
          </p>
        </div>

        <div className="my-4">
          <div className="flex mt-6">
            <span>
              <img
                src="https://www.softeq.com/hubfs/Blog/Icons-banner/Computer-vision-blog-banner.svg"
                alt="vision_icon"
                className="bg-white w-14 mr-2 mb-3"
              />
            </span>
            <h1 className="font-bold font-roboto text-3xl py-3">Our Vision</h1>
          </div>
          <p className="text-base font-roboto tracking-wider">
            We will be the premier health care provider in the Nation, by
            building upon our strengths of personalized care, technologically
            advanced services and effective resource management.
          </p>
        </div>

        <div className="my-4">
          <div className="flex mt-6">
            <span>
              <img
                src="https://cdn-icons-png.flaticon.com/512/7754/7754600.png"
                alt="core_values_icon"
                className="w-14 mr-2 mb-3"
              />
            </span>
            <h1 className="font-bold font-roboto text-3xl py-3">Core Values</h1>
          </div>
          <p className="text-base font-roboto tracking-wider">
            Oriental Hospital will achieve its Mission and Vision through the
            core values of: Caring | Quality | Leadership | Community
            Partnership | Cost-Effectiveness | Technology
          </p>
        </div>
      </div>
      <div className="my-6">
        <h1 className="text-4xl font-bold font-mooli text-center">
          Our Gallery
        </h1>
      </div>
      <AboutSlides />
    </section>
  );
};

export default AboutPage;
