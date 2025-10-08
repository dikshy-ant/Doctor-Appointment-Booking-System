import React from "react";
import { useParams } from "react-router-dom";
import doctorData from "../DoctorsData";
import Dates from "../Components/Dates";
import DoctorDetails from "../Components/DoctorDetails";
import Slider from "react-slick";
import Doctors from "../Components/DoctorCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Review from "../Components/Review";

const Appointment = () => {
  // 1️⃣ Get doctor id from the URL
  const { id } = useParams<{ id: string }>();

  // 2️⃣ Find the doctor in doctorData
  const doctor = doctorData.find((doc) => doc.id === Number(id));

  // 3️⃣ Handle case when doctor is not found
  if (!doctor) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h2 className="text-2xl font-bold text-red-500">Doctor not found</h2>
      </div>
    );
  }

  // 4️⃣ Slider settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    cssEase: "ease-in-out",
    swipeToSlide: true,
    touchMove: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Doctor Details (pass doctor data) */}
      <DoctorDetails
        id={doctor.id}
        image={doctor.image}
        name={doctor.name}
        specialty={doctor.specialty}
      />

      {/* Dates section */}
      <Dates />

      {/* Similar Doctors */}
      <div>
        <div className="w-full text-center transition-all duration-300 hover:scale-105">
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-4">
            Similar Doctors
          </h1>
        </div>

        <div className="mt-4 w-full">
          <Slider {...settings}>
            {doctorData
              .filter(
                (d) => d.specialty === doctor.specialty && d.id !== doctor.id
              ) // show only similar doctors
              .map((similarDoctor) => (
                <Doctors
                  key={similarDoctor.id}
                  id={similarDoctor.id}
                  image={similarDoctor.image}
                  name={similarDoctor.name}
                  specialty={similarDoctor.specialty}
                  available={similarDoctor.available}
                />
              ))}
          </Slider>
        </div>

        {/* Reviews Section */}
        <div className="mt-12 w-full">
          <div className="text-center mb-8">
            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900">
              Patient Reviews
            </h1>
          </div>
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <Review />
            <Review />
            <Review />
            <Review />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
