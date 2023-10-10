import React from "react";
import { Navbar } from "../common/Navbar";
import Faq from "./Faq";
import Form from "./Form";
import FirstSection from "./FirstSection";
import email from "../../assets/mail.png";
import location from "../../assets/location_on.png";
import phone from "../../assets/call.png";
import map from "../../assets/Rectangle.png";
import { Footer } from "../common/Footer";

const ContactUs = () => {
  return (
    <div className="">
      <FirstSection />
      <Faq />
      <Form />

      <div className="my-[5rem] flex flex-row flex-wrap justify-center md:justify-between ">
        <div className="bg-[white] cursor-pointer shadow-lg space-y-4 px-[20px] pt-[32px] pb-[50px] w-[100%] sm:w-[50%] md:w-[33%] text-center rounded-[15px] scale-75">
          <img src={email} alt="" className="mx-auto mb-4" />
          <a
            href="mailto:mcfestines@gmail.com"
            className="text-[20px] pb-4 text-gray-500"
          >
            mcfestines@gmail.com
          </a>
        </div>
        <div className="bg-[white] cursor-pointer shadow-lg space-y-4 px-[20px] pt-[32px] pb-[50px] w-[100%] sm:w-[50%] md:w-[33%] text-center rounded-[15px] scale-75">
          <img src={location} alt="" className="mx-auto mb-4" />
          <a href="http://" className="text-[20px] pb-4 text-gray-500">
            Gaadi Layout, Coca Cola Bus Stop, Km 5 Gboko Road, Makurdi
          </a>
        </div>
        <div className="bg-[white] cursor-pointer shadow-lg space-y-4 px-[20px] pt-[32px] pb-[50px] w-[100%] sm:w-[50%] md:w-[33%] text-center rounded-[15px] scale-75">
          <img src={phone} alt="" className="mx-auto mb-4" />
          <a
            href="tel:+234 901 246 2195"
            className="text-[20px] pb-4 text-gray-500"
          >
            +234 901 246 2195
          </a>
        </div>
      </div>

      <div className="flex justify-center items-center mb-[10rem]">
        <img src={map} alt="" className="w-[95%] md:w-[90%]" />
      </div>
    </div>
  );
};

export default ContactUs;
