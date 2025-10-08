import React from "react";

type SidebarProps = {
  specialties: string[];
  selectedFilters: string[];
  onFilterClick: (specialty: string) => void;
};

const Sidebar = (props: SidebarProps) => {
  return (
    <div className="w-full md:w-[24%] bg-[var(--color-panel)] p-6 rounded-2xl h-fit sticky top-20 flex flex-col justify-between">
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-[var(--text-strong)] mb-2">
          Filter Doctors
        </h2>
        <div className="flex flex-col gap-4 text-sm text-[var(--text-muted)]">
          {props.specialties.map((specialty, index) => (
            <p
              key={index}
              onClick={() => props.onFilterClick(specialty)}
              className={`w-[80%] sm:w-auto pl-3 py-1.5 pr-16 border rounded transition-all cursor-pointer
                ${
                  props.selectedFilters.includes(specialty)
                    ? "bg-gray-600 text-white border-gray-600"
                    : "border-gray-300 hover:bg-gray-400 hover:text-white"
                }`}
            >
              {specialty}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
