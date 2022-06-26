//import './App.css';
// import UilReact from '@iconscout/react-unicons/icons/uil-react'
import TopButton from "./components/TopButton";
import Inputs from "./components/Inputs";
import TimeAndLocation from "./components/TimeAndLocation";
import TemperatueAndDetails from "./components/TemperatueAndDetails";
import Forecast from "./components/Forecast";
import { useEffect, useState } from "react";
/* eslint-disable */
import Cloud from "./components/Effects/Cloud/Cloud";
import Snow from "./components/Effects/Snow/Snow";
import Cloud2 from "./components/Effects/Cloud2/Cloud2";
import Rain from "./components/Effects/Rain/Rain";
import Sunny from "./components/Effects/Sunny/Sunny";
import getFormattedWeatherData from "./services/weatherService";
import gather_data from "./services/data";
import axios from "axios";

function App() {

  
  

  



  

 
  
  const [query, setQuery] = useState({ q: "" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);

  useEffect( () => {
    getData()

  }, [])

  useEffect(() => {
    
    const fetchWeather = async () => {
      
      await getFormattedWeatherData({ ...query, units }).then((data) => {
        
        setWeather(data);
        //console.log(data);
        //console.log((weather.icon).includes('n')); 
        
      });
    };
    
    fetchWeather();
  }, [query, units]);

  //const [ip, setIP] = useState('');
  const getData = async () => {
    const res = await axios.get('https://geolocation-db.com/json/')
    setQuery({ q: res.data.city });
    //console.log(query);
  }


  const formatBackground = () =>{
    if(!weather) return <Cloud/> 
    if(weather.details === "Clouds") return <Cloud/> 
    if(weather.details === "Clear") return <Sunny /> 
    if(weather.details === "Snow") return <Snow />
    if(weather.details === "Haze") return <Cloud2/>
    if(weather.details === "Rain") return <Rain/>
  }
  

  const formatBackgrounds = () =>{
    
    
    if(!weather) return "col2"
    const threshold = units === "metric" ? 30 : 88
    
    if(weather.temp <= threshold && (weather.icon).includes('d')) return "col2"
    if(weather.temp >= threshold && (weather.icon).includes('d')) return "col1"
    if(!(weather.icon).includes('d')) return "col3"
  }

  
  
  return (
    <div className="m-0 p-0">
      <div className={`bkg ${formatBackgrounds()}`}>
      <div>{formatBackground()}</div>
      </div>
      <div className="mx-auto py-8 max-w-screen-md px-32  h-fit shadow-xl shadow-black-400 ff">
        <div className={`color-blue ${formatBackgrounds()}`}>
          <div>{formatBackground()}</div>
        </div>

        <TopButton setQuery={setQuery} />
        <Inputs setQuery={setQuery} unit setUnits={setUnits} />

        {weather && (
          <div>
            <TimeAndLocation weather={weather} />
            <TemperatueAndDetails weather={weather} />
            <Forecast title="Hourly forecast" items={weather.hourly} />
            <Forecast title="Daily forecast" items={weather.daily} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
