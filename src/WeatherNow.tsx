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
  return {
    hours: now.getHours(),
    minutes: now.getMinutes(),
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
        <div className="weather-now__container__time">
          <h1>
            Its {date.hours}:{date.minutes}:{date.seconds}
          </h1>
        </div>
        <div className="weather-now__container__data">
          <h2>
            We have {temperature} and {rain / 100}% chance for
            rain
          </h2>
        </div>
      </div>
    </div>
  );
};

export default WeatherNow;
