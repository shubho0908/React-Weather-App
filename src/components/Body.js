import React from "react";

export default function Body(props) {
  const temp = props.temp.toString().slice(0, 4);
  const feels = props.feels.toString().slice(0, 4);

  return (
    <>
      <div className="container ">
        <div class="card my-5 justify-content-center text-center">
          <h5 class="card-header">{props.cityName}</h5>
          <div class="card-body">
            <h5 class="card-title">Temp: {temp}°C</h5>
            <h5 class="card-title">Feels Like: {feels}°C</h5>
            <h5 class="card-title">Humidity: {props.humidity}%</h5>
          </div>
        </div>
      </div>
    </>
  );
}
