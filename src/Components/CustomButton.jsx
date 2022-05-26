import React from "react";

const CustomButton = ({ className, text, handleClick, disabled }) => {
  return (
    <button
      className={className}
      disabled={disabled}
      onClick={() => handleClick(className)}
    >
      {text}
    </button>
  );
};

export default CustomButton;
