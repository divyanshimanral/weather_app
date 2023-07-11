import Day from "./Day";
import Clock from "./clock";

export default function DataDisplay({ data }) {
  // console.log(data);
  let emoji;
  let climate = data.weather[0].main;
  if (climate === "Drizzle") {
    emoji = "🌧️";
  } else if (climate === "Clouds") {
    emoji = "☁️";
  } else if (climate === "Clear") {
    emoji = "😎";
  } else if (climate === "Rain") {
    emoji = "⛈️";
  } else if (climate === "Mist") {
    emoji = "🌫️";
  } else if (climate === "Haze") {
    emoji = "😶‍🌫️";
  } else {
    emoji = "🌞";
  }
  return (
    <div>
      <div className="display">
        <h2>
          {data.name}, {data.sys.country}
        </h2>
        <Day />
        <h1>{Math.round(data.main.temp)}°C</h1>
        <p>
          but feels like {Math.floor(data.main.feels_like)}°C due to Humidity{" "}
          {data.main.humidity}
        </p>
        <h1></h1>
        <h2>
          {" "}
          {data.weather[0].main} {emoji}
        </h2>
        <h3>
          (high/low): {Math.round(data.main.temp_max)}°C /{" "}
          {Math.round(data.main.temp_min)}°C
        </h3>
        <Clock />
      </div>
    </div>
  );
}
