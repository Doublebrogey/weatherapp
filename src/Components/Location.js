import React from "react";

// const seasonConfig = {
//   summer: {
//     iconName: "sun",
//   },
//   winter: {
//     iconName: "snowflake",
//   },
// };

// const icons = (temps) => {
//   if (temps > 50) {
//     return <i className={"sun icon"} />;
//   } else {
//     <i className={"snowflake icon"} />;
//   }
// };


const getIcon = (description) => {
  console.log(description)
  let icon = ''
  switch (description) {
    case 'broken clouds':
      icon = 'massive cloud icon'
      break;
    case 'few clouds':
      icon = 'massive sun icon'
      break;
    case 'clear sky':
      icon = 'massive skyatlas icon'
      break;
    default:
      icon = 'massive snowflake icon'
  }
  return (
    <i className={icon} />

  )
}

const Location = (props) => {
  const city = props.city.map(({ description, id }) => {
    return (
      <div key={id} className="ui message" style={{ marginRight: "auto" }}>
        <h2>
          <b>Weather in {props.name} today:</b>
        </h2>
        <h3>
          Sky: {description.charAt(0).toUpperCase() + description.slice(1)}
        </h3>
        <h3>Current Temp (Fahrenheit): {Math.floor(props.temps)}</h3>
        <h3>Feels Like (Fahrenheit): {Math.floor(props.feelsLike)}</h3>
        <div>
          {getIcon(description)}
        </div>
      </div>
    );
  });

  return <div> {city} </div>;
};

export default Location;

// const tempIcon = (sun, snowflake) => {
//   if (props.temps > 50) {
//     return sun;
//   } else {
//     return snowflake;
//   }
// };

// tempIcon(props.temps);
