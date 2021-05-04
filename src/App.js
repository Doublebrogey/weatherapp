import React from "react";
// import axios from "./api/axios";
import SearchBar from "./Components/SearchBar";
import Location from "./Components/Location";
import apiWeatherService from './api/axios'

class App extends React.Component {
  state = { city: [], temps: "", name: "" };

  onSearchSubmit = async (query) => {
    const response = await apiWeatherService.getWeather(query)

    this.setState({
      city: response.data.weather,
      temps: response.data.main,
      name: response.data.name,
    });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <Location
          city={this.state.city}
          temps={this.state.temps.temp}
          name={this.state.name}
          feelsLike={this.state.temps.feels_like}
        />
      </div>
    );
  }
}

export default App;

// import { useState } from "react";
// //import api from "./api/axios";
// import axios from "axios";
// // import Location from "./Components/Location";

// const App = () => {
//   const [city, setCity] = useState(undefined);

//   const GetWeather = (e) => {
//     e.preventDefault();

//     axios
//       .get(
//         `http://api.openweathermap.org/data/2.5/weather?zip=85259,us&appid=6438489c427c6bd2d8b2e3734db21ca1`
//       )
//       .then((res) => setCity(res.data.weather))
//       //.then((data) => setCity({ data }))
//       .catch((err) => console.log(err));
//   };

//   console.log(city);

//   return (
//     <div>
//       <h1>Weather</h1>
//       <button onClick={GetWeather}>Get Weather</button>
//       {/* <div>
//         {city.map(({ id, description }) => {
//           return (
//             <p
//               className="ui message"
//               style={{ marginRight: "1700px" }}
//               key={id}
//             >
//               Weather today: {description}
//             </p>
//           );
//         })}
//       </div> */}
//       <div>
//         <p> {JSON.stringify(city)} </p>
//       </div>
//     </div>
//   );
// };
