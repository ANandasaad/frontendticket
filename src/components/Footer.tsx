import React from "react";
import { logo, logo1 } from "../assets";

const Footer = () => {
  return (
    <div className=" bg-black">
      <div className="public-container">
        <div className="pt-32 pb-10">
          <div>
            <img src={logo1} alt="logo" className="text-white" />
          </div>
        </div>
        <div></div>
      </div>
      <div className="bg-black">
        <div className="public-container text-white flex items-center gap-4 py-4 px-3 font-thin">
          <p>Made with ❤️</p>
          <p>•</p>
          <p>Privacy policy</p>
          <p>•</p>
          <p>Terms of usage</p>
          <p>•</p>
          <p>Cancellation policy</p>
          <p>•</p>
          <p>Sitemap</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
