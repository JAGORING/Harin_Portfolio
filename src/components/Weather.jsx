import React, { useState, useEffect } from 'react';

import styled from 'styled-components';
import { getWeather } from '../services/weather';

const WeatherDiv = styled.div`
  width: 100%;
  height: 100%;
`;

const Weather = ({ className, children }) => {
  const [weather, setWeather] = useState('');

  useEffect(() => {
    getWeather()
      .then((res) => {
        setWeather({
          id: res.weather[0].id,
          temperature: res.main.temp,
          main: res.weather[0].main,
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
