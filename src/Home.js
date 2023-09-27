import React, { useState } from "react";
import "./Home.css";
import Search from "./Card/Search";
import WeatherCard from "./Card/WeatherCard";

function Home() {
  const [value, setValue] = useState("");
  const [city, setCity] = useState("");
  const [temp, setTemp] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const fetchApi = async () => {
    setIsLoading(true); 
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=b24982bca818f3dea1c76357d4773f19`)
      if (response.ok) {
        const data = await response.json();
        console.log(data); 
        setCity(data.name);
        setTemp((data.main.temp - 273.15).toFixed(1));
      } else {
        console.error('Error fetching weather data:', response.statusText);
      }
    } catch (error) {
      console.error('Error fetching weather data:', error);
    } finally {
      setIsLoading(false); 
    }
  };

  return (
    <div className="weatherWrapper">
      <div className="header">
        <h1>
          Weather Report
        </h1>
      </div>
      <div className="SearchFilter">
        <Search
          onChange={handleChange}
          value={value}
          onSearch={fetchApi} 
          isLoading={isLoading}
        />
      </div>
      <div className="weatherCard">
        {isLoading ? (
          <div className="loadingIcon">Loading...</div>
        ) : (
          <WeatherCard city={city} temp={temp} />
        )}
      </div>
      
=  


    </div>
  );
}

export default Home;
