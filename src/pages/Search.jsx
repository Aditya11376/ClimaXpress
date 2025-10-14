import { WeatherCard } from "../components/Layout/WeatherCard";
import { useSearchParams } from "react-router-dom";

export const Search = () => {
  const [searchParams] = useSearchParams();
  const city = searchParams.get("city"); // must match URL param

  if (!city) return <p>Please enter a city in the search bar.</p>;

  return (
    <div className="search-page" style={{ padding: "20px" }}>
      <WeatherCard city={city} />
    </div>
  );
};
