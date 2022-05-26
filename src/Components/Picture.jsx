import React from "react";

const Counter = ({ category, index }) => {
  return (
    <div className="imgContainer">
      {category && (
        <img
          className="mainImg"
          src={require(`../assets/${category}-images/item-${index}.jpg`)}
          alt="main img"
        />
      )}
    </div>
  );
};

export default Counter;
