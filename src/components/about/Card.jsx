import React from "react";

const Card = (props) => {
  const { img, title, description } = props;
  return (
    <div className="lg:w-1/4 md:w-1/3 w-5/6 h-[309px] bg-[#FDFDFD] flex items-center border border-[#B3B3B3] rounded-lg hover:shadow-xl transition duration-500 ">
      <div className="flex flex-col justify-around mx-8 items-center lg:items-start text-center lg:text-start gap-3">
        <img src={img} alt="" className="w-16 h-16 " />
        <h1 className="text-xl font-semibold text-[#1A1A1A] ">{title}</h1>
        <p className="text-base font-normal">{description}</p>
      </div>
    </div>
  );
};

export default Card;
