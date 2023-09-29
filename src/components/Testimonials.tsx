import { useState } from "react";
import { TestimonialData } from "../data/Testimony";
import { RxDotFilled } from "react-icons/rx";

// interface Review {
//   name: string;
//   image: string;
//   testimonial: string;
// }

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const currentTestimonial = TestimonialData[currentIndex];

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? TestimonialData.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % TestimonialData.length);
  };

  const goToSlide = (slideIndex: any) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <main className="max-w-[1000px] mx-auto my-0 lg:my-1 lg:p-1 relative mb-6">
      <div>
        <h1 className="font-bold text-3xl font-mooli text-center text-black my-3 uppercase ">Testimonial</h1>
      </div>
      <div className="flex justify-center items-center h-full w-full ">
        <div className="bg-white p-4 lg:p-5 flex flex-col items-center w-[90%] m-0 lg:m-1 animate-slide">
          <div>
            <img
              src={currentTestimonial.image}
              alt="user_image"
              className="w-28 rounded-full h-28"
            />
          </div>
          <div>
            <h3 className="text-primary font-extrabold text-3xl font-mooli p-4">
              {currentTestimonial.name}
            </h3>
          </div>
          <div className="flex flex-col  items-center h-full">
            <p className="text-lg px-2 text-center">
              {currentTestimonial.testimonial}
            </p>
            <img
              src={currentTestimonial.quote}
              alt="user_image"
              className="w-5 mt-3"
            />
          </div>
        </div>
      </div>

      <span className="flex justify-center">
        {TestimonialData.map((slide, slideIndex) => (
          <span
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className={`cursor-pointer text-3xl ${
              currentIndex === slideIndex ? "text-primary" : "text-gray-400"
            }`}
          >
            <RxDotFilled className="mb-8" />
          </span>
        ))}
      </span>

      <div className="flex items-center justify-center lg:mb-4">
        <div className="inline ">
          <span
            onClick={prevSlide}
            className="text-2xl text-white bg-primary hover:bg-green-700 duration-200 px-4 py-1 cursor-pointer font-extrabold rounded  mr-1"
          >
            &#8592;{" "}
          </span>
        </div>
        <div className="inline ">
          <span
            onClick={nextSlide}
            className="text-2xl text-white bg-primary hover:bg-green-700 duration-200 px-4 py-1 cursor-pointer font-extrabold rounded "
          >
            &#8594;{" "}
          </span>
        </div>
      </div>
    </main>
  );
};

export default Testimonials;
