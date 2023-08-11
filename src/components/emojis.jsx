import DynamicBg from "./dynamicbg";

export default function Emojis({ main }) {
  // console.log(main);
  let emoji;
  let climate = main;
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
      <h1>
        {main} {emoji}
      </h1>
    </div>
  );
}
