import Rain from "../assets/bg-img/rain.jpg";
import Haze from "../assets/bg-img/haze.png";
// import Mist from "../assets/bg-img/mist.png";
import Mist from "../assets/bg-img/Mist2.png";
import Clear from "../assets/bg-img/clear3.png";
import Clouds from "../assets/bg-img/cloud2.png";
import Drizzle from "../assets/bg-img/drizzle2.png";
import Bg from "../assets/bg-img/bg.png";

export default function DynamicBg({ description }) {
  const ImgUrls = () => {
    const bgImages = {
      Mist: `url(${Mist})`,
      Clear: `url(${Clear})`,
      Clouds: `url(${Clouds})`,
      Rain: `url(${Rain})`,
      Haze: `url(${Haze})`,
      Drizzle: `url(${Drizzle})`,
    };
    return bgImages[description] || `url(${Bg})`;
  };
  document.body.style.backgroundImage = ImgUrls();
  return <div></div>;
}
