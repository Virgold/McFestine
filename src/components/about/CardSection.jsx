import React from "react";
import { data } from "../../assets/data/data";
import Card from "./Card";

const CardSection = () => {
  
  const aboutCard = data.filter((card) => card.section == "AboutUs");

  return (
    <div className="flex flex-wrap gap-6 md:gap-11 lg:gap-20 items-center justify-center ">
      {aboutCard.map((card) => (
        <Card
          key={card.id}
          img={card.img}
          title={card.title}
          description={card.description}
        />
      ))}
    </div>
  );
};

export default CardSection;
