import React, {useState,useEffect} from 'react'
import Body from './Body'

export default function Navbar(props) {
    const [search, setsearch] = useState(0)
    const [city, setcity] = useState("")
    const [temp, settemp] = useState(0)
    const [humidity, sethumidity] = useState(0)
    const [feels, setfeels] = useState(0)
    const [cityName, setcityName] = useState("")
    const [alert, setalert] = useState(false)

    const handleChange=(e)=>{
        setcity(e.target.value)
    }

    const fetchData = async(e)=>{
      e.preventDefault();
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${props.apiKey}`
        let data = await fetch(url)
        let parseData = await data.json()
        if(parseData.cod === "404"){
          setalert(true)
          return;
      }
      else{
        setcityName(parseData.name)
        settemp(parseData.main.temp)
        setfeels(parseData.main.feels_like)
        sethumidity(parseData.main.humidity)
        setsearch(search+1)
        console.log(parseData);
      }
    }

    useEffect(() => {
      setTimeout(() => {
          setalert(false)
      }, 4000);
  }, [alert])


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

{alert ? (
        <div class="alert alert-danger" role="alert">
          <strong>Error!</strong> Wrong Input Data, enter city name only.
        </div>
      ) : (
        ""
      )}

{search>0?(<Body humidity={humidity} cityName = {cityName} temp={temp-272.15} city = {city} feels={feels-272.15}/>):<p className='justify-content-center text-center my-5' style={{fontSize:"25px"}}>Nothing to show here!</p>}
  


  </>
  )
}
