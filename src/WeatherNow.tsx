import React, { useState, useEffect } from "react";

interface Time {
  hours: number | string;
  minutes: number | string;
  seconds: number | string;
}

const getTime = (): Time => {
  const now = new Date();
  const seconds =
    now.getSeconds() < 10 ? `0${now.getSeconds()}` : now.getSeconds();
  const minutes =
    now.getMinutes() < 10 ? `0${now.getMinutes()}` : now.getMinutes();
  const hours = now.getHours() < 10 ? `0${now.getHours()}` : now.getHours();
  return {
    hours: hours,
    minutes: minutes,
    seconds: seconds,
  };
};

const WeatherNow = ({ temperature, rain }: any) => {
  const [date, setDate] = useState(getTime());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDate(getTime());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="weather-now">
      <div className="weather-now__container">
        <div className="weather-now__container__data">
          <h2>
            Its {date.hours}:{date.minutes}:{date.seconds} and we have {temperature} and {rain}% chance for rain
          </h2>
        </div>
      </div>
    </div>
  );
};

export default WeatherNow;
