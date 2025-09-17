import React from "react";

const StatsCounter = () => {
  return (
    <section className="bg-[var(--bg)] transition-all duration-300 hover:scale-105  p-16 ">
      <div className="m-auto">
        <div className="w-full text-center ">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4">
            Why Choose Us?
          </h1>
          <p className="text-xl md:text-2xl text-white-700 max-w-3xl mx-auto mb-6">
            Stats By Numbers
          </p>
        </div>

        <div className="w-full flex justify-center align-middle gap-16 text-white">
          <div>
            <h1 className="text-5xl md:text-5xl font-bold text-center">95%</h1>
            <p className="mt-2 text-lg">Prescription accuracy rate</p>
          </div>

          <div>
            <h1 className="text-5xl md:text-5xl font-bold text-center">10k+</h1>
            <p className="mt-2 text-lg">Prescriptions filled monthly</p>
          </div>

          <div>
            <h1 className="text-5xl md:text-5xl font-bold text-center">500+</h1>
            <p className="mt-2 text-lg">Trusted partner pharmacies</p>
          </div>

          <div>
            <h1 className="text-5xl md:text-5xl font-bold text-center">24/7</h1>
            <p className="mt-2 text-lg">Customer support available</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsCounter;
