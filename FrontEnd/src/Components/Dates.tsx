import React from "react";
import Button from "./Button";

const Dates = () => {
  return (
    <div className="bg-[#f2f2f2] w-[100vw] rounded-2xl p-10 flex flex-col gap-3  shadow-lg items-center mx-auto my-7  relativeright-0 ">
      <p className="font-semibold text-lg mb-2">Available Time Slots</p>

      <div className="flex flex-wrap justify-center gap-2 mb-4">
        {["Mon", "Tue", "Wed"].map((day, index) => (
          <button
            key={index}
            className="py-2 px-4 rounded-lg border hover:bg-blue-100 transition cursor-pointer"
          >
            {day}
          </button>
        ))}
      </div>

      {/* Time slots list */}
      <div className="flex  flex-col items-center gap-2">
        <p className="font-semibold text-lg mb-2">Available Time Slots</p>
        <div className="flex flex-row gap-4">
          {["09:00 AM", "10:00 AM", "11:00 AM", "01:00 PM", "02:00 PM"].map(
            (slot, index) => (
              <button
                key={index}
                className="bg-white py-2 px-3 rounded-lg border hover:bg-gray-100 transition cursor-pointer"
              >
                {slot}
              </button>
            )
          )}
        </div>
      </div>
      <div className="mx-auto">
        {" "}
        <Button label="Book Appointment" />
      </div>
    </div>
  );
};

export default Dates;
