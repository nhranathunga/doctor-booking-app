import React, { useEffect, useState } from "react";
import { spacialty } from "../assets/specialty";
import DoctorCard from "./DoctorCard";
import { doctors } from "../assets/specialty";

const AllDoctors = ({ docsp }) => {
  const [alldoctors, setalldoctors] = useState(doctors);

  console.log(docsp);
  const filterspecialist = (specialty) => {
    const filtered = doctors.filter((doc) => doc.specialty == specialty);
    setalldoctors(filtered);
  };

  return (
    <>
      <div className="grid grid-cols-8 gap-3">
        <div className="flex flex-col gap-5 items-start py-10 mt-20">
          {spacialty.map((special, index) => {
            return (
              <p
                className="w-48 border-b-2 border-emerald-600 px-4 py-2 mb-2 rounded hover:bg-emerald-100 cursor-pointer transition-all duration-200"
                key={index}
                onClick={() => filterspecialist(special.special)}
              >
                {special.specialty}
              </p>
            );
          })}
        </div>
        <div className="col-span-7 ...">
          <div className="flex flex-col gap-5 items-center py-10">
            <h1 className="text-emerald-950 font-medium text-3xl  ">
              All Doctors
            </h1>

            <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 pt-6 px-4">
              {alldoctors.map((doctor, index) => (
                <DoctorCard
                  key={index}
                  image={doctor.image}
                  name={doctor.name}
                  specialty={doctor.specialty}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllDoctors;
