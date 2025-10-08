import React from "react";
import { Link } from "react-router-dom";

type DoctorProps = {
  id: number;
  image: string;
  name: string;
  specialty: string;
  available?: boolean;
};

const DoctorCard: React.FC<DoctorProps> = ({
  id,
  image,
  name,
  specialty,
  available,
}) => {
  return (
    <Link
      to={`/doctors/${id}`}
      className="
        block bg-[var(--color-surface)] rounded-xl sm:rounded-2xl overflow-hidden 
        shadow-md hover:shadow-xl transition-all duration-300 
        transform hover:scale-105 max-w-[280px] sm:max-w-[300px] md:max-w-[320px] mx-auto
      "
    >
      {/* Image */}
      <div className="h-48 sm:h-52 md:h-56 lg:h-60 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Content */}
      <div className="p-3 sm:p-4 md:p-5 lg:p-6">
        <div className="flex items-center gap-2 text-xs sm:text-sm font-medium mb-2 sm:mb-3">
          <div
            className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full animate-pulse ${
              available ? "bg-green-500" : "bg-red-500"
            }`}
          ></div>
          <span
            className={`animate-pulse text-xs sm:text-sm ${
              available ? "text-green-500" : "text-red-500"
            }`}
          >
            {available ? "Available Today" : "Not Available"}
          </span>
        </div>

        <h3 className="font-semibold text-sm sm:text-base md:text-lg lg:text-xl mb-1 sm:mb-2 text-[var(--text-primary)] line-clamp-2">
          {name}
        </h3>
        <p className="text-xs sm:text-sm text-[var(--text-muted)] line-clamp-2">
          {specialty}
        </p>
      </div>
    </Link>
  );
};

export default DoctorCard;
