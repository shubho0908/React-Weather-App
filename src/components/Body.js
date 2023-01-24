import React from "react";
import Temp from './temp.png'
import Feels from './feels.png'
import Humidity from './humidity.png'
import Wind from './wind.png'

export default function Body(props) {

  const temp = props.temp.toString().slice(0, 4);
  const feels = props.feels.toString().slice(0, 4);

   const sunRise = new Date(props.sunrise * 1000);
   const sunriseHours = sunRise.getHours();
   const sunriseMin = sunRise.getMinutes();

   const sunSet = new Date(props.sunset * 1000);
   const sunsetHours = sunSet.getHours();
   const sunsetMin = sunSet.getMinutes();

  return (
    <>
      <div className="container " >
        <div className="card my-5 justify-content-center text-center" style={{border:"3px solid rgb(0 60 255 / 50%)"}}>
          <h5 style={{fontSize:"35px"}} className="card-header">{props.cityName}, {props.country}</h5>
          <div className="card-body" >
            <h5 style={{fontSize:"25px"}} className="card-title"><img style={{height:"50px"}} src={Temp} alt="Temperature" /> Temp: {temp}°C</h5>
            <h5 style={{fontSize:"25px"}} className="card-title"><img style={{height:"50px"}} src={Feels} alt="Feels Like" /> Feels Like: {feels}°C</h5>
            <h5 style={{fontSize:"25px"}} className="card-title"><img style={{height:"50px"}} src={Humidity} alt="Humidity" /> Humidity: {props.humidity}%</h5>
            <h5 style={{fontSize:"25px"}} className="card-title"><img style={{height:"50px"}} src={Wind} alt="wind" /> Wind: {props.wind} km/h</h5>
          </div>
        </div>
        <div className="card my-5 justify-content-center text-center" style={{border:"3px solid rgb(0 60 255 / 50%)"}}>
          <div className="card-body">
            <h5 style={{fontSize:"25px"}} className="card-title"><img style={{height:"50px"}} src={Temp} alt="Temperature" /> Sunrise: {sunriseHours}:{sunriseMin} AM</h5>
            <h5 style={{fontSize:"25px"}} className="card-title"><img style={{height:"50px"}} src={Feels} alt="Feels Like" /> Sunset: {sunsetHours}:{sunsetMin} PM</h5>
          </div>
        </div>
      </div>
    </>
  );
}
