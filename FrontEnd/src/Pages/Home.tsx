import React from "react";
import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";
import Searchbar from "../Components/Searchbar";
import Cards from "../Components/Cards";
import Message from "../Components/Message";
import cardsData from "../CardsData";
import TopDoctors from "../Components/TopDoctors";
import LatestNews from "../Components/LatestNews";
import StatsCounter from "../Components/StatsCounter";
import Testimonials from "../Components/Testimonials";
import Footer from "../Components/Footer";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen ">
      <Hero /> {/** header and hero section */}
      <div className="w-full">
        <Searchbar />
      </div>
      <div className="flex justify-center flex-wrap gap-2 sm:gap-3 md:gap-4 p-2 sm:p-3 md:p-4 lg:p-5 mt-1 sm:mt-2 w-full">
        {/** cards section */}
        {cardsData.map((card, index) => (
          <Cards
            key={index}
            image={card.image}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
      <TopDoctors />
      <Message />
      <LatestNews />
      <StatsCounter />
      <Testimonials />
    </div>
  );
};

export default Home;
