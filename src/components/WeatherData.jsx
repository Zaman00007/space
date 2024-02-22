import React from "react";

const WeatherData = ({ data }) => {
  return (
    <div className="weather-data">
      <h2>Weather Data</h2>
      <div>
        <p>Date: {data}</p>
        
        
      </div>
    </div>
  );
};

export default WeatherData;
