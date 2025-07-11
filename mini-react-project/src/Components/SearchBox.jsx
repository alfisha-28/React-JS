import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import './SearchBox.css';
import { Description } from '@mui/icons-material';

export default function SearchBox({updateInfo}) {
    let [city, setCity] = useState("");
    let [err, setErr] = useState(false);

    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "7e5d5d89017b1630f54b2746ce56d524";

    let getWeatherInfo = async () => {
        try{
             let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonResponse = await response.json();
         console.log(jsonResponse);
        let result = {
            city : jsonResponse.name,
            temp : jsonResponse.main.temp,
            tempMin  : jsonResponse.main.temp_min,
            tempMax  : jsonResponse.main.temp_max,
            humidity : jsonResponse.main.humidity,
            pressure : jsonResponse.main.pressure,
            feelsLike : jsonResponse.main.feels_like,
            weather : jsonResponse.weather[0].description,
        };
        console.log(result);
        return result;
        }catch(err){
          throw(err);
        }  
    }


    let handleChange = (event) => {
        setCity(event.target.value);
    };
 
    let handleSubmit = async (event) => {
        try{
             event.preventDefault();
             console.log(city);
             setCity("");
             let newInfo = await getWeatherInfo();
             updateInfo(newInfo);
        }catch(err){
             setErr(true);
        } 
    };
    return(
        <div>
            <div className="form">
            <form onSubmit={handleSubmit}>
                <TextField 
                id="outlined-basic" 
                label="City Name"
                variant="outlined" 
                required
                value={city}
                onChange={handleChange}
                 />

                 <br></br> <br></br>
                 <Button variant="contained" type="submit">
                    search
                </Button>
                {err && <p>No such place exists! </p>}
            </form>
            </div>
        </div>
    );
}