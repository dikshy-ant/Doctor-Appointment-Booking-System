import React from "react";
import Home from "./Pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Doctors from "./Pages/Doctors";
import DocAppointment from "./Pages/Appointment";
const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/doctorDetail" element={<DocAppointment />} />
      </Routes>
    </Router>
  );
};

export default App;
