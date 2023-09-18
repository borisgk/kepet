import React, { useState } from 'react';
import moment from 'moment';
import "./DayCard.css";

const DayCard = ({ dailyData, setSelectedDayWeather }) => {
  const handleClick = (reading, i) => {
    setSelectedDayWeather(reading);
    setactive(i);
  };

  const [active, setactive] = useState(0);

  const Cards = dailyData.map((reading, index) => {
    let newDate = new Date();
    const weekday = reading.dt * 1000;
    newDate.setTime(weekday);
    const maxCelsius = Math.round(reading.temp.max - 273.5);
    const minCelsius = Math.round(reading.temp.min - 273.5);

    const imgURL = `owf owf-${reading.weather[0].id} owf-5x`;

    return (
      <div className="slider_children" tabIndex="0" key={index}>
        <div
          
          onClick={() => handleClick(reading, index)}
        >
          <div className="card-content">
            <div style={{ fontSize: 14 }} className="text-secondary">
              <h4 className="card-title">{moment(newDate).format('dddd')}</h4>
              <h6 className="card-title">{moment(newDate).format('DD/MM/Y')}</h6>
            </div>
            <h2 className="h2">
              <div>
                <span>{maxCelsius + "°"}</span> <span>{minCelsius + "°"}</span>
              </div>
            </h2>
            <div className="text-secondary" style={{ marginBottom: 12 }}>
              <i className={imgURL} alt="..." style={{ maxHeight: '80px' }} />
            </div>
            <p className="body2">{reading.weather[0].description}</p>
          </div>
        </div>
      </div>
    );
  });

  return <div className="slider_component">{Cards}</div>;
};

export default DayCard;
