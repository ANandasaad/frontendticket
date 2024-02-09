import React from "react";
import { rectangle } from "../assets";
import { MdOutlineStar } from "react-icons/md";
import { PiTicketFill } from "react-icons/pi";
import { BsFillCalendar2Fill } from "react-icons/bs";
import { HiMiniClock } from "react-icons/hi2";
import { MdPeopleAlt } from "react-icons/md";
import { GoPlus } from "react-icons/go";
import { CiCircleInfo } from "react-icons/ci";
import { FaPiggyBank } from "react-icons/fa6";
import { IoMdLock } from "react-icons/io";
import SliderBar from "./SliderBar";
const SideBar = () => {
  return (
    <section className="">
      <p className="text-5xl font-serif block  md:hidden pb-10 mt-[-20px]">
        Confirm & Pay
      </p>
      <div className="border-2 border-gray-300 rounded-2xl ">
        <div className="py-4 px-4">
          <div className="flex flex-col gap-2">
            <div className="flex flex-col gap-4">
              <div>
                <img src={rectangle} alt="gallery" />
                {/* <SliderBar /> */}
              </div>
              <div className="flex flex-col gap-5">
                <div className="flex-col gap-3">
                  <div className="flex items-center gap-1">
                    <p>
                      <MdOutlineStar className="text-red-500" />
                    </p>
                    <p>
                      4.9 <span className="text-gray-400">(4.5k)</span>
                    </p>
                    <p>•</p>
                    <p className="text-gray-400">{"<category>"}</p>
                  </div>
                  <p>
                    Amsterdam open boat canal cruise - Live Guiye - from Anne
                    Frank Housef
                  </p>
                </div>
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-4 ">
                    <p className="text-2xl">
                      <PiTicketFill />
                    </p>
                    <p>{"<ticket type - variant>"}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <p className="text-xl">
                      <BsFillCalendar2Fill />
                    </p>
                    <div className="flex flex-col items-center gap-1">
                      <p>{"<day>, <month> <date>"}</p>
                      <p className="text-gray-400 text-sm">
                        {"Duration: <duration>"}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <p className="text-2xl">
                      <HiMiniClock />
                    </p>
                    <div className="flex flex-col items-start gap-1">
                      <p>{"<time>"}</p>
                      <p className="text-gray-400 text-sm">
                        {"Operating hours: <time> to <time>"}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 ">
                    <p className="text-2xl">
                      <MdPeopleAlt />
                    </p>
                    <p>5 guests</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <hr className="border-dashed "></hr>
              <div className="flex items-center justify-between py-4 ">
                <p className="text-gray-500">View payment summary</p>
                <p className="text-2xl">
                  {" "}
                  <GoPlus />
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold">Total payable</h3>
                  <h3 className="font-semibold">$XXX</h3>
                </div>
                <div className="w-40">
                  {" "}
                  <div className="flex items-center gap-2 bg-green-100 text-green-700  px-1 rounded-3xl">
                    <p className="text-sm text-green-700">
                      <FaPiggyBank />
                    </p>
                    <p className="px-1 text-sm">You save {"<price>"} </p>
                  </div>
                </div>
              </div>
              <div>
                <p className="flex items-center gap-1 font-normal text-xs text-gray-600">
                  You will be charged in AED <CiCircleInfo />
                </p>
              </div>
            </div>

            <div>
              <div className="flex flex-col items-center gap-4">
                <p className="text-sm text-left text-gray-400 font-thin">
                  By clicking “confirm & pay”,
                  <a href="#">
                    <span className="text-blue-700 underline">
                      {" "}
                      you agree to Tickete’s general terms
                    </span>{" "}
                  </a>
                  and
                  <a href="#">
                    <span className="text-blue-700 underline">
                      {" "}
                      conditions and cancellation policy.
                    </span>{" "}
                  </a>
                </p>
                <button className="flex items-center gap-10 bg-black w-full text-3xl text-white justify-center py-4 px-3 rounded-2xl">
                  <IoMdLock className="text-4xl" />
                  Confirm & pay
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SideBar;
