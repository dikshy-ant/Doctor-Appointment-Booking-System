import React from "react";

type DoctorProps = {
  image: string;
  name: string;
  specialty: string;
};

const DoctorCard: React.FC<DoctorProps> = ({ image, name, specialty }) => {
  return (
    <div className="px-1.5 transition-all duration-300 hover:scale-105 cursor-pointer">
      <div className="h-100 rounded-2xl overflow-hidden bg-[#f2f2f2]">
        <div className="overflow-hidden h-62 flex justify-center">
          <img src={image} alt={name} className="w-full h-full object-cover" />
        </div>
        <div className="p-6">
          <div className="flex items-center gap-2 text-sm text-green-600 mb-3 font-medium">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span>Available Today</span>
          </div>
          <h3 className="font-semibold text-xl mb-2 text-gray-800">{name}</h3>
          <p className="text-sm text-gray-600">{specialty}</p>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;
