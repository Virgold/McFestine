import React from "react";
import bgImage from "../../assets/images/coffee_table.png";
import osas from "../../assets/images/osas.png";
import appIcon from "../../assets/images/group-box.svg";
import shoppingCart from "../../assets/images/shopping_cart.png";
import CardSection from "./CardSection";
import process from "../../assets/images/process.png";
import restaurant from "../../assets/images/girl_in_restaurant.png";
import Form from "../common/Form";

const AboutUs = () => {
  return (
    <div className="pt-[120px] bg-[#FDFDFD]  ">
      <section className="flex md:flex-row m-auto w-full items-center justify-center md">
        
        <div className="lg:w-1/2 w-full">
          <div className="container m-auto py-5">
            <div className="md:w-[553px] w-[90%] m-auto">
              <h1 className="md:text-6xl text-5xl  font-semibold text-[#1A1A1A] ">
                About Us
              </h1>
              <p className="pt-[32px] font-semibold md:text-xl text-lg text-[#666666]">
                McFestines is one of the Sundry Foods’ restaurant and
                supermarket brands, operating in the Quick Service Restaurant
                (QSR) segment, the brand has established itself as a market
                leader and one of the fastest-growing restaurant brands in the
                country with currently 70 stores across 15 states and more to
                come. McFestines caters to the unique preference of the general
                populace in this part of sub-Saharan Africa for their local
                dishes. Our unique menu consists of select popular contemporary
                and Nigerian offerings. Items on our menu can also be found on
                dining tables in other African countries. The McFestine’s brand
                was born out of the quest to satisfy both the local and
                continental food cravings of our people. We deliver fresh, hot,
                and mouth-watering meals, pastries, sandwiches, and beverages to
                thousands of customers in the finest environment each day. Our
                restaurants stand out for their bright colours and lovely
                ambiance inviting you to dine-in or grab-and-go with the best
                quality meals. We are working to ensure there is a McFestine’s
                restaurant and supermarket in every major city in the country.
              </p>
            </div>
          </div>
        </div>

        <div className="w-1/2 h-full hidden lg:block">
          <div className="container m-auto py-5">
            <div className="relative">
              <img src={bgImage} alt="" className="object-cover w-[727px]" />
              <div className="absolute top-[25%]">
                <div className="relative">
                  <img
                    src={osas}
                    alt=""
                    className="object-cover top-10 w-full rounded-e-full"
                  />
                  <div className="absolute text-red-500 top-[82%] w-3/4 flex items-center justify-center bg-[#CF9832] rounded-e-full ">
                    <div className="py-4 px-8 text-white text-center">
                      <h1 className="text-2xl font-semibold">Osas Favour</h1>
                      <p className="text-xl italic font-light">Founder</p>
                      <span className="text-xl font-light ">
                        Executive Chairperson
                      </span>
                    </div>
                  </div>

                  <img
                    src={appIcon}
                    alt=""
                    className="absolute top-0 right-[12%]"
                  />
                  <img
                    src={shoppingCart}
                    alt=""
                    className="absolute right-0 -bottom-10 bg-[#FDFDFD] rounded-full p-2 "
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* /////////////// SECTION 2 //////////// */}
      <section className=" bg-[#F5EAD6] flex items-center justify-center ">
        <div className="container m-auto flex flex-col justify-center items-center md:py-16 py-8 ">
          <div className="text-center">
            <h1 className="lg:text-5xl md:text-4xl text-2xl  font-medium text-[#291E0A] ">
              Product and Services
            </h1>
            <span className="lg:text-2xl md:text-xl text-sm  font-medium text-[#404040] ">
              We offer quality food, groceries and services.
            </span>
          </div>

          <div className=" md:py-16 py-8 ">
            <CardSection />
          </div>
        </div>
      </section>

      {/* /////////////// SECTION 3 //////////// */}
      <section className=" bg-[#FDFDFD] text-center flex h-auto justify-center ">
        <div className="py-8 md:py-16">
          <h1 className="lg:text-5xl md:text-4xl text-2xl  font-medium text-[#291E0A] ">
            See how it works
          </h1>
          <span className="lg:text-2xl md:text-xl text-sm font-medium text-[#404040] ">
            We offer quality food, groceries and services.
          </span>
          <img src={process} alt="" />
        </div>
      </section>
      <section className=" bg-[#F5EAD6] h-auto items-center justify-center ">
        <div className="container m-auto lg:pb-32 pb-16  text-center ">
          <div className="py-8 md:py-16 w-[80%] m-auto">
            <h1 className="lg:text-5xl md:text-4xl text-2xl  font-semibold text-[#291E0A] ">
              Book your table
            </h1>
            <span className="lg:text-2xl md:text-xl text-sm font-normal text-[#404040] ">
              Making a reservation at McFestines is easy and takes just a couple
              of minutes.
            </span>
          </div>

          <div className="lg:flex">
            <div className="w-1/2 lg:block hidden">
              <img src={restaurant} alt="" className="w-[90%] m-auto" />
            </div>
            <Form />
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
