import React from "react";
import { doctors } from "../assets/specialty";
import DoctorCard from "./DoctorCard";

const TopDoctors = () => {
  return (
    <div className="flex flex-col gap-5 items-center py-10">
      <h1 className="text-emerald-950 font-medium text-3xl  ">Top Doctors</h1>
      <p className="text-emerald-800 text-md text-center py-3">
        All the top doctors are here. Please come and join us!
      </p>

      <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 pt-6 px-4">
        {doctors.slice(0, 10).map((doctor, index) => (
          <DoctorCard
            index={index}
            image={doctor.image}
            name={doctor.name}
            specialty={doctor.specialty}
          />
        ))}
      </div>
    </div>
  );
};

export default TopDoctors;
