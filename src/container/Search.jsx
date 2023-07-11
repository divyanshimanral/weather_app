import { useEffect } from "react";
import { useState } from "react";
import DataDisplay from "../components/DataDisplay";
import Loader from "../components/loader";
import InvalidCityName from "../components/invalidCityName";
import DynamicBg from "../components/dynamicbg";

export default function Search() {
  const [weatherData, setWeatherData] = useState();
  const [location, setLocation] = useState("Delhi");
  const [loading, setLoading] = useState(true);

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
      setLoading(false);
      //   console.log(data);
    } catch (error) {
      console.log("Data not fetched", error);
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    fetchData();
  };

  useEffect(() => {
    setLoading(true);
    fetchData();
  }, []);
  // console.log(weatherData.weather[0].main);

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={location}
          placeholder="🔍Enter city name"
          onChange={(e) => setLocation(e.target.value)}
        />
        <button className="btn" type="submit">
          Get weather
        </button>
      </form>
      {loading ? (
        <Loader />
      ) : weatherData ? (
        <DataDisplay data={weatherData} />
      ) : (
        <InvalidCityName />
      )}
      <DynamicBg description={weatherData?.weather[0].main} />
    </div>
  );
}
