import Rain from "../assets/bg-img/rain.jpg";
import Haze from "../assets/bg-img/haze.png";
import Mist from "../assets/bg-img/mist.png";
import Clear from "../assets/bg-img/clear.png";
import Clouds from "../assets/bg-img/clouds.png";
import Drizzle from "../assets/bg-img/drizzle2.png";
import Bg from "../assets/bg-img/bg.png";

export default function DynamicBg({ description }) {
  // console.log(description);

  const ImgUrls = () => {
    const bgImages = {
      Mist: `url(${Mist})`,
      Clear: `url(${Clear})`,
      Clouds: `url(${Clouds})`,
      Rain: `url(${Rain})`,
      Haze: `url(${Haze})`,
    };
    return bgImages[description] || `url(${Bg})`;
  };
  // console.log(ImgUrls())
  document.body.style.backgroundImage = ImgUrls();
  return <div></div>;
}
