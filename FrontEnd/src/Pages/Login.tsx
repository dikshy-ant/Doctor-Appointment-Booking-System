import React, { useState } from "react";
import icon from "../assets/images/logo.jpg";
import { FaUser } from "react-icons/fa";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import Button from "../Components/Button";
import bg from "../assets/images/Hospital.webp";
const Login: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div
      className="relative flex items-center justify-center min-h-screen bg-cover bg-center m-0 p-0"
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="w-[420px] bg-white backdrop-blur-md p-6 rounded-lg shadow-md transition-all duration-300 hover:scale-105">
        {/* Header */}
        <div className="text-center">
          <img src={icon} alt="Logo" className="h-40 mx-auto" />
          <h1 className="text-2xl font-bold mt-5">Login</h1>
          <p className="text-sm text-gray-600 mt-2">
            Discover your favorites, add must-haves to your wishlist, and track
            every order with ease.
          </p>
        </div>

        {/* Form */}
        <form action="/login" method="post" className="mt-6" noValidate>
          {/* Email */}
          <div className="relative w-full h-12 mb-5">
            <input
              type="email"
              placeholder="Email"
              name="email"
              className="w-full h-full border-2 border-gray-200 rounded-md px-4 pr-10 text-sm outline-none focus:border-black"
            />
            <FaUser className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500" />
          </div>

          {/* Password */}
          <div className="relative w-full h-12 mb-5">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
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

          {/* Forgot password */}
          <div className="text-center text-sm mb-4">
            <a href="#" className="text-gray-700 hover:underline">
              Forgot password?
            </a>
          </div>
          {/* Button */}
          <div className="flex justify-center mt-2 w-full">
            <Button label="Login" />
          </div>

          {/* Register */}
          <div className="text-center text-sm text-gray-600 mt-4">
            <p>
              Don&apos;t have an account?{" "}
              <a href="/register" className="text-black hover:underline">
                Register
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
