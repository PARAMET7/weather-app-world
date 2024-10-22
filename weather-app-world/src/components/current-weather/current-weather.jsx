import "./current-weather.css";

const CurrentWeather= ()=>{

  return (
    <div className="weather">
      <div className="top">
        <div>
          <p className="city">Berlin</p>
          <p className="weather-description">Sunny</p>
        </div>
        <img alt="weather" className="weather-icon" src="icons/01d.png"></img>
      </div>
      <div className="bottom">
        <p className="temp">18°C</p>
        <div className="details">
          <div className="parameter-row">
            <span className="parameter-label top">
              Details
            </span>
          </div>
          <div className="parameter-row">
              <span className="parameter-label">
                Feel like
              </span>
              <span className="parameter-value">
                19°C
              </span>
          </div>
          <div className="parameter-row">
              <span className="parameter-label">
                wind
              </span>
              <span className="parameter-value">
                2 m/s
              </span>
          </div>
          <div className="parameter-row">
              <span className="parameter-label">
                Humidity
              </span>
              <span className="parameter-value">
                15%
              </span>
          </div>
          <div className="parameter-row">
              <span className="parameter-label">
                pressure
              </span>
              <span className="parameter-value">
                15 hPa
              </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CurrentWeather;
