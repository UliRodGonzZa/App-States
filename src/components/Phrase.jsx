import React, { useEffect, useState } from "react";
import { FaSpotify } from "react-icons/fa";

function Phrase({ phrase }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(false);
    const timeout = setTimeout(() => setVisible(true), 50);
    return () => clearTimeout(timeout);
  }, [phrase]);

  // Función para transformar la URL de Spotify en una URL "embed"
  const getEmbedUrl = (url) => {
    if (!url) return null;
    return url.replace(
      "open.spotify.com/track/",
      "open.spotify.com/embed/track/"
    );
  };

  return (
    <div
      className={`mb-6 text-center px-3 transition-all duration-500 ease-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
      }`}
    >
      <h2
        className="text-sm sm:text-base md:text-xl font-medium text-gray-800 leading-relaxed mb-3
        relative before:content-['“'] after:content-['”']
        before:text-2xl after:text-2xl
        before:text-purple-400 after:text-purple-400
        before:mr-1 after:ml-1
        md:before:text-4xl md:after:text-4xl"
      >
        {phrase.phrase}
      </h2>

      <div className="flex justify-center items-center gap-2 text-gray-700 mb-3">
        <p className="text-xs sm:text-sm md:text-base font-semibold italic">
          — {phrase.author}
        </p>

        {phrase.song && (
          <a
            href={phrase.song}
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-500 hover:text-green-400 transition-colors duration-300"
            title="Escuchar en Spotify"
          >
            <FaSpotify size={20} />
          </a>
        )}
      </div>

      {/* 🎧 Reproductor embebido */}
      {phrase.song && (
        <iframe
          src={`${getEmbedUrl(phrase.song)}?utm_source=generator`}
          width="100%"
          height="80"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          className="rounded-md shadow-sm border border-gray-200"
        ></iframe>
      )}
    </div>
  );
}

export default Phrase;
