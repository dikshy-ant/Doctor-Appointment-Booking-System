import React from "react";

type ButtonProps = {
  label: React.ReactNode;
};

const Button = (props: ButtonProps) => {
  return (
    <button className="bg-[var(--button-bg)] text-white font-bold py-4 px-12 rounded-2xl shadow-lg h-full cursor-pointer">
      {props.label}
    </button>
  );
};

export default Button;
