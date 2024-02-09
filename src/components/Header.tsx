import { IoMdLock } from "react-icons/io";
import { FaRegCircleQuestion } from "react-icons/fa6";
import { logo } from "../assets";
import { GoArrowLeft } from "react-icons/go";
const Header = () => {
  return (
    <div>
      <div className=" flex items-center public-container justify-between bg-[#F9F9FB40] h-[72px] ">
        <img src={logo} alt="logo" className="md:block hidden" />
        <div className="text-2xl">
          <GoArrowLeft />
        </div>

        <p className="flex items-center gap-2 text-xl text-gray-500">
          <IoMdLock className="text-2xl" />
          Checkout
        </p>
        <p className="flex items-center gap-2 text-xl font-[#FFFFFF] ">
          <FaRegCircleQuestion className="text-2xl" />
          <span className="hidden md:block">Help</span>
        </p>
      </div>
      <div className="text-center bg-black text-white">
        <p className="py-[10px] px-[20px]">
          Checkout Help Holding your tickets for 30:00
        </p>
      </div>
    </div>
  );
};

export default Header;
