import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import doctorData from "../DoctorsData";
import DoctorCard from "../Components/Doctors";
import Sidebar from "../Components/Sidebar";
import Searchbar from "../Components/Searchbar";
import { Link } from "react-router-dom";

const Doctors = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="min-h-screen">
      <div className="pt-15 flex flex-col md:flex-row gap-8 px-4 md:px-8">
        {/* Filter Sidebar */}
        <Sidebar />

        {/* Doctor Cards */}

        <div className="flex-1">
          <div className="w-full">
            <Searchbar />
          </div>
          {/* Title */}
          <div className="w-full text-center transition-all duration-300 hover:scale-105 mb-6">
            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900">
              Speciality
            </h1>
          </div>

          {/* Doctor Cards */}
          <div className="w-full mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {doctorData.map((doctor, index) => (
              <DoctorCard
                image={doctor.image}
                name={doctor.name}
                specialty={doctor.specialty}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Doctors;
