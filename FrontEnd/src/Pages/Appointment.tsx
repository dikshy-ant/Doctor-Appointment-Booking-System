import React from "react";
import Navbar from "../Components/Navbar";
import doctorData from "../DoctorsData";
import Footer from "../Components/Footer";
import Dates from "../Components/Dates";
import DoctorDetails from "../Components/DoctorDetails";
import Slider from "react-slick";
import Doctors from "../Components/Doctors";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Review from "../Components/Review";
import image from "../assets/images/1.png";

const Appointment = () => {
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
        breakpoint: 1200, // <= 1200px
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024, // <= 1024px
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768, // <= 768px
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="flex flex-col min-h-screen">
      <DoctorDetails />
      <Dates />

      {/**Similar Doctors  */}
      <div className="">
        <div className="w-full text-center transition-all duration-300 hover:scale-105">
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-4">
            Similar Doctors
          </h1>
        </div>

        <div
          className="mt-4
           w-full"
        >
          <Slider {...settings}>
            {doctorData.map((doctor, index) => (
              <Doctors
                key={index}
                image={doctor.image}
                name={doctor.name}
                specialty={doctor.specialty}
              />
            ))}
          </Slider>
        </div>

        <div className="mt-12 w-full">
          {/* Section Header */}
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
