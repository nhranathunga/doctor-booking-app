import React from "react";

const DoctorCard = ({ index, image, name, specialty }) => {
  return (
    <>
      <div
        className="relative bg-emerald-50 rounded-xl shadow-md p-4 flex flex-col items-center text-center"
        key={index}
      >
        <p className="absolute top-2 right-2 text-xs bg-emerald-200 text-emerald-800 px-2 py-1 rounded-full">
          Available
        </p>
        <img
          className="w-24 h-24 rounded-full object-cover mb-3"
          src={image}
          alt={name}
        />
        <p className="text-sm text-emerald-600">{specialty}</p>
        <h3 className="text-md font-semibold text-gray-900">{name}</h3>
      </div>
    </>
  );
};

export default DoctorCard;
