import React from "react";
import customerData from "../CustomerData";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonials = () => {
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
          Don't Believe Us? Believe Them
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto mb-6">
          What Our Customers Say About Us, Their Words Not Ours
        </p>
        <div className="flex justify-center">
          <p className="text-xl font-semibold text-[var(--button-bg)] cursor-pointer transition-colors duration-300">
            See More
          </p>
        </div>
      </div>

      <div className="mt-3 w-full">
        <Slider {...settings}>
          {customerData.map((customer, index) => (
            <div className="px-2">
              <div
                key={index}
                className="bg-[#f2f2f2] rounded-2xl h-103 p-6 transition-all duration-300 hover:scale-105 flex flex-col items-center"
              >
                <div className="p-3 rounded-full text-blue-700 flex items-center justify-center mb-4">
                  <img
                    src={customer.image}
                    alt={customer.title}
                    className="w-38 h-38 object-cover rounded-full"
                  />
                </div>

                {/* Text content container */}
                <div className="flex flex-col items-center gap-3 text-center">
                  <div className="flex text-blue-600 justify-center">
                    <span className="text-xl">★</span>
                    <span className="text-xl">★</span>
                    <span className="text-xl">★</span>
                    <span className="text-xl">★</span>
                    <span className="text-xl">★</span>
                  </div>
                  <h2 className="text-xl font-bold text-gray-800">
                    {customer.title}
                  </h2>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {customer.description}
                  </p>

                  <h2 className="text-xl font-semi-bold text-gray-900">
                    {customer.name}
                  </h2>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;
