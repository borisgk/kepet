import React, { useEffect, useState } from 'react';
import './WeatherApp.css'

import search_icon from '../Assets/search.png';
import clear_icon from '../Assets/clear.png';
import cloud_icon from '../Assets/cloud.png';
import drizzle_icon from '../Assets/drizzle.png';
import rain_icon from '../Assets/rain.png';
import snow_icon from '../Assets/snow.png';
import wind_icon from '../Assets/wind.png';
import humidity_icon from '../Assets/humidity.png';

function WeatherApp({dog}) {

  useEffect(() => {
    init(dog.city)
  }, [])

  let api_key="797c3625c753a611bf59cdbf0bbe78b8";

  let [searchInput, setSearchInput] = useState("")

  function handleChange(event) {
    setSearchInput(event.target.value)
  }

  function handleKeyDown (event) {
    if (event.key === 'Enter')
    {
      search()
    }
  }

  let [currentWeather, setCurrentWeather] = useState({
      "main": {
        "temp": 0,
        "humidity": 0,
      },
      "wind": {
        "speed": 0
      },
      "weather": [
        {
          "icon": "01d"
        }
      ]
  })

  async function init(city) {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${api_key}`    
    let response = await fetch(url);
    let data = await response.json();
    setCurrentWeather(data)
    setWeatherIcon(data.weather[0].icon)
    console.log(data)
  }

  function setWeatherIcon(code) {
    if (code==="01d" || code==="01n")
    {
      setWicon(clear_icon);
    }
    else if (code==="02d" || code==="02n")
    {
      setWicon(cloud_icon);
    }
    else if (code==="03d" || code==="03n")
    {
      setWicon(drizzle_icon);
    }
    else if (code==="04d" || code==="04n")
    {
      setWicon(drizzle_icon);
    }
    else if (code==="09d" || code==="09n")
    {
      setWicon(rain_icon);
    }
    else if (code==="10d" || code==="10n")
    {
      setWicon(rain_icon);
    }
    else if (code==="13d" || code==="13n")
    {
      setWicon(snow_icon);
    }
    else 
    {
      setWicon(clear_icon);
    }

  }

   
   const [wicon, setWicon] = useState (cloud_icon);

   const search = async () => {
         const element = document.getElementsByClassName("cityInput")
         if (element[0].value==="0")  
          {
             return 0;
          }

          let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=metric&appid=${api_key}`
          
          let response = await fetch(url);
          let data = await response.json();
          
          const humidity =  document.getElementsByClassName("humidity-percent")
          const wind =  document.getElementsByClassName("wind-rate")
          const temperature =  document.getElementsByClassName("weather-temp")
          const location =  document.getElementsByClassName("weather-location")

          humidity[0].innerHTML = data.main.humidity+" %";
          wind[0].innerHTML = Math.floor(data.wind.speed)+" km/h";
          temperature[0].innerHTML = Math.floor(data.main.temp)+" &deg;C";
          location[0].innerHTML = data.name;

          setWeatherIcon(data.weather[0].icon)

}

  return (
    <div className='weather-container weather card'>
        <div className='card-heading'>Weather</div>
         
        <div className="weather-image">
             <img className="weather-image" src={wicon} alt="" />
       </div>
       <div className="weather-temp">{Math.floor(currentWeather.main.temp * 10) / 10}&nbsp;&deg;C</div>
       <div className="weather-location">{dog.city}</div>
       <div className="data-container">
         <div className="element">
             <img src={humidity_icon} alt="" className="icon" />
             <div className="data">
                 <div className="humidity-percent">{currentWeather.main.humidity}&nbsp;%</div>
                 <div className="text">Humidity</div>
            </div>
         </div>
         <div className="element">
             <img src={wind_icon} alt="" className="icon" />
             <div className="data">
                 <div className="wind-rate">{currentWeather.wind.speed} km/h</div>
                 <div className="text">Wind Speed</div>
            </div>
         </div>

         <div className='top-bar'>
           <input type="text" className="cityInput" placeholder='Search' onChange={handleChange} onKeyDown={handleKeyDown}/>
        </div>

      </div>
    </div>

      );
}

export default WeatherApp;
