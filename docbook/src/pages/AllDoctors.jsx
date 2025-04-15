import React from "react";
import AllDoctors from "../components/AllDoctors";
import { useParams } from "react-router";

const AllDoctor = () => {
  
let docsp = useParams();
  return <AllDoctors docsp={docsp}  />;
};

export default AllDoctor;
