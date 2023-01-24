import React, {useState} from 'react'
import Body from './Body'

export default function Navbar(props) {
    const [city, setcity] = useState("")

    const handleChange=(e)=>{
        setcity(e.target.value)
    }

    const fetchData = async()=>{
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${props.apiKey}`
        let data = await fetch(url)
        let parseData = await data.json()

        console.log(parseData);
    }


  return (
  <>
   <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">Weather App</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-end " id="navbarSupportedContent">
      <form className="d-flex " role="search">
        <input value={city} onChange={handleChange} className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button onClick={fetchData} className="btn btn-outline-success mx-1" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
<Body  city = {city}/>

  </>
  )
}
