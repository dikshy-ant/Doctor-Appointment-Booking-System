import React from "react";
import Button from "./Button";

const Sidebar = () => {
  return (
    <div className="w-full md:w-[20%] bg-[var(--color-panel)] p-6 rounded-2xl h-fit sticky top-20 flex flex-col justify-between ">
      {/* Top Section: Filters */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-[var(--text-strong)] mb-2">
          Filter Doctors
        </h2>
        <div className=" flex flex-col gap-4 text-sm text-[var(--text-muted)]">
          <p className="w-[80%] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ">
            Gynecologist
          </p>
          <p className="w-[80%] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer">
            Cardiologist
          </p>
          <p className="w-[80%] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer">
            Pediatritain
          </p>
          <p className="w-[80%] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ">
            Dermatologist
          </p>
          <p className="w-[80%] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer">
            Neurologist
          </p>
          <p className="w-[80%] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded  transition-all cursor-pointer">
            Psychiratrist
          </p>
          <p className="w-[80%] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer">
            Physician
          </p>
          <p className="w-[80%] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer">
            Neuro Surgeon
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
