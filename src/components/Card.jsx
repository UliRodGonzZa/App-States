import { useState } from "react";
import phrases from "../data/phrases.json";
import Phrase from "./Phrase";
import { getRandomItem } from "../lib/utils";
import { LuRefreshCw } from "react-icons/lu";
// import Phrase from "./Phrase.jsx";

function Card({ setImage, images }) {
  const [phrase, setPhrase] = useState(() => getRandomItem(phrases));

  const getNewPhrase = () => {
    setPhrase(getRandomItem(phrases));
  };

  return (
    <div className=" max-w-lg bg-white/62 backdrop-blur-md rounded-lg shadow-md p-5 flex flex-col items-center">
      <Phrase phrase={phrase} />
      <button
        type="button"
        className="bg-white border shadow rounded py-1.5 px-4
        hover:bg-gray-700 hover:text-white transition-colors duration-300
        ease-in-out cursor-pointer
        flex items-center gap-2"
        onClick={() => {
          getNewPhrase();
          setImage(getRandomItem(images));
        }}
      >
        <LuRefreshCw />
        Ver otra frase
      </button>
    </div>
  );
}

export default Card;
