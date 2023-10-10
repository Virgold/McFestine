import React from "react";
import { Navbar } from "../common/Navbar";
import { Footer } from "../common/Footer";
import AboutUs from "../about/AboutUs";
import ChooseUs from "./ChooseUs";
import Testimonial from "./Testimonial";
import ContactUs from "../contact/ContactUs";

const HomePage = () => {
  return (
    <div className="">
      <Navbar
        loginStyle="text-[white] bg-[#CF9832] border border-[white] rounded-full md:py-[12px] py-[5px] md:px-[17px] px-[6px]"
        signUpStyle="text-[#CF9832] bg-white border border-[white] shadow rounded-full md:py-[12px] py-[5px] md:px-[17px] px-[6px]"
      />
      <div className="py-16">
        {/* <ChooseUs /> */}
      </div>
      {/* <Testimonial /> */}
      {/* <AboutUs/> */}
      {/* <ContactUs /> */}
      <Footer />
    </div>
  );
};

export default HomePage;
