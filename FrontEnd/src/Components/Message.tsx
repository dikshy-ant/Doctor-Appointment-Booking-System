import React from "react";
import directorPhotoUrl from "../assets/images/Director.png";

const Message = () => {
  return (
    <div>
      <div className="max-w-full mx-auto flex flex-col lg:flex-row lg:gap-0 transition-all duration-300 hover:scale-103">
        {/* Text Section */}
        <div className="bg-[var(--bg)] lg:w-1/2 flex flex-col justify-center p-8 lg:pl-16 text-white">
          <h1 className="text-5xl md:text-5xl font-bold mb-2">
            Message From Director
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Arthur Morgan</h2>
          <p className="text-base px-1">
            Hami Sab khatra Doctor ho Hamro Service use garam. Lorem ipsum dolor
            sit amet consectetur, adipisicing elit. Praesentium ipsa, sed aut
            iste laboriosam veniam cumque explicabo suscipit voluptates maxime
            quam nam quasi saepe aspernatur sapiente! Dolor odit praesentium
            neque.
          </p>
          <p className="text-base font-bold py-3">
            Please note that the office is not wheelchair accessible. Assistance
            is offered at all times.
          </p>
        </div>

        {/* Image Section */}
        <div className="lg:w-1/2 w-full flex flex-col">
          <img
            src={directorPhotoUrl}
            alt="Arthur Morgan, the director."
            className="w-full h-[60vh] lg:h-[70vh] object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Message;
