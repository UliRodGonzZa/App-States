import { useState } from "react";
import Card from "./components/Card";
import { getRandomItem } from "./lib/utils";
import { img1, img2, img3, img4, img5 } from "./assets";

const images = [img1, img2, img3, img4, img5];

const colors = [
  "#FF5733", // rojo-anaranjado
  "#33FF57", // verde lima
  "#3357FF", // azul intenso
  "#F333FF", // magenta
  "#33FFF5", // cian
  "#FF8C33", // naranja brillante
  "#FF33A6", // rosa fuerte
];

function App() {
  const [image, setImage] = useState(getRandomItem(images));

  const styles = {
    backgroundImage: `url(${image})`,
  };

  return (
    <div
      className="px-4 bg-purple-900 min-h-screen grid place-content-center
    bg-contain sm:bg-cover bg-center transition-all duration-500 ease-in-out"
      style={styles}
    >
      <Card setImage={setImage} images={images}></Card>
    </div>
  );
}

export default App;
