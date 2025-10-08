import React from "react";

const ReviewSection = () => {
  return (
    <div className="">
      {/* Review Card 1 */}
      <div className="bg-white rounded-2xl p-6 shadow-lg flex flex-col items-center text-center gap-4 w-72">
        <div className="w-20 h-20 bg-gray-200 rounded-full"></div>
        <h3 className="text-xl font-semibold">Patient Name</h3>
        <p className="text-gray-600">This is a review text placeholder.</p>
        <div className="flex gap-1 text-yellow-400">★ ★ ★ ★ ★</div>
      </div>
    </div>
  );
};

export default ReviewSection;
