import {
  FaLocationDot,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa6";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdOutlineMail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-primary py-4 md:p-4 mt-9">
      <div className="p-0 md:p-8 lg:px-20 ">
        <div className="block md:grid md:grid-cols-2 lg:grid-cols-4 lg:pb-10 p-5">
          <div className="mb-8 md:mb-5 lg:mb-0">
            <h1 className="text-2xl mb-2 md:mb-5 text-white font-nunito ">
              Reach at..
            </h1>
            <ul className="">
              <li className="text-white text-lg flex items-center h-full hover:text-green-400 duration-200">
                <FaLocationDot className="mr-2 mt-4 cursor-pointer" size={16} />
                <span className="mt-4 cursor-pointer">Location</span>
              </li>
              <li className="text-white text-lg flex items-center h-full  hover:text-green-400 duration-200">
                <BsFillTelephoneFill
                  className="mr-2 mt-4 cursor-pointer"
                  size={16}
                />
                <span className="mt-4 cursor-pointer">Call +123456789</span>
              </li>
              <li className="text-white text-lg flex items-center h-full hover:text-green-400 duration-200">
                <MdOutlineMail className="mr-2 mt-4 cursor-pointer" size={16} />
                <span className="mt-4 cursor-pointer">
                  orientalhospital@gmail.com
                </span>
              </li>
            </ul>
            <div className="flex mt-3 py-2">
              <span className="mr-2 text-white cursor-pointer  hover:text-green-400 duration-200">
                <FaFacebookF size={23} />
              </span>
              <span className="mr-2 text-white cursor-pointer  hover:text-green-400 duration-200">
                <FaTwitter size={23} />
              </span>
              <span className="mr-2 text-white cursor-pointer  hover:text-green-400 duration-200">
                <FaLinkedinIn size={23} />
              </span>
              <span className="mr-2 text-white cursor-pointer  hover:text-green-400 duration-200">
                <FaInstagram size={23} />
              </span>
            </div>
          </div>
          <div className="mb-8 md:mb-5 lg:mb-0 mr-3">
            <h1 className="text-2xl mb-3 md:mb-5 text-white font-nunito ">
              About
            </h1>
            <p className="text-white font-nunito text-lg">
              We foster personal and professional growth of our members through
              continous education​. We seek collaborative research opportunities
              in the international medical community and contribute to improved
              health care in Nigeria and the world at large.
            </p>
          </div>

          <div className="text-white leading-loose md:ml-8">
            <h1 className="text-2xl mb-3 md:mb-5 text-white font-nunito ">
              Links
            </h1>
            <span className="mr-5 cursor-pointer  hover:text-green-400 duration-200 text-lg">
              Home
            </span>
            <span className="cursor-pointer  hover:text-green-400 duration-200 text-lg">
              About
            </span>
            <p className="cursor-pointer  hover:text-green-400 duration-200 text-lg">
              Departments
            </p>
            <span className="mr-5 cursor-pointer  hover:text-green-400 duration-200 text-lg">
              Doctors
            </span>
            <span className="cursor-pointer  hover:text-green-400 duration-200 text-lg">
              Contact Us
            </span>
          </div>

          <div>
            <h1 className="text-2xl mb-3 md:mb-5 text-white font-nunito mt-7 md:mt-0 ">
              Newsletter
            </h1>
            <div className="flex flex-col ">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter email"
                className="p-3 rounded-md placeholder:text-gray-400"
              />
              <button className="p-3 bg-green-800 hover:bg-green-700 duration-200 text-white mt-3 rounded-md">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <p className="text-center font-nunito text-xl mt-4 text-white">
          &copy; All Rights Reserved Oriental Hospitals and Healthcare
        </p>
        <p className="text-center font-nunito text-xl mt-4 text-white pb-5">
          &copy; Developed by Coding Addict 2023
        </p>
      </div>
    </footer>
  );
};

export default Footer;
