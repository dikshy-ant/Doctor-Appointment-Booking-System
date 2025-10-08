import React from "react";
import doctorData from "../DoctorsData";
import Slider from "react-slick";
import Doctors from "./DoctorCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

const TopDoctors = () => {
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
    draggable: true,
    touchMove: true,
    arrows: false,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1400, // Large screens
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1200, // Medium-large screens
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 900, // Medium screens
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768, // Tablets
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 480, // Mobile
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  return (
    <div className="w-full flex flex-col items-start gap-4 sm:gap-6 lg:gap-9 my-4 sm:my-6 lg:my-7 text-gray-800 px-2 sm:px-4 md:px-6 lg:px-10">
      <div className="w-full text-center transition-all duration-300 hover:scale-105">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-gray-900 mb-2 sm:mb-3 lg:mb-4">
          Top Doctors
        </h1>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-700 max-w-3xl mx-auto mb-4 sm:mb-5 lg:mb-6 px-2">
          Choose from the best doctors available, who are ready to provide
          exceptional care and personalized treatment.
        </p>
        <div className="flex justify-center">
          <Link to="/doctors">
            <p className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-[var(--button-bg)] cursor-pointer transition-colors duration-300">
              See More
            </p>
          </Link>
        </div>
      </div>

      <div className="mt-1 sm:mt-2 w-full">
        <Slider {...settings}>
          {doctorData.slice(0, 7).map((doctor, index) => (
            <Doctors
              id={doctor.id}
              key={index}
              image={doctor.image}
              name={doctor.name}
              specialty={doctor.specialty}
              available={doctor.available}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TopDoctors;
