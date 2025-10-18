# ClimaXpress 🌤️

A modern, elegant **React Weather Forecast App** that delivers real-time weather data — built using the **OpenWeatherMap API**.  
Experience live at: [ClimaXpress Demo](https://aditya11376.github.io/ClimaXpress/)

---

## 🖼️ Preview

![Weather App Screenshot](https://raw.githubusercontent.com/aditya11376/ClimaXpress/main/public/preview.png)

---

## 📖 About the Project

**ClimaXpress** provides accurate, current, and 5-day weather forecasts for any location. It features dynamic visual themes, intuitive search functionality, and responsive design across all devices.

---

## ✨ Features

- Live weather data with temperature, humidity, wind speed  
- 5-day forecast with icons and conditions  
- Dynamic backgrounds based on weather status  
- Responsive UI for all screen sizes  
- Smooth animations and transitions  
- Real-time city-based search

---

## 🧰 Tech Stack

| Category | Technology |
|-----------|-------------|
| Frontend | React.js |
| Styling | CSS3, Flexbox |
| API | OpenWeatherMap API |
| Hosting | GitHub Pages |
| Build Tool | Vite / CRA |

---

## ⚙️ Installation & Setup

Clone and run ClimaXpress locally:

git clone https://github.com/aditya11376/ClimaXpress.git
cd ClimaXpress
npm install

text

Create a `.env` file in the root directory:

REACT_APP_API_KEY=your_api_key_here

text

Then start the development server:

npm start

text

Visit the app on your browser at `http://localhost:3000`.

---

## 💻 Code Example

### `App.js`

import React, { useState, useEffect } from "react";
import "./App.css";

const App = () => {
const [city, setCity] = useState("London");
const [weatherData, setWeatherData] = useState(null);
const API = https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_API_KEY}&units=metric;

useEffect(() => {
fetch(API)
.then((response) => response.json())
.then((data) => setWeatherData(data));
}, [city]);

return (
<div className="App">
<h1 className="title">ClimaXpress</h1>
<input
value={city}
onChange={(e) => setCity(e.target.value)}
placeholder="Search city..."
/>
{weatherData && (
<div className="weather-card">
<h2>{weatherData.name}</h2>
<p>{weatherData.main.temp}°C</p>
<p>{weatherData.weather.main}</p>
<p>Humidity: {weatherData.main.humidity}%</p>
<p>Wind: {weatherData.wind.speed} m/s</p>
</div>
)}
</div>
);
};

export default App;

text

---

### `App.css`

body {
margin: 0;
font-family: "Poppins", sans-serif;
background: linear-gradient(135deg, #89f7fe 0%, #66a6ff 100%);
display: flex;
justify-content: center;
align-items: center;
height: 100vh;
}

.App {
background-color: rgba(255, 255, 255, 0.15);
padding: 2rem;
border-radius: 15px;
text-align: center;
backdrop-filter: blur(10px);
}

input {
padding: 0.7rem;
width: 80%;
border: none;
border-radius: 8px;
}

.weather-card {
margin-top: 1.5rem;
}

.title {
font-weight: 600;
margin-bottom: 1rem;
}

text

---

## 🌦️ Example Demo

You can try it live here:  
[**Live Project Demo**](https://aditya11376.github.io/ClimaXpress/)

If you search for **New Delhi**, you’ll see:

![Demo New Delhi](https://raw.githubusercontent.com/aditya11376/ClimaXpress/main/public/demo.png)

---

## 📂 Project Structure

ClimaXpress/
│
├── public/
│ ├── index.html
│ └── preview.png
│
├── src/
│ ├── components/
│ ├── App.js
│ ├── App.css
│ └── index.js
│
└── .env

text

---

## 🚀 Future Improvements

- Geolocation-based weather detection  
- Hourly and 7-day extended forecast  
- Dark/light theme toggle  
- Voice-based weather search  

---

## 🔗 APIs Used

- [OpenWeatherMap API](https://openweathermap.org/api)

Example endpoint:
https://api.openweathermap.org/data/2.5/weather?q=London&appid=YOUR_API_KEY&units=metric

text

---

## 👨‍💻 Author

Developed by **Aditya**  
GitHub: [@aditya11376](https://github.com/aditya11376)  
Live Link: [ClimaXpress](https://aditya11376.github.io/ClimaXpress/)

---

## 📄 License

This project is licensed under the MIT License.

---