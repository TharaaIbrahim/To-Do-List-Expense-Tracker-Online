import React, { useEffect } from "react";
import "./API.css";

const API = () => {
  useEffect(() => {
    async function displayWeather() {
      const city = "Zarqa";
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=134551223438cbdf20ce7ccd23fe0f52`;
      const response = await fetch(url);
      const data = await response.json();

      document.querySelector(".weatherInfo").innerHTML = `
     <ul >
        <li className="city">${data.name}</li>
        <li className="temp">${data.main.temp}<sup>°C</sup></li>
      </ul>`;
    }

    displayWeather();
  }, []);

  return <div className="weatherInfo"></div>;
};

export default API;
