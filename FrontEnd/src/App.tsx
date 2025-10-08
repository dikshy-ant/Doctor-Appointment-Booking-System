import React from "react";
import Home from "./Pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Doctors from "./Pages/Doctors";
import DocAppointment from "./Pages/Appointment";
import Booking from "./Pages/Booking";
import Login from "./Pages/Login";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Register from "./Pages/Register";
import ScrollToTop from "./Components/ScrolltotheTop";
import UserProfile from "./Pages/UserProfile";

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow mt-16 md:mt-20">
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/doctors" element={<Doctors />} />
            <Route path="/doctors/:id" element={<DocAppointment />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/userProfile" element={<UserProfile />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
