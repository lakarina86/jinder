import clsx from "clsx";
import React from "react";
import "./Button.css";

interface Props {
  text: string;
  className: "outlined" | "contained";
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
}

const Button: React.FC<Props> = ({ text, className, onClick, ...props }) => {
  return (
    <button {...props} className={clsx(className)} onClick={onClick}>
      {text}
    </button>
  );
};

export { Button };
