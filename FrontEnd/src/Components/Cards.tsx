import React from "react";

type CardsProps = {
  image: string;
  title: string;
  description: string;
};

const Cards = (props: CardsProps) => {
  return (
    <div className="flex items-center bg-[var(--color-surface)] rounded-2xl h-52 p-6 max-w-sm w-full transition-all duration-300 hover:scale-105 ">
      {/* Icon container */}
      <div className="flex-shrink-0 p-3 bg-blue-500/10 rounded-full mr-4 text-blue-700 flex items-center justify-center">
        <img
          src={props.image}
          alt="Icon"
          className="w-18 h-18 object-contain"
        />
      </div>

      {/* Text content container */}
      <div className="flex-1 flex flex-col justify-center mb-3">
        <h2 className="text-2xl font-bold text-[var(--text-primary)] ">{props.title}</h2>
        <p className="text-[var(--text-muted)] leading-relaxed">{props.description}</p>
      </div>
    </div>
  );
};

export default Cards;
