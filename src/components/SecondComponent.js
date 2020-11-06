import React from "react";

const SecondComponent = () => {
  const myStyle = {
    color: "green",
    backgroundColor: "yellow",
    fontSize: "100px",
    fontSize: "sans-serif",
  };

  const otherStyle = {
    ...myStyle,
    backgroundColor: "blue",
  };

  const condition = true;
  return (
    <h1   style={condition ? myStyle : otherStyle}>
      {condition ? "Hello From Component" : "Good Bye"}
    </h1>
  );
};

export default SecondComponent;
