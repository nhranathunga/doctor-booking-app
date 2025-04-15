import React from "react";
import { spacialty } from "../assets/specialty";
import { Link } from "react-router";

const SpecialList = () => {
  console.log(spacialty);
  return (
    <div id="spacialty" className="flex flex-col  items-center py-10 gap-5 ">
      <h1 className="font-medium text-3xl text-gray-900">Find By Speciality</h1>
      <p className="text-md text-gray-700 sm:w-1/3 text-center">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi
        accusantium numquam, asperiores architecto qui saepe ex aspernatur
        quisquam?
      </p>
      <div className="flex justify-center gap-4 pt-5 w-full overflow-scroll">
        {spacialty.map((special, index) => {
          return (
            <Link
              className="flex flex-col item-center text-sm text-emerald-900 cursor-pointer"
              to={`/alldoctors/:${special.special}`}
              key={index}
            >
              <img
                className="w-16 sm:w-24 h-24 rounded-full object-cover "
                src={special.image}
                alt={special.specialty}
              />
              <p className="text-center">{special.specialty}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default SpecialList;
