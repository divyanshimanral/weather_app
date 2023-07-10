export default function DataDisplay(props) {
  let now = new Date();
  function dateBuilder(d) {
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();
    let hours = d.getHours;

    return `${day} ${date} ${month} ${year}`;
  }

  let hours = now.getHours();

  if (hours > 12) {
    hours = hours - 12;
  } else {
    hours;
  }
  let mins = now.getMinutes();
  if (mins < 10) {
    mins = "0" + mins;
  }
  let currTime = `${hours}:${mins}`;
  let emoji;
  let climate = props.data?.weather[0].main;
  if (climate === "Drizzle") {
    emoji = "🌧️";
  } else if (climate === "Clouds") {
    emoji = "☁️";
  } else if (climate === "Clear") {
    emoji = "🌥️";
  }
  return (
    <div className="display">
      <h2>
        {props.data?.name}, {props.data?.sys.country}
      </h2>
      <p>Date: {dateBuilder(now)}</p>
      <h1>{Math.round(props.data?.main.temp)}°C</h1>
      <p>
        but feels like {Math.floor(props.data?.main.feels_like)}°C due to
        Humidity {props.data?.main.humidity}
      </p>
      <h1></h1>
      <h2>
        {" "}
        {props.data?.weather[0].main} {emoji}
      </h2>
      <h3>
        (high/low): {Math.round(props.data?.main.temp_max)}°C /{" "}
        {Math.round(props.data?.main.temp_min)}°C
      </h3>
      <p>Time is {currTime}</p>
    </div>
  );
}
