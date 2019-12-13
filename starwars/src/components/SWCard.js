import React from "react";

const SWCard = props => {
  return (
    <div>
      <h2>{props.name}</h2>
      <h3>Gender:{props.gender}</h3>
      <h3>Height:{props.height}</h3>
      <h3>Weight:{props.mass}</h3>
    </div>
  );
};

export default SWCard;
