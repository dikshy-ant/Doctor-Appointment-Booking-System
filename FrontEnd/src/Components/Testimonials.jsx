import React, { useState } from "react";
import customerData from "../CustomerData";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
// Individual testimonial card component with lazy loading
const TestimonialCard = ({ customer, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const maxLength = 80; // Maximum characters before truncation

  const shouldTruncate = customer.description.length > maxLength;
  const displayText =
    isExpanded || !shouldTruncate
      ? customer.description
      : customer.description.substring(0, maxLength) + "...";

  return (
    <div className="px-1 sm:px-2 h-full">
      <div
        key={index}
        className={`testimonial-card bg-[var(--color-surface)] rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-5 lg:p-6 transition-all duration-500 hover:scale-105 flex flex-col items-center max-w-[350px] w-full ${
          isExpanded
            ? "expanded h-auto min-h-[600px] sm:min-h-[650px] md:min-h-[700px] max-h-[800px]"
            : "collapsed h-[400px] sm:h-[450px] md:h-[500px] max-h-[500px]"
        }`}
      >
        <div className="p-2 sm:p-3 rounded-full text-blue-700 flex items-center justify-center mb-3 sm:mb-4">
          <img
            src={customer.image}
            alt={customer.title}
            className="w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-38 lg:h-38 object-cover rounded-full"
          />
        </div>

        {/* Text content container */}
        <div className="flex flex-col items-center gap-2 sm:gap-3 text-center flex-grow">
          <div className="flex text-[var(--text-accent)] justify-center">
            <span className="text-sm sm:text-base md:text-lg lg:text-xl">
              ★
            </span>
            <span className="text-sm sm:text-base md:text-lg lg:text-xl">
              ★
            </span>
            <span className="text-sm sm:text-base md:text-lg lg:text-xl">
              ★
            </span>
            <span className="text-sm sm:text-base md:text-lg lg:text-xl">
              ★
            </span>
            <span className="text-sm sm:text-base md:text-lg lg:text-xl">
              ★
            </span>
          </div>
          <h2 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-[var(--text-primary)]">
            {customer.title}
          </h2>
          <div className="flex-grow flex flex-col justify-between w-full">
            <p
              className={`text-[var(--text-muted)] leading-relaxed text-xs sm:text-sm text-center mb-2 sm:mb-3 transition-all duration-500 ${
                isExpanded ? "max-h-none" : "max-h-[120px] overflow-hidden"
              }`}
            >
              {displayText}
            </p>

            {/* Show More/Less button */}
            {shouldTruncate && (
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="text-blue-600 text-xs sm:text-sm font-semibold hover:text-blue-800 transition-all duration-300 mb-2 sm:mb-3 px-2 sm:px-3 py-1 rounded-md bg-blue-50 hover:bg-blue-100 self-center transform hover:scale-105"
              >
                {isExpanded ? "Show Less" : "Show More"}
              </button>
            )}
          </div>

          <h2 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-[var(--text-strong)] mt-auto">
            {customer.name}
          </h2>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  // Add CSS for zoom level handling
  React.useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      @media screen and (min-resolution: 0.25dppx) {
        .testimonial-card {
          max-width: 350px !important;
          width: 100% !important;
          transform-origin: center !important;
        }
        .testimonial-card.expanded {
          max-height: 800px !important;
        }
        .testimonial-card.collapsed {
          max-height: 500px !important;
        }
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

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
    variableWidth: false,
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
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-[var(--text-strong)] mb-2 sm:mb-3 lg:mb-4">
          Don't Believe Us? Believe Them
        </h1>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-[var(--text-secondary)] max-w-3xl mx-auto mb-4 sm:mb-5 lg:mb-6 px-2">
          What Our Customers Say About Us, Their Words Not Ours
        </p>
        <div className="flex justify-center">
          <Link to="/doctors">
            <p className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-[var(--button-bg)] cursor-pointer transition-colors duration-300">
              See More
            </p>
          </Link>
        </div>
      </div>

      <div className="mt-1 sm:mt-2 lg:mt-3 w-full">
        <Slider {...settings}>
          {customerData.map((customer, index) => (
            <TestimonialCard key={index} customer={customer} index={index} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;
