import React from "react";
import { illustrations } from "../assets";
import { GoPlus } from "react-icons/go";
import { RxCross2 } from "react-icons/rx";

const FAQ = () => {
  return (
    <div className="">
      <div className="public-container flex flex-col gap-4  ">
        <div className="flex justify-between gap-20">
          <div className="flex flex-col gap-3 w-full ">
            <div className="flex flex-col gap-3">
              <h3 className="text-3xl">Frequently asked questions</h3>
              <p className="text-gray-500">
                Here are some of our most asked questions
              </p>
            </div>
            <div className="flex items-center justify-between py-4 px-10 bg-gray-50 rounded-xl">
              <div className="w-40 flex flex-col items-start gap-3">
                <p className="font-normal">
                  Still need help?  We’re here for you.
                </p>
                <button className="bg-black text-white py-3 px-3 rounded-xl">
                  Chat with us
                </button>
              </div>
              <div>
                <img src={illustrations} alt="" className="h-28" />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center gap-5">
            <div className="flex items-center gap-4 border-2 border-gray-300 py-4 px-4 rounded-xl w-[690px]">
              <p className="text-3xl text-gray-500">
                <GoPlus />
              </p>
              <p>What should I do on my first trip to Rome?</p>
            </div>
            <div className="flex  items-start gap-4 border-2 border-gray-300 py-4 px-4 rounded-xl w-[690px]">
              <div className="">
                <p className="text-3xl text-gray-500">
                  <RxCross2 />
                </p>
              </div>
              <div className="w-[500px] flex flex-col gap-4">
                <p>What are some hidden gems to see in Rome?</p>
                <p className="text-sm font-thin">
                  Rome is packed with hidden gems. If you love art, don't miss
                  the Galleria Doria Pamphilj or Palazzo Barberini. The Museo
                  Barracco is a free museum and well worth a quick visit. If you
                  love the ancient stuff, don't miss the Domus Romana at Palazzo
                  Valentini, the Domus Aurea, and the Baths of Caracalla. For
                  even more hidden gems, take a tour of Trastevere, a
                  fascinating neighborhood full of history and ambiance.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4 border-2 border-gray-300 py-4 px-4 rounded-xl w-[690px]">
              <p className="text-3xl text-gray-500">
                <GoPlus />
              </p>
              <p>How much time should I spend in Rome?</p>
            </div>
            <div className="flex items-center gap-4 border-2 border-gray-300 py-4 px-4 rounded-xl w-[690px]">
              <p className="text-3xl text-gray-500">
                <GoPlus />
              </p>
              <p>What food is Rome known for?</p>
            </div>
            <div className="flex items-center gap-4 border-2 border-gray-300 py-4 px-4 rounded-xl w-[690px]">
              <p className="text-3xl text-gray-500">
                <GoPlus />
              </p>
              <p>What is the best way to get around Rome?</p>
            </div>
          </div>
        </div>
        <hr className="border-1" />
        <div>adsufhydhiou</div>
      </div>
    </div>
  );
};

export default FAQ;
