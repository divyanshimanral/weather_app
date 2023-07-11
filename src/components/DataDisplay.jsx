import Clock from "../container/clock";
import Day from "./Day";
import Emojis from "./emojis";

export default function DataDisplay({ data }) {
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
        <Emojis main={data.weather[0].main} />
        <h3>
          (high/low): {Math.round(data.main.temp_max)}°C /{" "}
          {Math.round(data.main.temp_min)}°C
        </h3>
        <Clock />
      </div>
    </div>
  );
}
