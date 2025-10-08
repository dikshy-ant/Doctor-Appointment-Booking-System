import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import doctorData from "../DoctorsData";
import DoctorCard from "../Components/DoctorCard";
import Sidebar from "../Components/Sidebar";
import Searchbar from "../Components/Searchbar";
import { Link } from "react-router-dom";

const Doctors: React.FC = () => {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [visibleCount, setVisibleCount] = useState<number>(10); // 👈 start with 10

  // handle filter toggle
  const handleFilterClick = (selectedCategory: string) => {
    let updatedFilters: string[];

    if (selectedFilters.includes(selectedCategory)) {
      updatedFilters = selectedFilters.filter(
        (filter) => filter !== selectedCategory
      );
    } else {
      updatedFilters = [...selectedFilters, selectedCategory];
    }

    setSelectedFilters(updatedFilters);
    setVisibleCount(10); // 👈 reset when filters change
  };

  // filter doctors based on sidebar filters + search term
  const filteredDoctors = doctorData.filter((doctor) => {
    const matchesFilter =
      selectedFilters.length === 0 ||
      selectedFilters.includes(doctor.specialty);

    const matchesSearch =
      searchTerm === "" ||
      doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesFilter && matchesSearch;
  });

  // handle "Load More" button
  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 6);
  };

  // handle "Show Less" button
  const handleShowLess = () => {
    setVisibleCount(10);
  };

  return (
    <div className="min-h-screen max-w-7xl mx-auto">
      <div className="pt-12 flex flex-col md:flex-row gap-3 px-2 md:px-3">
        {/* Sidebar with filter options */}
        <Sidebar
          specialties={[
            "Gynecologist",
            "Cardiologist",
            "Pediatrician",
            "Dermatologist",
            "Neurologist",
            "Psychiatrist",
            "Physician",
            "Neuro Surgeon",
          ]}
          selectedFilters={selectedFilters}
          onFilterClick={handleFilterClick}
        />

        {/* Doctor Cards */}
        <div className="flex-1">
          <div className="w-full">
            <Searchbar value={searchTerm} onChange={setSearchTerm} />
          </div>

          {/* Title */}
          <div className="w-full text-center transition-all duration-300 hover:scale-105 mb-6">
            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900">
              {selectedFilters.length > 0
                ? selectedFilters.join(", ")
                : "Our Doctors"}
            </h1>
          </div>

          {/* Doctor Cards Grid */}
          <div
            className="w-full mt-12 grid gap-4 grid-cols-[repeat(auto-fit,minmax(250px,300px))]
justify-center "
          >
            {filteredDoctors.slice(0, visibleCount).map((doctor) => (
              <Link to={`/doctors/${doctor.id}`} key={doctor.id}>
                <DoctorCard
                  id={doctor.id}
                  image={doctor.image}
                  name={doctor.name}
                  specialty={doctor.specialty}
                  available={doctor.available}
                />
              </Link>
            ))}
          </div>

          {/* Load More + Show Less Controls */}
          {/* Load More + Show Less Controls */}
          <div className="flex justify-center gap-6 mt-10 mb-10">
            {visibleCount < filteredDoctors.length && (
              <button
                onClick={handleLoadMore}
                className="px-6 py-3 rounded-xl bg-[var(--button-bg)] text-white 
                 hover:bg-[var(--button-bg-hover)] transition-all shadow-md cursor-pointer"
              >
                Load More
              </button>
            )}
            {visibleCount > 10 && (
              <button
                onClick={handleShowLess}
                className="px-6 py-3 rounded-xl bg-[var(--button-bg)] text-white 
                 hover:bg-[var(--button-bg-hover)] transition-all shadow-md cursor-pointer"
              >
                Show Less
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Doctors;
