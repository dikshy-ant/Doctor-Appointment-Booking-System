import React from "react";
import HeroVid from "../assets/vids/HeroVid.mp4";
import { Typewriter } from "react-simple-typewriter";

const Hero: React.FC = () => {
  return (
    <section className="relative flex items-center justify-center w-full h-[90vh] bg-black overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0">
        <video
          src={HeroVid}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40 z-0"></div>

      {/* Centered Content */}
      <div className="relative z-10 text-center px-4 max-w-[900px] mx-auto">
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white">
          <Typewriter
            words={["Your Health", "Your Happiness", "Your Future"]}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={80}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </h1>

        <p className="mt-4 text-base sm:text-lg md:text-2xl lg:text-3xl font-semibold text-white">
          Our Number 1 Priority
        </p>
      </div>
    </section>
  );
};

export default Hero;
