import React from "react";
import doctorData from "../DoctorsData";
import Slider from "react-slick";
import Doctors from "../Components/Doctors";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
    touchMove: true,
  };

  return (
    <div className="w-full flex flex-col items-start gap-9 my-7 text-gray-800 px-4 md:px-10">
      <div className="w-full text-center transition-all duration-300 hover:scale-105">
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-4">
          Top Doctors
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto mb-6">
          Choose from the best doctors available, who are ready to provide
          exceptional care and personalized treatment.
        </p>
        <div className="flex justify-center">
          <p className="text-xl font-semibold text-[var(--button-bg)] cursor-pointer transition-colors duration-300">
            See More
          </p>
        </div>
      </div>

      <div className="mt-2 w-full">
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
    </div>
  );
};

export default TopDoctors;
