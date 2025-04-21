import React, { useState } from "react";
import { doctors } from "../assets/specialty";
import DoctorCard from "./DoctorCard";

const TopDoctors = () => {
  const [moreDoctor, setMoreDoctor] = useState(10);

  return (
    <div className="flex flex-col gap-5 items-center py-10">
      <h1 className="text-emerald-950 font-medium text-3xl  ">Top Doctors</h1>
      <p className="text-emerald-800 text-md text-center py-3">
        All the top doctors are here. Please come and join us!
      </p>

      <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 py-6 px-4">
        {doctors.slice(0, moreDoctor).map((doctor, index) => (
          <DoctorCard
            index={index}
            image={doctor.image}
            name={doctor.name}
            specialty={doctor.specialty}
          />
        ))}
      </div>
      <button
        className="flex justify-center items-center w-40 border border-emerald-600 rounded-lg py-2 cursor-pointer"
        onClick={() => {
          setMoreDoctor(moreDoctor + 10);
        }}
      >
        More
      </button>
    </div>
  );
};

export default TopDoctors;
