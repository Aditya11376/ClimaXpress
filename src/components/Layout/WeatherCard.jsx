import { WiHumidity } from "react-icons/wi";
import { FaWind, FaSun, FaCloud, FaCloudRain } from "react-icons/fa";
import { IoRainy } from "react-icons/io5";
import { useState, useEffect } from "react";
import axios from "axios";
import { Loader } from "./Loader";


export const WeatherCard = ({ city }) => {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  const api_key = "81bb0d71ff8fb6a964b019c26ec7fb3f";

  const fetchWeather = async () => {
    try {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`
      );
      setWeather(res.data);
      setError("");
    } catch (err) {
      setError("Failed to fetch weather data!");
      setWeather(null);
    }
  };

  useEffect(() => {
    if (!city) return; // Do nothing if no city
    fetchWeather();
  }, [city]);

  if (error) return <p className="text-red-600">{error}</p>;
  if (!weather) return <Loader/>;

  // Extracting data
  const temp = weather.main?.temp ?? 0;
  const feelsLike = weather.main?.feels_like ?? 0;
  const minTemp = weather.main?.temp_min ?? 0;
  const maxTemp = weather.main?.temp_max ?? 0;
  const humidity = weather.main?.humidity ?? 0;
  const wind = weather.wind?.speed ?? 0;
  const rain = weather.rain?.["1h"] || weather.rain?.["3h"] || 0;

  const today = new Date().toLocaleDateString("en-us", { weekday: "long" });

  const condition = weather.weather[0]?.main; // "Clear", "Clouds", "Rain", etc.

  // Dynamic main weather icon
  let WeatherIcon = <FaSun size={80} />;
  if (condition === "Clouds") WeatherIcon = <FaCloud size={80} />;
  else if (condition === "Rain") WeatherIcon = <FaCloudRain size={80} />;

  return (
    <div className="card">
      <div className="container-card">
        {/* Header */}
        <div className="card-part-one">
          <span>Right now in, </span>
          <h2>{weather.name}</h2>
        </div>

        {/* Temperature & Main Icon */}
        <div className="card-part-two">
          <div className="two-grid-two">
            <div className="grid-part-one">{WeatherIcon}</div>
            <div className="grid-part-two">
              <h1 className="temperature">{temp.toFixed(1)}°C</h1>
              <h4 className="feels-like">
                Feels like: {feelsLike.toFixed(1)}°C
              </h4>
              <h4 className="min-max-temp">
                {minTemp.toFixed(1)} / {maxTemp.toFixed(1)} °C
              </h4>
              <h4 className="today-name">{today}</h4>
            </div>
          </div>
        </div>

        {/* Wind, Humidity, Rain */}
        <div className="card-part-three">
          <div className="two-grid-three">
            <div className="grid-part-one">
              <FaWind size={32} />
              <p className="wind">{wind} m/s</p>
            </div>
            <div className="grid-part-two">
              <WiHumidity size={35} />
              <p className="humidity">{humidity}%</p>
            </div>
            <div className="grid-part-three">
              <IoRainy size={35} />
              <p className="rain">{rain}%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
