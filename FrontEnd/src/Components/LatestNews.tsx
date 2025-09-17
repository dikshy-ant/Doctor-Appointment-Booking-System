import React from "react";
import NewsData from "../NewsData";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
    touchMove: true,
  };

  return (
    <div className="w-full flex flex-col items-start gap-9 my-7 text-gray-800 px-4 md:px-10">
      <div className="w-full text-center transition-all duration-300 hover:scale-105">
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-4">
          Latest News
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto mb-6">
          View the Latest Medical News Around the World
        </p>
        <div className="flex justify-center">
          <p className="text-xl font-semibold text-[var(--button-bg)] cursor-pointer transition-colors duration-300">
            See More
          </p>
        </div>
      </div>

      <div className="mt-2 w-full ">
        <Slider {...settings}>
          {NewsData.map((news, index) => (
            <div
              key={index}
              className="px-1.5 transition-all duration-300 hover:scale-105 "
            >
              <div className="w-full rounded-2xl  overflow-hidden  bg-white h-120">
                <div className="overflow-hidden h-62 flex justify-center">
                  <img src={news.image} className="w-full h-full " />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-gray-600 mb-3 font-medium">
                    <p>{news.date}</p>
                  </div>
                  <h3 className="font-semibold text-xl mb-2 text-gray-800">
                    {news.title}
                  </h3>
                  <p className="text-sm text-gray-600">{news.description}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default LatestNews;
