import React from 'react';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import './WeatherCard.css';

function WeatherCard(props) {
  const { city, temp } = props;

  return (
    <div className="cardContainer">
      <div className="cardContainer1">
        <h2>{city}</h2>
        <p>India</p>
        <div className="detailsIcon">
          <h1>
            <WbSunnyIcon style={{ fontSize: "50px", marginRight: "1rem" }} />
            {temp}&deg;C
          </h1>
        </div>
      </div>
    </div>
  );
}

export default WeatherCard;