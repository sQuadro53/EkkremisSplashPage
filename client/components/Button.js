import React from "react";
import "../styles/Button.css";

// component for all orange buttons
const Button = ({ className, children, onClick }) => {
  return (
    <div>
      <button className={className} onClick={onClick}>
        {children}
      </button>
    </div>
  );
};

export default Button;
