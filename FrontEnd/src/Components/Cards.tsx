import React from "react";

type CardsProps = {
  image: string;
  title: string;
  description: string;
};

const Cards = (props: CardsProps) => {
  return (
    <div className="flex items-center bg-[var(--color-surface)] rounded-xl sm:rounded-2xl h-40 sm:h-44 md:h-48 lg:h-52 p-3 sm:p-4 md:p-5 lg:p-6 max-w-sm w-full transition-all duration-300 hover:scale-105">
      {/* Icon container */}
      <div className="flex-shrink-0 p-2 sm:p-3 bg-blue-500/10 rounded-full mr-3 sm:mr-4 text-blue-700 flex items-center justify-center">
        <img
          src={props.image}
          alt="Icon"
          className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-18 lg:h-18 object-contain"
        />
      </div>

      {/* Text content container */}
      <div className="flex-1 flex flex-col justify-center mb-2 sm:mb-3">
        <h2 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-bold text-[var(--text-primary)] line-clamp-2">{props.title}</h2>
        <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed line-clamp-2">{props.description}</p>
      </div>
    </div>
  );
};

export default Cards;
