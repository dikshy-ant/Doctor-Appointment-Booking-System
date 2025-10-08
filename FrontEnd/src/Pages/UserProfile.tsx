import React from "react";
import userPhoto from "../assets/images/Customer2.jpg";

const UserProfile = () => {
  return (
    <div className="flex items-center justify-center min-h-screen p-8">
      {/* Profile Card */}
      <div className="w-full max-w-md rounded-xl p-8 text-center bg-white">
        {/* Profile Picture */}
        <img
          src={userPhoto}
          alt="User"
          className="w-40 h-40 rounded-full object-cover mx-auto"
        />

        {/* User Info */}
        <h2 className="text-2xl font-semibold mt-6">User Name</h2>
        <p className="text-base">User Role / Title</p>

        {/* Details */}
        <div className="mt-8 space-y-3 text-left text-lg">
          <p>
            <span className="font-semibold">Email:</span> user@example.com
          </p>
          <p>
            <span className="font-semibold">Phone:</span> +977-9812345678
          </p>
          <p>
            <span className="font-semibold">Location:</span> City, Country
          </p>
          <p>
            <span className="font-semibold">Joined:</span> January 2023
          </p>
        </div>

        {/* Button */}
        <button className="mt-8 w-full px-6 py-3 border rounded-lg text-lg">
          Edit Profile
        </button>
      </div>
    </div>
  );
};

export default UserProfile;
