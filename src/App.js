
import React, { useState } from "react";
import axios from "axios";
import "./App.css"

export default function Weather() {
  const [city, setCity] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState({});

  function displayWeather(response) {
    setLoaded(true);
    setWeather({
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3651978c9504998a1bbdc776a6aad483&units=metric`;
    axios.get(apiUrl).then(displayWeather);
  }
  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <form onSubmit={handleSubmit}>
      <input type="search" placeholder="Search city..." onChange={updateCity} />
      <button type="submit">Search</button>
    </form>
  );

  if (loaded) {
    return (
      <div>
        {form}
       </div>
    
            
              <h1 className="current-city">Paris</h1>
              <p className="current-details">
                <span>Description:  {weather.description}</span>
                <br />
                <span>Humidity: {weather.humidity}%, Wind: {weather.wind}km/h</span>
              </p>
      
            <span className="current-temperature-icon"></span>
            <div className="current-temperature"> Temperature:{Math.round(weather.temperature)}</div>
            
              <span className="current-temperature-unit">°C</span>
           
    <div>   
        <footer>
          <p>
            This project was coded by
            <a href="https://github.com/aam214" target="_blank">
              Ariana M.
            </a>{" "}
            and is
            <a href="https://github.com/aam214/Homework-6" target="_blank">
              on GitHub
            </a>
            and
            <a
              href="https://wondrous-sfogliatella-f05124.netlify.app/"
              target="_blank"
            >
              hosted on Netlify
            </a>
          </p>
        </footer>
      </div>
    );
  } else {
    return form;
  }
}

export default App;
