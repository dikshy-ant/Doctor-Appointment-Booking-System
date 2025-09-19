import React from "react";
import HeroVid from "../assets/vids/HeroVid.mp4";

const Hero: React.FC = () => {
  return (
    <section className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] h-[70vh] sm:h-[80vh] md:h-[90vh]">
      <div className="absolute top-0 left-0 w-full h-full bg-black/40 pointer-events-none"></div>
      <video
        src={HeroVid}
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover block"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold leading-tight">
          Your Health
        </h1>
        <p className="mt-3 sm:mt-4 text-base sm:text-lg md:text-3xl lg:text-4xl font-bold max-w-3xl">
          Our Number 1 Priority
        </p>
      </div>
    </section>
  );
};

export default Hero;
