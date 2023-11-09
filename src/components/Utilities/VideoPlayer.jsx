"use client";

import { XCircle } from "@phosphor-icons/react/dist/ssr";
import { useState } from "react";
import YouTube from "react-youtube";

const VideoPlayer = ({ youtubeId }) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleTrailer = () => {
    setIsOpen(!isOpen);
  };

  const option = {
    width: "300",
    height: "250",
  };

  const Player = () => {
    return (
      <div className="fixed bottom-2 right-2">
        <button
          onClick={handleTrailer}
          className="text-color-primary float-right bg-color-secondary px-3 mb-1"
        >
          X
        </button>
        <YouTube
          videoId={youtubeId}
          onReady={(e) => e.target.pauseVideo()}
          opts={option}
          onError={(e) => alert("Video is broken, please try another one.")}
        />
      </div>
    );
  };

  const ShowPlayer = () => {
    return (
      <button
        onClick={handleTrailer}
        className="rounded fixed bottom-5 right-5 w-32 bg-color-primary text-color-dark text-sm hover:bg-color-accent transition-all shadow-xl p-2"
      >
        Tonton Trailer
      </button>
    );
  };

  return isOpen ? <Player /> : <ShowPlayer />;
};

export default VideoPlayer;
