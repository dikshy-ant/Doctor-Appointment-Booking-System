import React, { useState } from "react";

const Dates = () => {
  const [selectedDay, setSelectedDay] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedMode, setSelectedMode] = useState(null);

  return (
    <div className="bg-[var(--bg)] w-full rounded-2xl p-6 sm:p-10 flex flex-col gap-5 shadow-lg items-center mx-auto my-7">
      {/* Title */}
      <p className="font-semibold text-white text-lg sm:text-xl mb-2">Dates</p>

      {/* Days */}
      <div className="flex flex-wrap justify-center gap-2 mb-4">
        {["Mon", "Tue", "Wed"].map((day, index) => (
          <button
            key={index}
            onClick={() => setSelectedDay(day)} // set clicked day
            className={`py-2 px-4 rounded-lg border transition cursor-pointer text-sm sm:text-base 
              ${
                selectedDay === day
                  ? "bg-gray-700 text-white" // active style
                  : "bg-white hover:bg-gray-100" // default style
              }`}
          >
            {day}
          </button>
        ))}
      </div>

      {/* Time slots */}
      <div className="flex flex-col items-center gap-3 w-full">
        <p className="font-semibold text-white text-lg sm:text-xl mb-2">
          Available Time Slots
        </p>
        <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-3 justify-center w-full">
          {["09:00 AM", "10:00 AM", "11:00 AM", "01:00 PM", "02:00 PM"].map(
            (slot, index) => (
              <button
                key={index}
                onClick={() => setSelectedTime(slot)} //
                className={`py-2 px-4 rounded-lg border transition cursor-pointer text-sm sm:text-base 
              ${
                selectedTime === slot
                  ? "bg-gray-700 text-white"
                  : "bg-white hover:bg-gray-100"
              }`}
              >
                {slot}
              </button>
            )
          )}
        </div>
      </div>

      <div className="flex flex-col items-center gap-3 w-full">
        <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-3 justify-center w-full">
          {["Online", "Physical"].map((slot, index) => (
            <button
              key={index}
              onClick={() => setSelectedMode(slot)} //
              className={`py-2 px-4 rounded-lg border transition cursor-pointer text-sm sm:text-base 
              ${
                selectedMode === slot
                  ? "bg-gray-700 text-white"
                  : "bg-white hover:bg-gray-100"
              }`}
            >
              {slot}
            </button>
          ))}
        </div>
      </div>
      {/* Book button */}
      <div className="mx-auto mt-4">
        <button className="bg-[#f2f2f2] text-black font-bold py-3 sm:py-4 px-8 sm:px-12 rounded-2xl shadow-lg cursor-pointer text-sm sm:text-base">
          Book Appointment
        </button>
      </div>
    </div>
  );
};

export default Dates;
