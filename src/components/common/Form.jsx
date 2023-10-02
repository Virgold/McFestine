import React, { useEffect, useState } from "react";
import Button from "./Button";

const Form = () => {
  const [placeholder, setPlaceholder] = useState("Date");

  const changePlaceholder = (newPlaceholder) => {
    setPlaceholder(newPlaceholder);
  };

  useEffect(() => {
    changePlaceholder("Date");
  }, [placeholder]);
  return (
    <div className="container lg:w-1/2 ">
      <form action="" className="w-4/5 m-auto gap-3 md:gap-5 flex flex-col justify-between h-full ">
        <input
          type="number"
          id="visitors"
          className="bg-gray-50 border border-gray-300 text-gray-900 rounded-full text-sm md:text-base focus:ring-blue-500 focus:border-blue-500 block w-full py-2 px-3 md:py-4 md:px-6 input-outline "
          placeholder="Number of guests"
          required
        />

        <div className="flex justify-between">
          <input
            type="date"
            id="date"
            className="bg-gray-50 border border-gray-300 text-gray-900 rounded-full text-sm md:text-base focus:ring-blue-500 focus:border-blue-500 block w-[45%] py-2 px-3 md:py-4 md:px-6 "
            placeholder={placeholder}
            required
          ></input>

          <div className=" inline-flex items-center bg-gray-50 border border-gray-300 text-gray-900 w-[45%] rounded-full text-sm md:text-base focus:ring-blue-500 focus:border-blue-500 block py-2 px-3 md:py-4 md:px-6 ">
            <input
              type="select"
              id="date"
              className="h-full w-full text-sm md:text-base input-outline bg-gray-50 text-gray-900 "
              placeholder="Dinner"
              required
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 ml-2"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
          </div>
        </div>

        <input
          type="tel"
          id="phone"
          className="bg-gray-50 border border-gray-300 text-gray-900 rounded-full text-sm md:text-base focus:ring-blue-500 focus:border-blue-500 block w-full py-2 px-3 md:py-4 md:px-6 input-outline "
          placeholder="Phone No."
          required
        />

        <textarea
          id="message"
          rows="6"
          class="block py-2 px-3 md:py-4 md:px-6  w-full text-sm md:text-base text-base text-gray-900 bg-gray-50 rounded-xl border border-gray-300 focus:ring-blue-500 focus:border-blue-500 input-outline "
          placeholder="Your Message..."
        ></textarea>

        <Button 
        styles="bg-[#CF9832] w-full rounded-full py-2 px-3 md:py-4 md:px-6 text-white hover:opacity-90  "
        text="Send Message"/>
      </form>
    </div>
  );
};

export default Form;
