import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Doctor from "../assets/images/Doctor5.webp";
import Button from "../Components/Button";
import Dates from "../Components/Dates";
import DoctorDetails from "../Components/DoctorDetails";
const Appointment = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <Navbar />
        <div className="mt-30">
          <DoctorDetails />
          <Dates />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Appointment;
