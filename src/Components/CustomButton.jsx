import React from "react";

const CustomButton = ({ className, text, handleClick }) => {
  return (
    <button className={className} onClick={() => handleClick(className)}>
      {text}
    </button>
  );
};

export default CustomButton;
