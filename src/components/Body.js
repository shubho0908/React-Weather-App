import React from "react";
import Temp from './temp.png'

export default function Body(props) {
  const temp = props.temp.toString().slice(0, 4);
  const feels = props.feels.toString().slice(0, 4);

  return (
    <>
      <div className="container ">
        <div className="card my-5 justify-content-center text-center">
          <h5 className="card-header">{props.cityName}</h5>
          <div className="card-body">
            <h5 className="card-title"><img src={Temp} alt="Temperature" /> Temp: {temp}°C</h5>
            <h5 className="card-title">Feels Like: {feels}°C</h5>
            <h5 className="card-title">Humidity: {props.humidity}%</h5>
          </div>
        </div>
      </div>
    </>
  );
}
