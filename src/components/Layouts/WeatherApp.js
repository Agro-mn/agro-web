import React, { useState, useEffect } from 'react';
import { Card, Input, Button } from 'antd';
import axios from 'axios';

const WeatherApp = () => {
  const [city, setCity] = useState('Ulaanbaatar'); // Default city
  const [weather, setWeather] = useState(null);

  const fetchWeather = async () => {
    const API_KEY = '5f6db829e4b3bf40ac6a53ef1b352f5d'; //8tVPT35LPhpIa57   5f6db829e4b3bf40ac6a53ef1b352f5d
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    try {
      const response = await axios.get(url);
      setWeather(response.data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  useEffect(() => {
    fetchWeather();
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <Card title={`Weather in ${city}`} style={{ width: 300 }}>
        {weather ? (
          <div>
            <p>Temperature: {weather.main.temp}°C</p>
            <p>Condition: {weather.weather[0].description}</p>
            <p>Wind Speed: {weather.wind.speed} m/s</p>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </Card>
      <Input
        placeholder="Enter city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        style={{ marginTop: '10px' }}
      />
      <Button type="primary" onClick={fetchWeather} style={{ marginTop: '10px' }}>
        Get Weather
      </Button>
    </div>
  );
};

export default WeatherApp;