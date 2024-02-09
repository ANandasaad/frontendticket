import React, { useState } from "react";

import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";

export const Carousel = ({ data }: any) => {
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide(slide === data.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? data.length - 1 : slide - 1);
  };

  return (
    <div className=" relative flex justify-center items-center w-600 h-400 bg-white">
      <FaChevronLeft
        onClick={prevSlide}
        className=" absolute left-1 bg-gray-50 opacity-55 text-2xl rounded-full font-thin"
      />
      {data.map(
        (
          item: { src: string | undefined; alt: string | undefined },
          idx: React.Key | null
        ) => {
          return (
            <img
              src={item.src}
              alt={item.alt}
              key={idx}
              className={
                slide === idx
                  ? "w-[600px] h-[300px] rounded-md shadow-md"
                  : "slide hidden"
              }
            />
          );
        }
      )}
      <FaChevronRight
        onClick={nextSlide}
        className=" absolute right-1  bg-gray-50 opacity-55 text-2xl rounded-full font-thin"
      />
      <span className="absolute bottom-1">
        {data.map((_: any, idx: any) => {
          let buttonSizeClass = "w-2 h-2"; // Default button size class

          // Check if it's the first or last button
          if (idx === 0 || idx === data.length - 1) {
            buttonSizeClass = "w-1 h-1"; // If first or last, set to 1px size
          }

          return (
            <button
              key={idx}
              className={`${
                slide === idx
                  ? "bg-white w-5 h-2  shadow-md m-1 transition-all duration-700 ease-out"
                  : "bg-gray-400 h-2 shadow-md m-1"
              } ${buttonSizeClass} rounded-full`}
              onClick={() => setSlide(idx)}
            ></button>
          );
        })}
      </span>
    </div>
  );
};
