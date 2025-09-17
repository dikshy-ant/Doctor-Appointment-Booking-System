import React from "react";
import Button from "./Button";

const Navbar: React.FC = () => {
  return (
    <div className="w-full bg-white shadow-md p-5 flex flex-col md:flex-row items-center justify-between fixed z-11 top-0">
      <div className="navbar-left flex items-center space-x-2 mb-4 md:mb-0 ">
        <h1 className="text-2xl font-bold text-[var(--button-bg)]">
          Pharmacy App
        </h1>
      </div>
      <div className="navbar-right">
        <ul className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-8 px-2xl">
          <li>Home</li>
          <li>Book Appointment</li>
          <li>Current Bookings</li>
          <li>Contact</li>
        </ul>
      </div>

      <div className="">
        <Button label="Login" />
      </div>
    </div>
  );
};

export default Navbar;
