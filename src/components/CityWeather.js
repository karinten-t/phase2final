import React from 'react';

function CityWeather({ weather }) {
  if (!weather) return <div className="no-data">No city selected or found</div>;

  return (
    <div className="weather-card">
      <h2>{weather.city}</h2>
      <div className="weather-details">
        <p>Temperature: {weather.temperature}</p>
        <p>Conditions: {weather.conditions}</p>
        <p>Humidity: {weather.humidity}</p>
        <p>Wind: {weather.wind}</p>
      </div>
    </div>
  );
}

export default CityWeather;