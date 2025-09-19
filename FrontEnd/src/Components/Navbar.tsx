import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-md fixed top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link to="/">
          {" "}
          <h1 className="text-xl font-bold text-[var(--button-bg)]">
            Pharmacy App
          </h1>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 items-center">
          <li>
            <Link to="/" className="hover:text-[var(--button-bg)]">
              Home
            </Link>
          </li>
          <li>
            <Link to="/doctors" className="hover:text-[var(--button-bg)]">
              Book Appointment
            </Link>
          </li>
          <li>
            <Link to="/booking" className="hover:text-[var(--button-bg)]">
              My Bookings
            </Link>
          </li>
          <li>
            <Link to="/" className="hover:text-[var(--button-bg)]">
              Contact
            </Link>
          </li>
          <li>
            <Link to="/login">
              <Button label="Login" />
            </Link>
          </li>
        </ul>

        {/* Mobile Button */}
        <button
          className="md:hidden p-2 border rounded"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu (absolute, so it doesn’t push layout) */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-white shadow-md transition-all duration-300 ${
          isOpen
            ? "opacity-100 max-h-screen"
            : "opacity-0 max-h-0 overflow-hidden"
        }`}
      >
        <ul className="flex flex-col space-y-4 px-4 py-4">
          <li>
            <Link to="/" onClick={() => setIsOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/doctors" onClick={() => setIsOpen(false)}>
              Book Appointment
            </Link>
          </li>
          <li>
            <Link to="/booking" onClick={() => setIsOpen(false)}>
              My Bookings
            </Link>
          </li>
          <li>
            <Link to="/" onClick={() => setIsOpen(false)}>
              Contact
            </Link>
          </li>
          <li>
            <Link to="/login" onClick={() => setIsOpen(false)}>
              <Button label="Login" />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
