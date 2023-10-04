import React from "react";
import { data } from "../../assets/data/data";
import Card from "../about/Card";

const ChooseUs = () => {

  const sectionTwo = data.filter((card) => card.section == "homePageTwo");

  return (
    <div className="bg-[#F5EAD6] pt-[120px] flex flex-wrap gap-6 md:gap-11 lg:gap-20 items-center justify-center">
      {sectionTwo.map((card) => (
        <Card
          key={card.id}
          img={card.img}
          title={card.title}
          description={card.description}
          rotate={card.rotate}
          negateRotate={card.negateRotate}
        />
      ))}
    </div>
  );
};

export default ChooseUs;
