import React from "react";
import { logo, logo1 } from "../assets";

const Footer = () => {
  return (
    <div className=" bg-black pb-4">
      <div className="public-container">
        <div className="pt-32 pb-10">
          <div>
            <img src={logo1} alt="logo" className="text-white" />
          </div>
        </div>
        <div></div>
      </div>
      <div className="bg-black ">
        <div className="public-container text-white flex flex-col-reverse md:flex-row gap-4 ">
          <p className=" text-sm md:text-xl font-light">Made with ❤️</p>
          <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
            <div className="flex gap-1">
              <span>•</span>
              <span className=" text-sm md:text-xl font-light">
                Privacy policy
              </span>
            </div>
            <div className="flex gap-1">
              <span>•</span>
              <span className=" text-sm md:text-xl font-light">
                {" "}
                Terms of usage
              </span>
            </div>
            <div className="flex gap-1">
              <span>•</span>
              <span className=" text-sm md:text-xl font-light">
                Cancellation policy
              </span>
            </div>
            <div className="flex gap-1">
              <span>•</span>
              <span className=" text-sm md:text-xl font-light">Sitemap</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
