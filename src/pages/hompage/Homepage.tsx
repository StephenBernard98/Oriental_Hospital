import React, { useEffect } from "react";
import Hero from "../../header/Hero";
import About from "../../components/About";
import Doctors from "../../components/Doctors";
import Contact from "../../components/Contact";
import Testimonials from "../../components/Testimonials";

const Homepage = () => {
  useEffect(() => {
    document.title = "Homepage";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Hero />
      <About />
      <Doctors />
      <Contact />
      <Testimonials />
    </div>
  );
};

export default Homepage;
