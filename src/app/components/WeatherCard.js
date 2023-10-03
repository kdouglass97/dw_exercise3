"use-client";

const WeatherCard = () => ({
    cityName,
    cloudiness,
    currentTemperature,
    highTemperature,
    lowTemperature,
    humidity,
    weatherType,
    windSpeed,
}) => (

    <div> 
        <h2>
            City Name

            <p>Weather Type: {weatherType}</p>
            <p>Current Temperature: {currentTemperature}</p>
            <p>High Temperature: {highTemperature}</p>
            <p>Low Temperature: {lowTemperature}</p>
            <p>Cloudiness</p>
            <p>Humitidy</p>
            <p>Wind speed</p>
        </h2>
    </div>
);

export default WeatherCard;