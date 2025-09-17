import React from "react";
import HeroVid from "../assets/vids/HeroVid.mp4";

const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-[90vh] ">
      <div className="absolute top-0 left-0 w-full h-full bg-black/40 object-cover overflow-hidden"></div>
      <video
        src={HeroVid}
        autoPlay
        loop
        muted
        className="w-full h-full object-cover overflow-hidden"
      />
      <div className="absolute w-full h-full top-0 flex flex-col items-center justify-center text-white">
        <h1 className="text-5xl md:text-8xl font-extrabold">Your Health</h1>
        <p className="mt-4 text-lg md:text-4xl font-bold text-center">
          Our Number 1 Priority
        </p>
      </div>
    </section>
  );
};

export default Hero;
