import React from "react";
import "./Footer.css";
import facebook from "../../assets/images/facebook.svg";
import twitter from "../../assets/images/twitter.svg";
import linkedin from "../../assets/images/linkedin.svg";
import instagram from "../../assets/images/instagram.svg";
import McFestineIcon from "../../assets/images/McFestine_icon.png";

export const Footer = () => {
  return (
    <div className="bg-[#313131] text-white footer mt-0">
      <div className="mx-auto py-8 px-4 lg:px-[70px] ">
        <div className=" flex flex-col lg:flex-row justify-between items-center pb-8">
          <div className="md:w-2/3 lg:w-1/2 w-full flex flex-col justify-center items-center lg:items-start space-y-11 lg:me-[50px] ">
            <div className="mb-6 space-y-5 flex flex-col items-cemter justify-center ">
              <div className="space-y- flex flex-col items-center lg:items-start">
                <img
                  src={McFestineIcon}
                  alt="McFestine’s Restaurant & Supermarket"
                  className="w-32 h-auto mb-2"
                />
                <span className="text-xl text-center lg:text-start font-normal text-[#F5F5F5]">
                  McFestine’s Restaurant & Supermarket
                </span>
              </div>
              <div className="flex justify-center lg:justify-start items-center  b space-x-4 ">
                <img src={facebook} alt="Facebook" className="w-6 h-6 cursor-pointer hover:opacity-60" />
                <img src={twitter} alt="Twitter" className="w-6 h-6 cursor-pointer hover:opacity-60" />
                <img src={instagram} alt="Instagram" className="w-6 h-6 cursor-pointer hover:opacity-60" />
                <img src={linkedin} alt="LinkedIn" className="w-6 h-6 cursor-pointer hover:opacity-60" />
              </div>
            </div>

            <div className="md:h-[187px] w-full  flex-shrink-0 rounded-e-[100px] opening-hours flex flex-col gap-5 md:gap-6 md:py-6 md:px-4 p-3 ">
              <h2 className="md:text-2xl text-xl  font-medium text-[#8C6321]">
                Opening hours
              </h2>
              <div className="flex md:gap-32 gap-5 lg:text-xl md:text-lg text-base items-center font-normal ">
                <div className="">
                  <h4 className="text-[#8C6321] gap">Monday - Saturday</h4>
                  <span className="text-[#F5F5F5]">8am - 10pm</span>
                </div>
                <div className=" text-base md:text-lg lg:text-xl">
                  <h4 className="text-[#8C6321]">Sunday</h4>
                  <span className="text-[#F5F5F5]">9am - 10pm</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col mt-14 lg:mt-0 w-full space-y-14 md:w-2/3 lg:w-1/2 ">
            <div className="flex md:flex-row flex-col text-[#A3A3A3] w-full gap-14 md:gap-0 items-center shrink-0 ">
              <ul className="flex flex-col w-full items-start gap-3">
                <li className="hover:bg-[#525252] w-full px-4 py-1 w-full rounded-md cursor-pointer">
                  <a href="">About Us</a>
                </li>
                <li className="hover:bg-[#525252] px-4 py-1 w-full rounded-md cursor-pointer">
                  <a href="">Latest News</a>
                </li>
                <li className="hover:bg-[#525252] px-4 py-1 w-full rounded-md cursor-pointer">
                  <a href="">Blog</a>
                </li>
              </ul>
              <ul className="flex flex-col w-full items-start gap-3">
                <li className="hover:bg-[#525252] px-4 py-1 w-full rounded-md cursor-pointer">
                  <a href="">Services</a>
                </li>
                <li className="hover:bg-[#525252] px-4 py-1 w-full rounded-md cursor-pointer">
                  <a href="">Menu</a>
                </li>
                <li className="hover:bg-[#525252] px-4 py-1 w-full rounded-md cursor-pointer">
                  <a href="">Store</a>
                </li>
              </ul>
              <ul className="flex flex-col items-start w-full gap-3">
                <li className="hover:bg-[#525252] px-4 py-1 w-full rounded-md cursor-pointer">
                  <a href="">Contact Us</a>
                </li>
                <li className="hover:bg-[#525252] px-4 py-1 w-full rounded-md cursor-pointer">
                  <a href="">FAQ</a>
                </li>
              </ul>
            </div>

            <div className="mt-6 flex flex-col w-full text-[#A3A3A3] text-center lg:text-right lg:items-end font-semibold py-4 space-y-4">
              <strong className="md:text-3xl text-2xl block mb-2 ">
                NewsLetter
              </strong>
              <span className="md:text-xl text-sm ">
                Sign up today for the latest news and updates.
              </span>
              <div className="relative max-w-lg">
                <label className="sr-only" for="email">
                  {" "}
                  Email{" "}
                </label>

                <input
                  className="w-full rounded-full bg-[#525252] p-2 md:p-4 md:pe-64 md:ps-14 text-sm font-medium input-outline "
                  id="email"
                  type="email"
                  placeholder="Enter your email address"
                />

                <button className="absolute end-0 top-1/2 -translate-y-1/2 rounded-full bg-[#CF9832] md:px-7 px-3 md:py-4 py-2 text-sm font-medium text-white transition hover:bg-[#a17b34] ">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-[#E8E0D3] mt-[80px] ">
          <div className=" flex flex-col md:flex-row md:justify-between items-center text-white md:text-base text-sm  font-light pt-4">
            <ul className="flex justify-center flex-wrap md:justify-end space-x-4">
              <li>
                <a className="hover:opacity-50" href="#">Terms & Conditions</a>
              </li>
              <li>
                <a className="hover:opacity-50" href="#">Privacy</a>
              </li>
              <li>
                <a className="hover:opacity-50" href="#">Cookie Settings</a>
              </li>
            </ul>
            <div className=" mt-4">©2022 McFestine’s. All rights reserved.</div>
          </div>
        </div>
      </div>
    </div>
  );
};
