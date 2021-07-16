import React, { useState } from 'react'
import './App.css';

const api = {
  key: "5a0ae79ff330ce9be729c8b96027b1f9",
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});
  const search = evt => {
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?={query}&units=metric&APPID=${api.key}`)
        .then(res => res.json())
        .then(result => {
          setWeather(result);
          setQuery('');
        });
  }
}

  return (
    <div className="app">
      <main>
        <div className="search-box">
          <input
            type="text"
            className="search-bar"
            placeholder="City"
            onChange={(e) => setQuery(e.target.value)}
            value = {query}
            />
        </div>
        <div className="location-box">
          <div className="location">Varanasi,UP</div>
          <div className="date">Saturday, 11 July 2021</div>
        </div>
        <div className="weather-box">
          <div className="temp">15C</div>
          <div className="weather">Sunny</div>
        </div>

          
      </main>
    </div>
  );
}

export default App;
