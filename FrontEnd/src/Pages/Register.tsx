import React, { useState } from "react";
import icon from "../assets/images/logo.jpg";
import { FaUser } from "react-icons/fa";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { FaCamera } from "react-icons/fa";
import Button from "../Components/Button";
import bg from "../assets/images/Hospital.webp";

const Register: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showRePassword, setShowRePassword] = useState(false);

  return (
    <div
      className="relative flex items-center justify-center min-h-screen bg-cover bg-center m-0 p-0"
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="flex z-10 items-center justify-center min-h-screen mx-12 my-24 ">
        <div className="w-[420px] bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:scale-105">
          {/* Header */}
          <div className="text-center">
            <img src={icon} alt="Logo" className="h-40 mx-auto" />
            <h1 className="text-2xl font-bold mt-5">Register</h1>
            <p className="text-sm text-gray-600 mt-2">
              Register and Book for your own better health
            </p>
          </div>

          {/* Form */}
          <form action="/register" method="post" className="mt-6" noValidate>
            {/* Name */}
            <div className="relative w-full h-12 mb-5">
              <input
                type="text"
                placeholder="Enter your Name"
                name="name"
                className="w-full h-full border-2 border-gray-200 rounded-md px-4 text-sm outline-none focus:border-black"
              />
            </div>

            {/* Nickname */}
            <div className="relative w-full h-12 mb-5">
              <input
                type="text"
                placeholder="Enter preferred Nickname"
                name="nickname"
                className="w-full h-full border-2 border-gray-200 rounded-md px-4 text-sm outline-none focus:border-black"
              />
            </div>

            {/* Email */}
            <div className="relative w-full h-12 mb-5">
              <input
                type="email"
                placeholder="Enter your Email"
                name="email"
                className="w-full h-full border-2 border-gray-200 rounded-md px-4 pr-10 text-sm outline-none focus:border-black"
              />
              <FaUser className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500" />
            </div>

            {/* Date of Birth */}
            <div className="relative w-full h-12 mb-5">
              <input
                type="date"
                name="dateOfBirth"
                className="w-full h-full border-2 border-gray-200 rounded-md px-4 text-sm outline-none focus:border-black"
              />
            </div>

            {/* Password */}
            <div className="relative w-full h-12 mb-5">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter Password"
                name="password"
                className="w-full h-full border-2 border-gray-200 rounded-md px-4 pr-10 text-sm outline-none focus:border-black"
              />
              {showPassword ? (
                <FaEyeSlash
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                />
              ) : (
                <FaEye
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                />
              )}
            </div>

            {/* Confirm Password */}
            <div className="relative w-full h-12 mb-5">
              <input
                type={showRePassword ? "text" : "password"}
                placeholder="Confirm Password"
                name="repassword"
                className="w-full h-full border-2 border-gray-200 rounded-md px-4 pr-10 text-sm outline-none focus:border-black"
              />
              {showRePassword ? (
                <FaEyeSlash
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer"
                  onClick={() => setShowRePassword(!showRePassword)}
                />
              ) : (
                <FaEye
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer"
                  onClick={() => setShowRePassword(!showRePassword)}
                />
              )}
            </div>

            {/* Profile Picture */}
            <div className="relative w-full mb-5">
              <label
                htmlFor="profilePicture"
                className="flex items-center justify-center gap-2 border-2 border-gray-200 rounded-md p-2 text-gray-700 cursor-pointer hover:bg-gray-100"
              >
                <FaCamera /> Upload Profile Picture
              </label>
              <input
                type="file"
                id="profilePicture"
                name="profilePicture"
                accept="image/*"
                className="hidden"
              />
            </div>

            {/* Button */}
            <div className="flex justify-center mt-2 w-full">
              <Button label="Register" />
            </div>

            {/* Login Link */}
            <div className="text-center text-sm text-gray-600 mt-4">
              <p>
                Already have an account?{" "}
                <a href="/login" className="text-black hover:underline">
                  Login
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
