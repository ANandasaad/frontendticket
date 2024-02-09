import { IoIosInformationCircle } from "react-icons/io";

import { CiCreditCard1 } from "react-icons/ci";
import { ImRadioChecked2 } from "react-icons/im";
import { apple, dinerclub, google, mastercard, visa } from "../assets";
import { FaPiggyBank } from "react-icons/fa6";
import { CiCircleInfo } from "react-icons/ci";
import { IoMdLock } from "react-icons/io";
import { IoIosRadioButtonOff } from "react-icons/io";
import SideBar from "./SideBar";

const Body = () => {
  return (
    <div className="">
      <div className="public-container  md:grid grid-cols-12 gap-4 flex flex-col-reverse">
        <div className="col-span-8 ">
          <div className="flex flex-col gap-20">
            <div className="row-span-2 ">
              <div className="flex flex-col gap-7">
                <div className=" items-start pb-7">
                  <p className="text-5xl font-serif md:block hidden">
                    Confirm & Pay
                  </p>
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
            <div className="">
              <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-2 ">
                  <h3 className="text-2xl font-normal">Enter your details</h3>
                  <p className="py-3 text-gray-500 font-normal">
                    We'll be sending our tickets to the details below. Booking
                    for friend? Add their details.
                  </p>
                </div>
                <div className=" flex flex-col gap-10">
                  <form>
                    <div className="flex flex-col gap-3 md:flex-col ">
                      <input
                        type="text"
                        placeholder="Full name *"
                        className="border py-3 px-3 rounded-2xl w-full"
                      />
                      <div className="flex justify-between items-center gap-4 flex-col md:flex-row">
                        <div className="w-full border rounded-2xl py-3 px-3 text-gray-500">
                          <select
                            name=""
                            id=""
                            className="w-full outline-none border-none"
                          >
                            <option value="">
                              Country Code{" "}
                              <span className=" text-red-500">*</span>
                            </option>
                          </select>
                        </div>

                        <input
                          type="text"
                          placeholder="Phone number *"
                          className="border py-3 px-3 rounded-2xl w-full"
                        />
                      </div>
                      <div className="flex justify-between items-center  flex-col gap-4 md:flex-row">
                        <input
                          type="text"
                          placeholder="Email *"
                          className="border py-3 px-3 rounded-2xl w-full"
                        />
                        <input
                          type="text"
                          placeholder="Confirm email *"
                          className="border py-3 px-3 rounded-2xl w-full"
                        />
                      </div>
                    </div>
                  </form>
                  <hr></hr>
                </div>
              </div>
            </div>
            <div className="">
              <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-2 ">
                  <h3 className="text-2xl font-normal">
                    Additional information
                  </h3>
                  <p className="py-3 text-gray-500 font-normal">
                    We need a few more details to complete your reservation.
                  </p>
                </div>
                <div className=" flex flex-col gap-10">
                  <form>
                    <div className="flex flex-col gap-3 ">
                      <div className="flex justify-between items-center gap-4 flex-col md:flex-row">
                        <input
                          type="text"
                          placeholder="Input label *"
                          className="border py-3 px-3 rounded-2xl w-full"
                        />
                        <div className="w-full border rounded-2xl py-3 px-3 text-gray-500">
                          <select
                            name=""
                            id=""
                            className="w-full outline-none border-none"
                          >
                            <option value="">
                              Select
                              <span className=" text-red-500"> *</span>
                            </option>
                          </select>
                        </div>
                      </div>
                      <div className="flex justify-between items-center gap-4">
                        <div className="w-full border rounded-2xl py-3 px-3 text-gray-500">
                          <select
                            name=""
                            id=""
                            className="w-full outline-none border-none"
                          >
                            <option value="">
                              MultiSelect
                              <span className=" text-red-500"> *</span>
                            </option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </form>
                  <hr></hr>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-2 ">
                <h3 className="text-2xl font-normal">
                  Select your mode of payment
                </h3>
                <p className="py-3 text-gray-500 font-normal">
                  Payments with Tickete are secure and encrypted.
                </p>
              </div>
              <div className="flex flex-col gap-4 ">
                <div className="flex flex-col gap-7 border border-black py-3 px-3 rounded-2xl">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center justify-between gap-3">
                      <CiCreditCard1 className="text-2xl border" />
                      <p className="font-normal">Credit & debit card</p>
                    </div>
                    <div>
                      <ImRadioChecked2 className="text-2xl" />
                    </div>
                  </div>
                  <div className="flex items-center gap-2 ">
                    <img src={visa} alt="visa" />
                    <img src={mastercard} alt=" mastercard" />
                    <img src={dinerclub} alt="dinerclub" />
                  </div>
                  <div className=" flex flex-col gap-10">
                    <form>
                      <div className="flex flex-col gap-4">
                        <div className="flex md:flex-row flex-col gap-4 ">
                          <input
                            type="text"
                            placeholder="Name on card *"
                            className="border py-3 px-3 rounded-2xl w-full"
                          />

                          <input
                            type="text"
                            placeholder="Card number *"
                            className="border py-3 px-3 rounded-2xl w-full"
                          />
                        </div>
                        <div className="flex md:flex-row flex-col gap-4">
                          <input
                            type="text"
                            placeholder="Expiry date *"
                            className="border py-3 px-3 rounded-2xl w-full"
                          />
                          <input
                            type="text"
                            placeholder="<CVV/CVC> *"
                            className="border py-3 px-3 rounded-2xl w-full"
                          />
                        </div>
                      </div>
                    </form>
                    <hr></hr>
                  </div>
                  <div className="flex flex-col gap-5">
                    <div>
                      <div className="flex md:items-center md:justify-between flex-col-reverse  md:flex-row md:gap-4 gap-4">
                        <div className="flex items-center ">
                          <h3>Total payable:</h3>
                          <h3>$XXX</h3>
                        </div>
                        <div className="flex items-center gap-2 bg-green-700 text-white  px-1 rounded-3xl w-48">
                          <p>
                            <FaPiggyBank />
                          </p>
                          <p className="px-1">You save {"<price>"} </p>
                        </div>
                      </div>
                      <div className="my-4">
                        <p className="flex items-center gap-1  font-normal text-sm text-gray-400">
                          You will be charged in AED <CiCircleInfo />
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col gap-4 justify-center items-center md:items-start">
                      <p className="text-sm text-gray-400 font-thin md:text-left ">
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
                      <button className="flex items-center  gap-4 bg-black md:w-52 w-full text-white justify-center py-4 px-3 rounded-2xl">
                        <IoMdLock className="text-2xl" />
                        Confirm & pay
                      </button>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between border py-5 px-5 rounded-xl bg-gray-50">
                  <div className="flex items-center gap-3 ">
                    <img
                      src={apple}
                      alt="apple pay"
                      className="h-5 border rounded-md bg-gray-300 py-1 px-2"
                    />
                    <p className="text-gray-400">Coming soon</p>
                  </div>
                  <div className=" bg-gray-300 rounded-full">
                    <IoIosRadioButtonOff className="text-2xl text-gray-300" />
                  </div>
                </div>
                <div className="flex items-center justify-between border py-5 px-5 rounded-xl bg-gray-50">
                  <div className="flex items-center gap-3 ">
                    <img
                      src={google}
                      alt="apple pay"
                      className="h-5 border rounded-md bg-gray-300 py-1 px-2"
                    />
                    <p className="text-gray-400">Coming soon </p>
                  </div>
                  <div className=" bg-gray-300 rounded-full">
                    <IoIosRadioButtonOff className="text-2xl text-gray-300" />
                  </div>
                </div>
              </div>
              <hr></hr>
            </div>
            <div className="flex flex-col gap-3">
              <div>
                <h2 className="text-2xl">Total Payable: $XXX</h2>
              </div>
              <div className="flex items-start gap-3 py-3 px-4 border rounded-xl">
                <div>
                  <CiCircleInfo className="text-white bg-black rounded-full " />
                </div>
                <div>
                  <div className="flex flex-col gap-2">
                    <p className="font-normal">You will be charged in AED</p>
                    <p className="text-sm text-gray-500">
                      The price shown here is in US Dollar (USD) as per the
                      current conversion rate. You will be charged in United
                      Arab Emirates Dirham (AED).
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <hr></hr>
          </div>
        </div>
        <div className="col-span-4 ">
          <SideBar />
        </div>
      </div>
    </div>
  );
};

export default Body;
