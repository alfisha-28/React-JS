import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './InfoBox.css';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import CloudIcon from '@mui/icons-material/Cloud';

export default function InfoBox({info}) {
    const INIT_URL = "https://images.unsplash.com/photo-1663774718003-14c125ac0d1a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8b3ZlcmNhc3QlMjBjbG91ZHN8ZW58MHx8MHx8fDA%3D";
  
    let COLD_URL = "https://images.unsplash.com/photo-1519944159858-806d435dc86b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y29sZHxlbnwwfHwwfHx8MA%3D%3D";
    let HOT_URL = "https://images.unsplash.com/photo-1524594081293-190a2fe0baae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
    let RAIN_URL = "https://images.unsplash.com/photo-1519692933481-e162a57d6721?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cmFpbnxlbnwwfHwwfHx8MA%3D%3D   "; 
 
    return(
        <div className="">
    <div className="cardContainer">
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={
          info.humidity > 80 ? RAIN_URL : info.temp > 18 ? HOT_URL : info.temp < 18 ? COLD_URL : INIT_URL
        }
        title="green iguana"
      />
      <div className="content">
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city} {
          info.humidity > 80 ? <ThunderstormIcon/> : info.temp > 18 ? <WbSunnyIcon/> : info.temp < 18 ? <AcUnitIcon/> :  <CloudIcon/>
        }
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}> 
         <div>Tempertaure={info.temp}&deg;C</div>
         <div>Min Temp={info.tempMin}&deg;C</div>
         <div>Max Temp={info.tempMax}&deg;C</div>
         <div>Humidity={info.humidity}</div>
         <div>Pressure={info.pressure}</div>
         <div>The weather can be described as {info.weather} and feels like {info.feelsLike}&deg;C</div>
        </Typography>
      </CardContent>
      </div>
    </Card>
    </div>
  </div>
  );
}