// import { useEffect } from "react";
import "../contactpage/contactpage.css";

const ContactPage = () => {
  // useEffect(() => {
  //   document.title = "Contact";
  //   window.scrollTo(0, 0);
  // }, []);

  return (
    <main className="mt-[4.5rem] md:mt-20 ">
      <div className="">
        <div className="relative">
          <div className="absolute z-10 top-[40%] left-3 lg:left-36 text-xl md:text-4xl font-mooli text-white font-extrabold">
            <h1 className="px-2 md:px-6">Oriental Hospital</h1>
            <h1 className="px-10 md:px-20 py-1 md:py-2">Contact Us</h1>
          </div>
          <div className="element flex justify-end">
            <img
              src="https://www.evercare.ng/wp-content/uploads/2021/02/customer-page-banner.jpg"
              alt="doctors-group"
              className="banner__img lg:h-96 relative"
            />
          </div>
        </div>

        <div className="max-w-[1250px] mx-0 lg:mx-auto lg:mt-14 flex flex-col lg:flex-row justify-around ">
          <div className="max-w-[600px] md:max-w-[1000px]">
            <div className="flex w-full">
              <img
                src="https://www.google.com/maps/d/thumbnail?mid=1zWnl8atc592vcgTEtSDBEw8GVr4&hl=en"
                alt="hospital-map"
                className="w-40 md:w-full md:h-64 lg:w-40 lg:h-40"
              />
              <div className="bg-gray-200 max-w-[300px] p-5">
                <h1 className="text-green-500 text-lg md:text-xl lg:text-lg  font-semibold  ">
                  Hospital Location
                </h1>
                <div className="text-sm md:text-lg lg:text-base  leading-9">
                  <span className="uppercase text-gray-600 font-semibold">
                    Oriental hospital victoria island,{" "}
                  </span>
                  <span className="text-gray-600 font-semibold">
                    Block 16, Plot 24A Civil Towers, V.I
                  </span>
                </div>
              </div>
            </div>
            <div className="p-4 text-gray-600 font-semibold">
              <h1 className="text-lg md:text-xl lg:text-lg  text-primary tracking-wide">
                Office Hours
              </h1>
              <p className="my-2">Monday - Sunday</p>
              <p className="mb-2">12:00AM - 12:00AM</p>
              <p className="text-primary">
                Tel: +234-812-645-9876, +234-713-939-5276
              </p>
              <p className="text-primary mt-2">
                <span className="text-gray-500">Email: </span>
                oriental-hospital@gmail.com
              </p>
            </div>
          </div>
          <div className="lg:flex lg:justify-around lg:items-start max-w-[650px] md:max-w-[1000px] lg:max-w-[650px] w-full mt-5">
            <div className="flex flex-col justify-between w-full">
              <form className="text-gray-500 mx-4 lg:mx-0">
                <div className="md:flex md:justify-around md:items-center w-full">
                  <div className="w-full mr-5 uppercase">
                    <label htmlFor="name">First Name:</label> <br />
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="first name"
                      className="border-b-[1px] border-b-black py-3 text-black placeholde:text-gray-700 outline-none w-full mb-4 md:mb-0"
                    />
                  </div>
                  <div className="w-full uppercase">
                    <label htmlFor="name">Last Name:</label> <br />
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="last name"
                      className="border-b-[1px] border-b-black py-3 text-black placeholde:text-gray-700 outline-none w-full mb-4 md:mb-0"
                    />
                  </div>
                </div>
                <div className="md:flex md:justify-around md:items-center w-full mt-5">
                  <div className="w-full mr-5 uppercase">
                    <label htmlFor="email">Email: </label> <br />
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="email address"
                      className="border-b-[1px] border-b-black w-full py-3 text-black placeholde:text-gray-700 outline-none mb-4 md:mb-0"
                      autoComplete="false"
                    />
                  </div>
                  <div className="w-full uppercase">
                    <label htmlFor="number">Phone Number:</label> <br />
                    <input
                      type="number"
                      name="number"
                      id="number"
                      placeholder="phone no"
                      className="border-b-[1px] border-b-black py-3 text-black placeholde:text-gray-700 outline-none w-full"
                    />
                  </div>
                </div>
                <div className="mt-5 uppercase">
                  <label htmlFor="message">Message</label> <br />
                  <textarea
                    placeholder="message"
                    className="w-full mt-3 py-3 border-b-[1px] border-b-black text-black placeholde:text-gray-700 outline-none"
                    name="text"
                    id="text_area"
                    cols={20}
                    rows={5}
                  ></textarea>
                </div>
                <div className="flex justify-center lg:justify-start">
                  <button className="bg-primary text-white mt-3 px-11 py-3 lg:mt-3 rounded-md text-center hover:bg-green-700  transition-all duration-300">
                    SEND
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ContactPage;
