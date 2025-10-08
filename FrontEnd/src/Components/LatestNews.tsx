import React, { useState } from "react";
import NewsData from "../NewsData";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

// Individual news card component with lazy loading
const NewsCard = ({ news, index }) => {
  return (
    <div className="px-1 sm:px-1.5 h-full">
      <div
        key={index}
        className="w-full rounded-xl sm:rounded-2xl overflow-hidden bg-white h-[350px] sm:h-[380px] md:h-[400px] lg:h-[420px] transition-all duration-300 hover:scale-105"
      >
        <div className="overflow-hidden h-48 sm:h-56 md:h-60 lg:h-62 flex justify-center">
          <img
            src={news.image}
            className="w-full h-full object-cover"
            alt={news.title}
          />
        </div>
        <div className="p-3 sm:p-4 md:p-5 lg:p-6 flex flex-col h-full">
          <div className="flex items-center gap-2 text-gray-600 mb-2 sm:mb-3 font-medium flex-shrink-0">
            <p className="text-xs sm:text-sm">{news.date}</p>
          </div>
          <h3 className="font-semibold text-sm sm:text-base md:text-lg lg:text-xl mb-2 sm:mb-3 text-gray-800 flex-shrink-0 line-clamp-2">
            {news.title}
          </h3>
          <div className="flex-grow flex flex-col justify-between">
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed line-clamp-2">
              {news.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const LatestNews = () => {
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
          Latest News
        </h1>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-700 max-w-3xl mx-auto mb-4 sm:mb-5 lg:mb-6 px-2">
          View the Latest Medical News Around the World
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
          {NewsData.map((news, index) => (
            <NewsCard key={index} news={news} index={index} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default LatestNews;
