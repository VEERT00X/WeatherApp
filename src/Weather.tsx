import { useState, useEffect } from "react";
import WeatherTable from "./WeatherTable";
import WeatherNow from "./WeatherNow";

interface location {
  location: {
    latitude: number;
    longitude: number;
  };
}

const Weather = ({ location }: location) => {
  const [temperature, setTemperature] = useState([]);
  const [rain, setRain] = useState([]);
  const [time, setTime] = useState([]);
  const [error, setError] = useState(false);

  const getrequest = async () => {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${location.latitude}&longitude=${location.longitude}&hourly=temperature_2m,rain`;
    const response = await fetch(url);
    const data = await response.json();

    if (response.status === 200) {
      const temp: any = [];
      const time: any = [];
      const rain: any = [];
      let nowTime = new Date().getHours();
      let leftTime = 24 + nowTime;
      for (let i = nowTime; i < leftTime; i++) {
        let date = new Date(data.hourly.time[i]);
        if (date.getHours() > 9) {
          time.push(date.getHours());
        } else {
          time.push("0" + date.getHours());
        }
        let Temperature = Math.floor(data.hourly.temperature_2m[i]);
        if (Temperature <= 9 || Temperature <= -9) {
          temp.push(`0${Math.floor(data.hourly.temperature_2m[i])}°C`);
        } else {
          temp.push(`${Math.floor(data.hourly.temperature_2m[i])}°C`);
        }
        rain.push(data.hourly.rain[i]);
      }
      setTemperature(temp);
      setTime(time);
      setRain(rain);
      setError(false);
    } else {
      setError(true);
    }
  };

  useEffect(() => {
    getrequest();
  }, [location]);

  return (
    <>
      {error ? (
        <p>Something went wrong</p>
      ) : (
        <>
          <WeatherNow rain={rain[0]} temperature={temperature[0]} />
          <WeatherTable rain={rain} temperature={temperature} time={time} />
        </>
      )}
    </>
  );
};

export default Weather;
