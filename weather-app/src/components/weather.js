import React, { useState, useEffect } from 'react';
import '../App.css';

function Weather() {

const [query, setQuery] = useState({})
const [city, setCity] = useState('Mumbai')
const [search, setSearch] = useState('')
const [temp , setTemp] = useState('0')
const [mintemp , setMinTemp] = useState('0')
const [maxtemp , setMaxTemp] = useState('0')


const API_KEY = "ac6b5458ed29480f488303d12a15c7c9"
const Request = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
useEffect(()=>{
  const getWeather = async ()=>{
  const response = await fetch(Request)
  const data  = await response.json()
  setQuery(data)
  setTemp(data.main.temp)
  setMinTemp(data.main.temp_min)
  setMaxTemp(data.main.temp_max)

}
  getWeather()
}, [city])


const updateText = (event)=>{
  var name = event.target.value
  setSearch(name)
}

const fetchWeather = (event)=>{
  event.preventDefault()
  setQuery(search)
  setCity(search)
}

  return (
    <div className="App">
      <form onSubmit={fetchWeather}>
      <input type="text" onChange={updateText}/>
      <button type="submit" >Search</button>
      </form>
      <div>
        {city}
       <p> {temp}</p>
        <p>{mintemp}</p>
        <p>{maxtemp}</p>
      </div>
    </div>
  );
}

export default Weather;
