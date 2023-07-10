import { useEffect } from "react";
import { useState } from "react";
import DataDisplay from "./DataDisplay";

export default function Search() {
  const [weatherData, setWeatherData] = useState();
  const [location, setLocation] = useState("Delhi");

  const api = {
    key: "02614ed0a83c25f8a6168efd5044c37c",
    base: "https://api.openweathermap.org/data/2.5/",
  };

  const fetchData = async () => {
    try {
      const response = await fetch(
        `${api.base}weather?q=${location}&units=metric&APPID=${api.key}`
      );
      const data = await response.json();
      setWeatherData(data);
      //   console.log(data);
    } catch (error) {
      console.log("Data not fetched", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData();
  };

  useEffect(() => {
    fetchData();
  }, []);
  // console.log(weatherData);

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={location}
          placeholder="🔍Enter city name"
          onChange={(e) => setLocation(e.target.value)}
        />
        <button className="btn" type="submit">Get weather</button>
      </form>

      <DataDisplay data={weatherData} />
    </div>
  );
}
