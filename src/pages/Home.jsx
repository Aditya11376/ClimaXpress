import { WeatherCard } from "../components/Layout/WeatherCard";
export const Home = () => {
  const cities =["Delhi","London","Paris","New york","Tokyo"];
  return (
    <section className="home-section">
      <div className="contianer-grid-five" style={{display:"flex",flexWrap:"wrap",gap:"20px"}}>
        {cities.map((currCity,idx)=>(
          <div key={idx} className="card">
            <WeatherCard city={currCity} />
          </div>
        ))}
      </div>
    </section>
  );
};
