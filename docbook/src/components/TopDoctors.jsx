import React from "react";
import { doctors } from "../assets/specialty";

const TopDoctors = () => {
  return (
    <div className="flex flex-col gap-5 items-center py-10">
      <h1 className="text-emerald-950 font-medium text-3xl  ">Top Doctors</h1>
      <p className="text-emerald-800 text-md text-center py-3">
        All the top doctors are here. Please come and join us!
      </p>

      <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 pt-6 px-4">
        {doctors.slice(0, 10).map((doctor, index) => (
          <div
            className="relative bg-emerald-50 rounded-xl shadow-md p-4 flex flex-col items-center text-center"
            key={index}
          >
            <p className="absolute top-2 right-2 text-xs bg-emerald-200 text-emerald-800 px-2 py-1 rounded-full">
              Available
            </p>
            <img
              className="w-24 h-24 rounded-full object-cover mb-3"
              src={doctor.image}
              alt={doctor.name}
            />
            <p className="text-sm text-emerald-600">{doctor.specialty}</p>
            <h3 className="text-md font-semibold text-gray-900">
              {doctor.name}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopDoctors;
