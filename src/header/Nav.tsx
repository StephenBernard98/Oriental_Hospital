import { CiMenuFries } from "react-icons/ci";
import { AiFillHome } from "react-icons/ai";
import { RiCloseCircleLine, RiContactsFill } from "react-icons/ri";
import { FaUserDoctor, FaHospital } from "react-icons/fa6";
import { IoMdContact } from "react-icons/io";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  const [mobileNav, setMobileNav] = useState(false);
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 25) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  return (
    <div className="">
      <div className="fixed top-0 w-full z-20 transition-all duration-500 overflow-x-hidden  bg-gradient-to-r from-[#2db492] to-[#09c09bad] ">
        <nav>
          <div className="text-white py-2 flex justify-around items-center">
            <Link to="/">
              <div className="flex items-center">
                <img
                  src="https://static.vecteezy.com/system/resources/previews/006/817/240/non_2x/creative-abstract-modern-clinic-hospital-logo-design-colorful-gradient-clinic-logo-design-free-vector.jpg"
                  alt="hospital_logo"
                  className="w-14 md:w-16 mr-3 rounded-full"
                />
                <h1 className="font-bold font-roboto text-2xl tracking-wide cursor-pointer hidden md:inline">
                  ORIENTAL HOSPITAL
                </h1>
              </div>
            </Link>
            <div className="uppercase text-xl hidden lg:flex">
              <ul className="flex">
                <Link to="/">
                  <li className="mr-5 cursor-pointer">Home</li>
                </Link>
                <Link to="/about">
                  <li className="mr-5 cursor-pointer">About</li>
                </Link>
                <Link to="/dept">
                  <li className="mr-5 cursor-pointer">Departments</li>
                </Link>
                <Link to="/doctor">
                  <li className="mr-5 cursor-pointer">Doctors</li>
                </Link>
                <li className="mr-5 cursor-pointer">Contact us</li>
              </ul>
            </div>
            <div className="lg:hidden cursor-pointer ">
              <CiMenuFries
                className="font-extrabold text-3xl md:text-4xl stroke-1 md:stroke-2 "
                onClick={() => setMobileNav(true)}
              />
            </div>
          </div>
        </nav>

        {/*Starting  Mobile Menu */}
        {/* This overlays the page to return the menu list */}

        {mobileNav ? (
          <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div>
        ) : (
          ""
        )}

        <div
          className={
            mobileNav
              ? "fixed top-0 right-0 w-[65%] md:w-[40%] h-screen bg-white/90 z-10 duration-700 overflow-y-scroll"
              : "fixed top-0 right-[-100%] w-[65%] md:w-[40%] h-screen bg-white/80 z-10 duration-700 overflow-y-scroll"
          }
        >
          <RiCloseCircleLine
            onClick={() => setMobileNav(false)}
            size={40}
            className="absolute right-4 top-6 cursor-pointer text-gray-500"
          />

          <nav>
            <ul className="flex flex-col px-1 py-4 text-gray-800 font-semibold mt-16">
              <Link to="/">
                <li
                  onClick={() => setMobileNav(false)}
                  className="text-xl md:text-2xl font-bold cursor-pointer py-4 flex items-center hover:bg-[#49aa80] hover:text-white/80 duration-500"
                >
                  <AiFillHome className="ml-4 mr-3 text-4xl md:text-5xl" />{" "}
                  <span className="text-xl md:text-2xl font-mooli"> Home</span>
                </li>
              </Link>

              <Link to="/about">
                <li
                  onClick={() => setMobileNav(false)}
                  className="text-xl md:text-3xl font-bold cursor-pointer py-4 flex items-center hover:bg-[#49aa80] hover:text-white/80 duration-500"
                >
                  <IoMdContact className="ml-4 mr-3 text-4xl md:text-5xl" />{" "}
                  <span className="text-xl md:text-2xl font-mooli"> About</span>
                </li>
              </Link>
              <Link to="/dept">
                <li
                  onClick={() => setMobileNav(false)}
                  className="text-xl md:text-3xl font-bold cursor-pointer py-4 flex items-center hover:bg-[#49aa80] hover:text-white/80 duration-500"
                >
                  <FaHospital className="ml-4 mr-3 text-4xl md:text-5xl" />{" "}
                  <span className="text-xl md:text-2xl font-mooli">
                    {" "}
                    Departments
                  </span>
                </li>
              </Link>
              <Link to="/doctor">
                <li
                  onClick={() => setMobileNav(false)}
                  className="text-xl md:text-3xl font-bold cursor-pointer py-4 flex items-center hover:bg-[#49aa80] hover:text-white/80 duration-500"
                >
                  <FaUserDoctor className="ml-4 mr-3 text-4xl md:text-5xl" />{" "}
                  <span className="text-xl md:text-2xl font-mooli">
                    {" "}
                    Doctors
                  </span>
                </li>
              </Link>
              <li
                onClick={() => setMobileNav(false)}
                className="text-xl md:text-3xl font-bold cursor-pointer py-4 flex items-center hover:bg-[#49aa80] hover:text-white/80 duration-500"
              >
                <RiContactsFill className="ml-4 mr-3 text-4xl md:text-5xl" />{" "}
                <span className="text-xl md:text-2xl font-mooli">
                  {" "}
                  Contact us
                </span>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Nav;
