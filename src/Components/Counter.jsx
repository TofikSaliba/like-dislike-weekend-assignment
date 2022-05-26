import React from "react";

const Counter = (value, imgSrc) => {
  return (
    <div>
      <span>{value}</span>
      <img src={imgSrc} alt="icon for counter" />
    </div>
  );
};

export default Counter;
