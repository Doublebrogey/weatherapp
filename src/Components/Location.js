import React from "react";

const Location = (props) => {
  const city = props.city.map(({ weather, id }) => {
    return <li key={id}>{weather.main}</li>;
  });

  return <div>{city}</div>;
};

export default Location;
