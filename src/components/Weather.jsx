import React, { useState, useEffect } from 'react';

import axios from 'axios';
import styled from 'styled-components';

const WeatherDiv = styled.div`
  width: 100%;
  height: 100%;
`;

const Weather = ({ className, children }) => {
  const [weather, setWeather] = useState('');

  const api = {
    key: process.env.REACT_APP_API_KEY,
    base: 'https://api.openweathermap.org/data/2.5/weather?',
  };

  const lat = 37.56667;
  const lon = 126.97806;
  const url = `${api.base}lat=${lat}&lon=${lon}&appid=${api.key}`;

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        const data = response.data;
        setWeather({
          id: data.weather[0].id,
          temperature: data.main.temp,
          main: data.weather[0].main,
        });
      })
      .catch(function (error) {
        alert(error);
      });
  }, []);

  return (
    <WeatherDiv className={className}>
      <span>{(weather.temperature - 273.15).toFixed(2)}℃ </span>
      <span>{weather.main}</span>
      {children}
    </WeatherDiv>
  );
};

export default Weather;
