import React from "react";
import doctor from "../assets/images/Doctor5.webp";
import Button from "../Components/Button";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const Booking = () => {
  return (
    <div className="min-h-screen flex flex-col items-center">
      <div className="w-[90%] sm:w-[85%] mx-auto">
        {/* Heading */}
        <p className="pb-3 mt-12 font-semibold text-[var(--text-primary)] text-lg">
          My Appointments
        </p>

        {/* Appointment Card */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mt-4 p-6 bg-[var(--color-panel)] rounded-2xl shadow-sm">
          {/* Doctor Image */}
          <div className="flex-shrink-0">
            <img
              src={doctor}
              alt="Doctor"
              className="w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 rounded-xl object-cover shadow-md"
            />
          </div>

          {/* Appointment Info (always beside image on md+) */}
          <div className="flex-1 text-left text-base text-[var(--text-secondary)] space-y-2">
            <p className="text-[var(--text-primary)] font-semibold text-lg">
              Safal Adhikari
            </p>
            <p className="text-[var(--text-primary)] font-semibold text-lg">
              Address:
            </p>
            <p className="text-sm text-[var(--text-muted)]">
              17th Kings Cross Road
            </p>

            <p className="text-neutral-700 font-medium text-base">
              Gynecologist
            </p>
            <p className="text-sm text-[var(--text-muted)]">Day: Monday</p>
            <p className="text-sm text-[var(--text-muted)]">Time: 10:00 AM</p>
          </div>

          {/* Actions */}
          <div className="flex flex-col gap-2 w-full md:w-auto">
            <Button label="Select Payment Method" />
            <button className="px-4 py-2 rounded-lg border border-red-500 text-[var(--text-danger)] text-sm font-medium hover:bg-red-50 transition">
              Cancel Appointment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
