import React from "react";
import { data } from "../../assets/data/data";
import Card from "../about/Card";

const ChooseUs = () => {
  const sectionTwo = data.filter((card) => card.section == "homePageTwo");

  return (
    <div className="bg-[#F5EAD6] pt-[120px] ">
      <div className="text-center">
        <h1 className="lg:text-5xl md:text-4xl text-2xl  font-medium text-[#291E0A] ">
        Why Choose McFestines
        </h1>
        <span className="lg:text-2xl md:text-xl text-sm  font-medium text-[#404040] ">
          We offer quality food, groceries and services.
        </span>
      </div>
      <div className="flex flex-wrap md:flex-nowrap lg:flex-row gap-6 md:gap-5 lg:gap-20 items-center justify-center md:py-16 py-8 md:mx-5 lg:mx-0">
      {sectionTwo.map((card, index) => (
        <Card
          key={index}
          img={card.img}
          title={card.title}
          description={card.description}
          rotate={card.rotate}
          negateRotate={card.negateRotate}
        />
      ))}
      </div>
    </div>
  );
};

export default ChooseUs;
