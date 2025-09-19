import React from "react";
import doctorImage from "../assets/images/Doctor5.webp";

const DoctorDetails = () => {
  return (
    <div className="w-full max-w-full mx-auto rounded-xl flex flex-col md:flex-row shadow-lg overflow-hidden min-h-[400px]">
      {/* Doctor Image Section */}
      <div className="w-full md:w-1/3 min-h-[300px] md:min-h-[400px]">
        <img
          src={doctorImage}
          alt="Doctor"
          className="w-full h-full object-cover rounded-t-xl md:rounded-l-xl md:rounded-tr-none"
        />
      </div>

      {/* Doctor Details */}
      <div className="w-full md:w-2/3 p-6 sm:p-10 lg:p-12 bg-[var(--color-surface)] space-y-6">
        {/* Name and Title */}
        <div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--text-strong)] flex items-center gap-3">
            Safal Adhikari
            <span className="bg-blue-600 text-white rounded-full text-sm flex items-center justify-center h-6 w-6 sm:h-7 sm:w-7">
              ✓
            </span>
          </h1>
          <p className="text-[var(--text-secondary)] text-base sm:text-lg mt-3">
            MBBS - General Physician
            <span className="text-[var(--text-muted)]">&nbsp;•&nbsp; 4 Years</span>
          </p>
        </div>

        {/* About Section */}
        <div>
          <h2 className="text-xl sm:text-2xl font-semibold text-[var(--text-strong)] flex items-center gap-2">
            About
            <span className="bg-gray-400 text-[var(--text-strong)] rounded-full text-xs flex items-center justify-center h-5 w-5 sm:h-6 sm:w-6">
              i
            </span>
          </h2>
          <p className="text-[var(--text-muted)] text-base sm:text-lg mt-3 leading-relaxed">
            Dr. Adhikari (Kaaaaaley) has a strong commitment to delivering
            comprehensive medical care, focusing on preventive medicine, early
            diagnosis, and effective treatment strategies. He is passionate
            about building strong patient-doctor relationships and ensuring
            holistic care.
          </p>
        </div>

        {/* Appointment Fee */}
        <p className="text-[var(--text-strong)] font-semibold text-xl sm:text-2xl">
          Appointment fee: <span className="font-bold">$50</span>
        </p>
      </div>
    </div>
  );
};

export default DoctorDetails;
