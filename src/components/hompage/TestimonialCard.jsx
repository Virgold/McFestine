import React from "react";

const TestimonialCard = (props) => {
  const { testimony, img, name, title, isActive } = props;

  return (
    <div className="w-[90%] h-[500px] flex flex-col items-center">
      <div
        className={`w-full m-auto  text-center rounded-md flex flex-col items-center relative shadow-xl overflow-hidden ${
          isActive ? "opacity-100" : "opacity-60"
        } ${isActive ? "h-full" : "h-[458px]"}`}
      >
        <div className="h-3/5 bg-[#5D4216] text-xl font-normal text-[#F5F5F5] rounded-b-md ">
          <p className="p-8">{testimony}</p>
        </div>
        <div className="absolute top-2/4 w-full flex flex-col items-center">
          <img
            src={img}
            alt=""
            className="rounded-full w-24 h-24 object-cover"
          />
          <h1 className="text-2xl pt-4 ">{name}</h1>
          <span className="text-xl pt-3">{title}</span>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
