import React from "react";
import Temp from './temp.png'
import Feels from './feels.png'
import Humidity from './humidity.png'
import Wind from './wind.png'
import SunRise from './sunrise.png'
import SunSet from './sunset.png'

export default function Body(props) {

  const temp = props.temp.toString().slice(0, 4);
  const feels = props.feels.toString().slice(0, 4);

   const sunRise = new Date(props.sunrise * 1000);

  //  used (.padStart) function/method to add "0" infront
   const sunriseHours = sunRise.getHours().toString().padStart(2, "0");
   const sunriseMin = sunRise.getMinutes().toString().padStart(2, "0");

   const sunSet = new Date(props.sunset * 1000);
   const sunsetHours = sunSet.getHours().toString().padStart(2, "0");
   const sunsetMin = sunSet.getMinutes().toString().padStart(2, "0");

  return (
    <>
      <div className="container " >
        <div className="card my-5 justify-content-center text-center" style={{border:"3px solid rgb(0 60 255 / 50%)"}}>
          <h5 style={{fontSize:"35px", backgroundColor:"rgb(0 0 0 / 10%)"}} className="card-header">{props.cityName}, {props.country} <p className="my-2" style={{fontSize:"23px"}}>({props.weatherDetails.charAt(0).toUpperCase()+ props.weatherDetails.slice(1)})</p> </h5>
          <div className="card-body" >
            <h5 style={{fontSize:"22px"}} className="card-title"><img className="mx-2" style={{height:"50px"}} src={Temp} alt="Temperature" /> Temp: {temp}°C</h5>
            <h5 style={{fontSize:"22px"}} className="card-title"><img className="mx-2" style={{height:"50px"}} src={Feels} alt="Feels Like" /> Feels Like: {feels}°C</h5>
            <h5 style={{fontSize:"22px"}} className="card-title"><img className="mx-2" style={{height:"50px"}} src={Humidity} alt="Humidity" /> Humidity: {props.humidity}%</h5>
            <h5 style={{fontSize:"22px"}} className="card-title"><img className="mx-2" style={{height:"50px"}} src={Wind} alt="wind" /> Wind: {props.wind} km/hr</h5>
          </div>
        </div>
        <div className="card my-5 justify-content-center text-center" style={{border:"3px solid rgb(0 60 255 / 50%)"}}>
          <div className="card-body">
            <h5 style={{fontSize:"22px"}} className="card-title"><img className="mx-2" style={{height:"50px"}} src={SunRise} alt="Sun Rise" /> Sunrise: {sunriseHours}:{sunriseMin} AM (IST)</h5>
            <h5 style={{fontSize:"22px"}} className="card-title"><img className="mx-2" style={{height:"50px"}} src={SunSet} alt="Sun Set" /> Sunset: {sunsetHours}:{sunsetMin} PM (IST)</h5>
          </div>
        </div>
      </div>
    </>
  );
}
