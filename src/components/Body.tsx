import React from "react";
import { IoIosInformationCircle } from "react-icons/io";

const Body = () => {
  return (
    <div className=" border border-black">
      <div className="public-container  grid grid-cols-12">
        <div className="col-span-7 border border-red-200">
          <div className="grid grid-rows-12">
            <div className="row-span-2">
              <div className="flex flex-col gap-5">
                <div className="border items-start pb-7">
                  <p className="text-5xl font-serif ">Confirm & Pay</p>
                </div>
                <div className="px-3 border py-4 rounded-xl flex items-center justify-between bg-gray-50">
                  <div className="text-sm ">
                    <p className="">Free cancellation</p>
                    <p className="text-gray-400">
                      Tickets can be cancelled by 13th December, 2022.
                    </p>
                  </div>
                  <div>
                    <IoIosInformationCircle className="text-gray-400" />
                  </div>
                </div>
              </div>
            </div>
            <div className="row-span-2">
              <div>
                <div>
                  <h3>Enter your details</h3>
                </div>
                <div></div>
              </div>
            </div>
            <div className="row-span-2">3</div>
            <div className="row-span-4">4</div>
            <div className="row-span-2">5</div>
          </div>
        </div>
        <div className="col-span-5 border">2</div>
      </div>
    </div>
  );
};

export default Body;
