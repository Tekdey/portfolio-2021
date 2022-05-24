import React,{useState} from "react";
import useSound from "use-sound";
import Audio from "../assets/sounds/sunday_vibe.mp3";
import { svg } from "../assets/svg";

const Sound = () => {
    const [isPlaying, setIsPlaying] = useState(false);
  const [play, { stop }] = useSound(Audio, { volume: 0.5 });


  return (<button
    onClick={() => {
      setIsPlaying((_) => !_);
      isPlaying ? stop() : play();
    }}
    className="absolute z-10 left-0 pl-5"
  >
    {
        isPlaying ? 
        <img src={svg.volume_on} alt="volume on" /> :
        <img src={svg.volume_off} alt="volume off" />
    }
  </button>)
};

export default Sound;
