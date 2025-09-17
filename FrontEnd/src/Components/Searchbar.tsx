import React from "react";

const Searchbar = () => {
  return (
    <form className="flex items-center justify-center max-w-[65%] mx-auto h-16 m-8 relative z-10">
      <input
        type="text"
        placeholder="Search for Doctors....(Gynecologist, Dermatologist, Dentist, General Physician) "
        className="w-full h-full px-4 py-3 rounded-l-2xl border border-gray-300 bg-white  "
      />
      <button className="bg-[var(--button-bg)] text-white font-bold py-4 px-12 rounded-r-2xl h-full">
        <i className="fa-solid fa-magnifying-glass"></i>
      </button>
    </form>
  );
};

export default Searchbar;
