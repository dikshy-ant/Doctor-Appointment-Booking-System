import React from "react";
import doctorImage from "../assets/images/Doctor5.webp";

const DoctorDetails = () => {
  return (
    <div className="w-full max-w-[100vw] mx-auto rounded-xl flex shadow-lg overflow-hidden min-h-[350px]">
      {/* Doctor Image Section */}
      <div className="w-1/3 min-h-[350px]">
        <img
          src={doctorImage}
          alt="Doctor"
          className="w-full h-full object-cover rounded-l-xl"
        />
      </div>

      {/* Doctor Details */}
      <div className="w-2/3 p-10 bg-[var(--bg)] space-y-5">
        {/* Name and Title */}
        <div>
          <h1 className="text-2xl font-bold text-white flex items-center gap-2">
            Safal Adhikari
            <span className="bg-blue-600 text-white rounded-full text-sm flex items-center justify-center h-6 w-6">
              ✓
            </span>
          </h1>
          <p className="text-gray-200 text-base mt-2">
            MBBS - General Physician
            <span className="text-gray-300">&nbsp;•&nbsp; 4 Years</span>
          </p>
        </div>

        {/* About Section */}
        <div>
          <h2 className="text-lg font-semibold text-white flex items-center gap-2">
            About
            <span className="bg-gray-400 text-white rounded-full text-xs flex items-center justify-center h-5 w-5">
              i
            </span>
          </h2>
          <p className="text-gray-200 text-base mt-2">
            Dr. Adhikari(Kaaaaaley) has a strong commitment to delivering
            comprehensive medical care, focusing on preventive medicine, early
            diagnosis, and effective treatment strategies. He is passionate
            about building strong patient-doctor relationships and ensuring
            holistic care.
          </p>
        </div>

        {/* Appointment Fee */}
        <p className="text-white font-medium text-lg">
          Appointment fee: <span className="text-yellow-400">$50</span>
        </p>
      </div>
    </div>
  );
};

export default DoctorDetails;
