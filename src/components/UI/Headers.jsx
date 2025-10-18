import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { TiWeatherWindyCloudy } from "react-icons/ti";

export const Headers = () => {
  const [city, setCity] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault(); 
    if (city.trim() !== "") {
      navigate(`/search?city=${city}`);
      setCity(""); 
    }
  };

  return (
    <header className="header-section">
      <div className="header-container">
        <div className="header-navbar-grid">
          <div className="navbar-logo">
            <NavLink to="/">
              <h1>
                <TiWeatherWindyCloudy size={50} />
                <i>Clima</i>
              </h1>
            </NavLink>
          </div>
          <div className="navbar-right">
            {/* search-bar */}
            <form className="header-search-form" onSubmit={handleSearch}>
              <input
                type="search"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Search for a city..."
              />
              <button type="submit">🔍</button>
            </form>

            <nav>
              <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};
