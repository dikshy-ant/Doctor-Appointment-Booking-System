import React from "react";
import Button from "./Button";

const Sidebar = () => {
  return (
    <div className="w-full md:w-[20%] bg-[#f9f9f9] p-6 rounded-2xl  sticky top-30 flex flex-col justify-between transition-all duration-300 hover:scale-105 h-full">
      {/* Top Section: Filters */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Filter Doctors
        </h2>

        {/* Specialization */}
        <div>
          <p className="text-sm font-semibold text-gray-700 mb-2">
            Specialization
          </p>
          <div className="flex flex-col gap-2">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                name="specialization"
                value="General Physician"
                className="text-blue-500"
              />
              General Physician
            </label>
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                name="specialization"
                value="Cardiologist"
                className="text-blue-500"
              />
              Cardiologist
            </label>
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                name="specialization"
                value="Dentist"
                className="text-blue-500"
              />
              Dentist
            </label>
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                name="specialization"
                value="Dermatologist"
                className="bg-[var(--button-bg)]"
              />
              Dermatologist
            </label>
          </div>
        </div>

        {/* Gender */}
        <div>
          <p className="text-sm font-semibold text-gray-700 mb-2">Gender</p>
          <div className="flex flex-col gap-2">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="gender"
                value="male"
                className="text-blue-500"
              />
              Male
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="gender"
                value="female"
                className="text-blue-500"
              />
              Female
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="gender"
                value="any"
                className="text-blue-500"
              />
              Any
            </label>
          </div>
        </div>

        {/* Availability */}
        <div>
          <p className="text-sm font-semibold text-gray-700 mb-2">
            Availability
          </p>
          <div className="flex flex-col gap-2">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                name="availability"
                value="Morning"
                className="text-blue-500"
              />
              Morning
            </label>
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                name="availability"
                value="Afternoon"
                className="text-blue-500"
              />
              Afternoon
            </label>
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                name="availability"
                value="Evening"
                className="text-blue-500"
              />
              Evening
            </label>
          </div>
        </div>
      </div>

      {/* Bottom Section: Buttons */}
      <div className="mt-6 flex flex-col gap-3">
        <Button label="Apply" />
      </div>
    </div>
  );
};

export default Sidebar;
