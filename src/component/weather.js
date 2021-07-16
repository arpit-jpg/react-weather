import React, { useState, useEffect } from 'react'

const api = {
  key: "5a0ae79ff330ce9be729c8b96027b1f9",
  base: "https://api.openweathermap.org/data/2.5/"
}

const Weather = () => {

  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  useEffect(() => {
    const search = e => {
      
        fetch(`${api.base}weather?q=varanasi&units=metric&APPID=${api.key}`)
          .then(res => res.json())
          .then(result => {
            setWeather(result);
            setQuery('');
            console.log(result);
          });

    }
    search();
  }, [])
  const search = e => {
    if (e.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then(res => res.json())
        .then(result => {
          setWeather(result);
          setQuery('');
          console.log(result);
        });
    }
  }

  const dateBuilder = (d) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`
  }

  return (
    <div className="app container">
      <main>
        <div className="search-box">
          <input
            type="text"
            className="search-bar"
            placeholder=".....City"
            onChange={e => setQuery(e.target.value)}
            value= {query}
            onKeyPress = {search}
            // onChange={(e) => setQuery(e.target.value)}
            
            />
        </div>
        {(typeof weather.main != "undefined") ? (
          <div>
        <div className="location-box">
          <div className="location">{weather.name}, {weather.sys.country}</div>
          <div className="date">{dateBuilder(new Date())}</div>
        </div>
        <div className="weather-box">
              <div className="temp">
                  {Math.round(weather.main.temp)}°c
              </div>
          {/* <span>id</span> */}
              <div className="weather">
                  {weather.weather[0].main}
              </div>
              <div className="image">
                <img src={`images/${weather.weather[0].main}.png`}/>
              </div>
        </div>
          </div>
        ) : 
          (''
            // <div><h1>{query} Not found</h1></div>
          )
        }

          
      </main>
    </div>
  );
}
export default Weather;
