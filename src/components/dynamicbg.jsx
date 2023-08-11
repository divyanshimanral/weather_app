import Rain from "../assets/bg-img/rain.png";
import Haze from "../assets/bg-img/haze.png";
import Mist from "../assets/bg-img/mist.png";
// import Mist from "../assets/bg-img/Mist2.png";
import Clear from "../assets/bg-img/clear4.png";
import Clouds from "../assets/bg-img/cloud5.png";
import Drizzle from "../assets/bg-img/drizzle2.png";
import darkRain from "../assets/bg-img/night/darkrain.png";
import darkClear from "../assets/bg-img/night/darkclear.png";
import darkHaze from "../assets/bg-img/night/hazedark.png";
import darkDrizzle from "../assets/bg-img/night/darkdrizzle.png";
import darkMist from "../assets/bg-img/night/darkmist.png";
import darkClouds from "../assets/bg-img/bg.png";
import Bg from "../assets/bg-img/bg.png";

export default function DynamicBg({ description, dayNight }) {
  let backgroundImage;
  const ImgUrls = () => {
    const bgImages = {
      Mist: `url(${Mist})`,
      Clear: `url(${Clear})`,
      Clouds: `url(${Clouds})`,
      Rain: `url(${Rain})`,
      Haze: `url(${Haze})`,
      Drizzle: `url(${Drizzle})`,
    };
    const darkBgImg = {
      Mist: `url(${darkMist})`,
      Clear: `url(${darkClear})`,
      Clouds: `url(${darkClouds})`,
      Rain: `url(${darkRain})`,
      Haze: `url(${darkHaze})`,
      Drizzle: `url(${darkDrizzle})`,
    };
    return (backgroundImage =
      dayNight === "Day"
        ? bgImages[description] || `url(${Bg})`
        : darkBgImg[description] || `url(${Bg})`);
  };
  document.body.style.backgroundImage = ImgUrls();
  return <div></div>;
}
