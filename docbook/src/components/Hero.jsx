import React from "react";
import { assets } from "../assets/assets";

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row flex-wrap  bg-emerald-600 text-white mt-5 px-20 rounded-sm">
      {/* left side */}
      <div className=" md:w-1/2 flex flex-col items-start justify-center gap-4 mb-30">
        <p className="font-bold text-3xl pt-30  ">
          Book Appointment <br /> With Trusted Doctors
        </p>
        <div>
          <p className=" text-sm w-2/3">
            Lorem ipsum dolor sit amet consectetur suscipit ipsam mollitia,
            possimus laudantium minima Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Quae provident aperiam sed ipsum numquam
            necessitatibus! Architecto veritatis itaque, repudiandae dicta
            ratione, quam hic suscipit culpa cumque velit, minima recusandae
            harum. !
          </p>
        </div>
        <a
          href="#spacialty"
          className="bg-emerald-50  text-emerald-800 mt-2 rounded-3xl py-3 outline-0 flex justify-center items-center w-40"
        >
          Book appointment
        </a>
      </div>
      {/* right side */}
      <div className="md:w-1/2 flex justify-center relative">
        <img
          className="w-11/12 absolute bottom-0 h-auto rounded-lg"
          src={assets.hero01}
        />
      </div>
    </div>
  );
};

export default Hero;
