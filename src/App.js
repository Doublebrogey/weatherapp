import { useState } from "react";
//import api from "./api/axios";
import axios from "axios";
// import Location from "./Components/Location";

const App = () => {
  const [city, setCity] = useState([]);

  const getWeather = (e) => {
    e.preventDefault();

    axios
      .get(
        `http://api.openweathermap.org/data/2.5/weather?zip=85259,us&appid=6438489c427c6bd2d8b2e3734db21ca1`
      )
      .then((res) => setCity(res.data))
      .catch((err) => console.log(err));
  };

  console.log(city);

  return (
    <div>
      <h1>Weather</h1>
      <button onClick={getWeather}>Get Weather</button>
      {/* {city.map(({ id, description }) => {
        return (
          <div
            className="ui message"
            style={{ marginRight: "1700px" }}
            key={id}
          >
            Weather today: {description}
          </div>
        );
      })} */}
      {city.main.temp}
    </div>
  );
};

export default App;
