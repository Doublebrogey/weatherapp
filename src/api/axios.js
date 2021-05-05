import axios from "axios";

// export default axios.create({
//   baseURL: "api.openweathermap.org/data/2.5/weather?",
//   headers: {
//     Authorization: "6438489c427c6bd2d8b2e3734db21ca1",
//   },
//   params: {
//     q: "term",
//   },
// });

const apiWeatherService = (() => {

  const isNumeric = (num) => {
    return !isNaN(num)
  }

  const getWeather = async (query) => {

    let params;
    if (isNumeric(query)) {
      params = {
        zip: query
      }
    } else {
      params = {
        q: query
      }
    }
    console.log(params)
    const response = await axios({
      baseURL: "http://api.openweathermap.org/data/2.5/weather?units=imperial&&appid=6438489c427c6bd2d8b2e3734db21ca1",
      timeout: 1000,
      params: params,
    })
    return response
  }

  return { getWeather }

})();

export default apiWeatherService;
