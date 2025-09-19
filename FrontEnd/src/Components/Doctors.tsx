import React from "react";
import { Link } from "react-router-dom";

type DoctorProps = {
  image: string;
  name: string;
  specialty: string;
};

const DoctorCard: React.FC<DoctorProps> = ({ image, name, specialty }) => {
  return (
    <Link to="/doctorDetail">
      {" "}
      <div className="px-1.5 transition-all duration-300 hover:scale-105 cursor-pointer overflow-hidden">
        <div className="h-100 rounded-2xl overflow-hidden bg-[var(--color-surface)]">
          <div className="overflow-hidden h-62 flex justify-center">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6">
            <div className="flex items-center gap-2 text-sm text-[var(--text-success)] mb-3 font-medium">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span>Available Today</span>
            </div>
            <h3 className="font-semibold text-xl mb-2 text-[var(--text-primary)]">{name}</h3>
            <p className="text-sm text-[var(--text-muted)]">{specialty}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default DoctorCard;
