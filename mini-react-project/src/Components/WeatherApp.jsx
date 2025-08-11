import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";
import './WeatherApp.css';

export default function WeatherApp() {
    let [weatherInfo, setWeatherInfo] = useState({
       city: "xx",
       temp: "xx",
       tempMin: "xx",
       tempMax: "xx",
       humidity: "xx",
       pressure: "xx",
       feelsLike: "xx",
       weather: "xx",
    });
     
    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }

    return (
        <div>
            <h2>Weather App</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    );
}