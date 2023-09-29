import { useEffect, useState } from "react";
import { about_img } from "./AboutData";
import { BsChevronCompactRight, BsChevronCompactLeft } from "react-icons/bs";

const AboutSlides = () => {
  const [imgData, setImgData] = useState(about_img);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const intervalId = setInterval(nextSlide, 3000);
    return () => clearInterval(intervalId);
  });

  const prevSlide = () => {
    var slider = document.getElementById("slider");
    if (slider !== null) {
      slider.scrollLeft = slider.scrollLeft - getScrollAmount();
    }
  };

  const nextSlide = () => {
    var slider = document.getElementById("slider");
    if (slider !== null) {
      slider.scrollLeft = slider.scrollLeft + getScrollAmount();
      if (slider.scrollLeft >= slider.scrollWidth - slider.clientWidth) {
        slider.scrollLeft = 0;
      }
    }
  };

  const getScrollAmount = () => {
    if (window.innerWidth >= 768) {
      return 350;
    } else {
      return 200;
    }
  };

  return (
    <section className="relative m-2">
      <div
        id="slider"
        className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth max-w-[1250px] mx-auto hide-scrollbar"
      >
        <div className="relative flex items-center my-4">
          {imgData.map((items) => (
            <img
              src={items.img}
              alt=""
              className="w-96 h-80 p-2 cursor-pointer hover:scale-105 ease-in-out duration-300"
            />
          ))}
        </div>
        <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] left-0 text-2xl rounded-full p-2 bg-black/20 hover:bg-black/70 text-white cursor-pointer font-extrabold duration-75">
          <BsChevronCompactLeft size={35} onClick={prevSlide} />
        </div>
        <div className=" absolute top-[50%] -translate-x-0 translate-y-[-50%] right-0 text-2xl rounded-full p-2 bg-black/20 hover:bg-black/70 text-white cursor-pointer font-extrabold duration-75">
          <BsChevronCompactRight size={35} onClick={nextSlide} />
        </div>
      </div>
    </section>
  );
};

export default AboutSlides;
