import axios from 'axios';

const api = {
  key: process.env.REACT_APP_API_KEY,
  base: 'https://api.openweathermap.org/data/2.5/weather?',
  lat: 37.56667,
  lon: 126.97806,
};

const getWeather = async () => {
  const requestURL = `${api.base}lat=${api.lat}&lon=${api.lon}&appid=${api.key}`;

  const response = await axios.get(requestURL);
  return response.data;
};

export { getWeather };
