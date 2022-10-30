import React, { useState } from "react";
import styled from "styled-components";
import Axios from "axios";
import CityComponent from "./modules/CityComponent";
import WeatherComponent from "./modules/WeatherInfoComponent";
import img1 from "./icons/sunny.svg";
import img2 from "./icons/night.svg";
import img3 from "./icons/day.svg";
import img4 from "./icons/cloudy-night.svg";
import img5 from "./icons/cloudy.svg";
import img6 from "./icons/perfect-day.svg";
import img7 from "./icons/rain.svg";
import img8 from "./icons/rain-night.svg";
import img9 from "./icons/storm.svg";
import img10 from "./icons/snowflake.svg";
import img11 from "./icons/mist.svg";
export const WeatherIcons = {
  "01d": img1,
  "01n": img2,
  "02d": img3,
  "02n": img4,
  "03d": img5,
  "03n": img5,
  "04d": img6,
  "04n": img4,
  "09d": img7,
  "09n": img8,
  "10d": img7,
  "10n": img8,
  "11d": img9,
  "11n": img9,
  "13d": img10,
  "13n": img10,
  "50d": img11,
  "50n": img11,
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 380px;
  padding: 20px 10px;
  margin: auto;
  border-radius: 4px;
  box-shadow: 0 3px 6px 0 #555;
  background: white;
  font-family: Montserrat;
`;

const AppLabel = styled.span`
  color: black;
  margin: 20px auto;
  font-size: 25px;
  font-weight: bold;
`;
const CloseButton = styled.span`
  padding: 2px 3px;
  background-color: black;
  border-radius: 50%;
  color: white;
  position: absolute;
`;

function App() {
  const [city, updateCity] = useState();
  const [weather, updateWeather] = useState();
  const fetchWeather = async (e) => {
    e.preventDefault();
    const response = await Axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=62a88b223f2d2005516fc1ea2a8bd561`,
    );
    updateWeather(response.data);
  };
  return (
    <Container>
      <AppLabel>Weather App</AppLabel>
      {city && weather ? (
        <WeatherComponent weather={weather} city={city} />
      ) : (
        
        <CityComponent updateCity={updateCity} fetchWeather={fetchWeather} />
        
      )}
    </Container>
  );
}

export default App;
