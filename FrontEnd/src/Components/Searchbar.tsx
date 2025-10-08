import React from "react";

type SearchbarProps = {
  value: string;
  onChange: (val: string) => void;
};

const Searchbar: React.FC<SearchbarProps> = ({ value, onChange }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="w-full flex justify-center  py-6">
      <form
        onSubmit={handleSubmit}
        className="flex items-center justify-between w-full max-w-[1200px] px-4"
      >
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Search for Doctors... (Gynecologist, Dermatologist, Dentist, General Physician)"
          className="flex-1 h-14 px-4 rounded-l-2xl border border-gray-300 bg-white text-gray-700 focus:outline-none"
        />
        <button
          type="submit"
          className="bg-[var(--button-bg)] text-white font-bold h-14 px-8 rounded-r-2xl flex items-center justify-center"
        >
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </form>
    </div>
  );
};

export default Searchbar;
