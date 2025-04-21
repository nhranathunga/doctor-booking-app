import React from "react";
import { assets } from "../assets/assets";

const Banner1 = () => {
  return (
    <>
      <div className="flex justify-center mt-8 mb-5">
        <div className="w-6xl h-72 bg-emerald-600 border-0 rounded-xl relative">
          <img src={assets.db1} className=" h-65 absolute right-35 top-7" />
          <p className="text-4xl text-white font-medium ml-25 mt-15">
            "Skip the Wait. See a Doctor <br /> When You Need One!"
          </p>
          <p className="text-1xl text-white font-medium ml-25 mt-5">
            Your health, our priority. Schedule visits with certified
            professionals in just a few clicks.
          </p>
        </div>
      </div>
    </>
  );
};

export default Banner1;
