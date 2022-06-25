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

function App() {
  const [query, setQuery] = useState({ q: "casablanca" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      await getFormattedWeatherData({ ...query, units }).then((data) => {
        setWeather(data);
      });
    };

    fetchWeather();
  }, [query, units]);

  return (
    <div className="m-0 p-0">
      <div className="bkg">
        <Cloud />{" "}
      </div>
      <div className="mx-auto py-8 max-w-screen-md px-32  h-fit shadow-xl shadow-black-400 ff">
        <div id="color-blue">
          {/* <div id="Cloud"></div>
      <div id="Cloude"><Cloud2/></div>
        <div id="Snow"><Snow/></div>
        <Rain/> 
        <Sunny />
          <Snow/> 
        */}
          <Cloud />
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
