import axios from "axios";

export default axios.create({
  baseURL: "api.openweathermap.org/data/2.5/weather?",
  headers: {
    Authorization: "6438489c427c6bd2d8b2e3734db21ca1",
  },
  params: {
    q: "term",
  },
});
