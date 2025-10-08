import React from "react";
import CountUp from "react-countup";

const StatsCounter = () => {
  return (
    <section className="bg-[var(--bg)] transition-all duration-300 hover:scale-105 p-10 md:p-16">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="w-full text-center mb-10">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-white mb-4">
            Why Choose Us?
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white/80 max-w-3xl mx-auto">
            Stats By Numbers
          </p>
        </div>

        {/* Stats */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-white text-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-bold">
              <CountUp end={95} duration={2} suffix="%" enableScrollSpy />
            </h1>
            <p className="mt-2 text-base sm:text-lg">
              Prescription accuracy rate
            </p>
          </div>

          <div>
            <h1 className="text-4xl sm:text-5xl font-bold">
              {" "}
              <CountUp end={100} duration={2} suffix="+" enableScrollSpy />
            </h1>
            <p className="mt-2 text-base sm:text-lg">
              Prescriptions filled monthly
            </p>
          </div>

          <div>
            <h1 className="text-4xl sm:text-5xl font-bold">
              {" "}
              <CountUp end={500} duration={2} suffix="+" enableScrollSpy />
            </h1>
            <p className="mt-2 text-base sm:text-lg">
              Trusted partner pharmacies
            </p>
          </div>

          <div>
            <h1 className="text-4xl sm:text-5xl font-bold">
              <CountUp end={1000} duration={2} enableScrollSpy />+
            </h1>
            <p className="mt-2 text-base sm:text-lg">Happy customers served</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsCounter;
