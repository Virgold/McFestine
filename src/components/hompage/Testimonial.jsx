import React, { useState } from "react";
import TestimonialCard from "./TestimonialCard";
import { data } from "../../assets/data/data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Keyboard } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Testimonial.css";

const Testimonial = ({ options }) => {
  const testimonial = data.filter((card) => card.section === "testimonial");
  const [activeSlide, setActiveSlide] = useState(0);

  const onSlideChange = (swiper) => {
    setActiveSlide(swiper.realIndex);
  };

  return (
    <div className="text-center py-16 bg-gray-100 ">
      <h1 className="lg:text-5xl md:text-4xl text-2xl  font-medium text-[#291E0A] md:mb-4">
        What customers say about us
      </h1>
      <p className="lg:text-xl md:text-base text-xs  font-medium text-[#404040] mb-8">
        We enjoy satisfying our customers to the best of their needs.
      </p>

      <Swiper
        className={`mySwiper md:w-[90%] m-auto`}
        modules={[Navigation, Pagination, Keyboard]}
        keyboard={{
          enabled: true,
        }}
        spaceBetween={30}
        autoHeight={true}
        // slidesPerView={"auto"}
        centeredSlides={true}
        navigation={true}
        pagination={{ clickable: true, dynamicBullets: true }}
        scrollbar={{ draggable: true }}
        onSlideChange={(swiper) => onSlideChange(swiper)}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        <div>
          {testimonial.map((card, index) => (
            <SwiperSlide key={index}>
              <div className="testimonial-card-wrapper flex justify-center items-center h-full">
                <TestimonialCard
                  testimony={card.testimony}
                  img={card.img}
                  name={card.name}
                  title={card.title}
                  isActive={index === activeSlide}
                />
              </div>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
  );
};

export default Testimonial;
