import React from "react";
import "./styles.css";
import "./weatherData.js"
import weatherData from "./weatherData.js";
import WeatherForecast from "./components/WeatherForecast";

export default function App() {
  const allWeatherData = weatherData.map((ele, index) =>{
    return <WeatherForecast 
    {...ele} 
    key={index}/> 
  })
  return (
    <div className = "App">
      <section>
      {allWeatherData}
      </section>
    </div> 
    
  )
}
