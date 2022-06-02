import React,{useState} from "react";
import { useLocation } from "react-router-dom";
import useSound from "use-sound";
import Audio from "../assets/sounds/sunday_vibe.mp3";

const Sound = () => {
  const location = useLocation()
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
        <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"
        fill={location.pathname !== '/' && location.pathname !== '/home' ? "white" : "black"}>
        <path d="M28 41.45V38.35Q32.85 36.95 35.925 32.975Q39 29 39 23.95Q39 18.9 35.95 14.9Q32.9 10.9 28 9.55V6.45Q34.2 7.85 38.1 12.725Q42 17.6 42 23.95Q42 30.3 38.1 35.175Q34.2 40.05 28 41.45ZM24 40 14 30H6V18H14L24 8ZM27 32.4V15.55Q29.7 16.4 31.35 18.75Q33 21.1 33 24Q33 26.95 31.35 29.25Q29.7 31.55 27 32.4Z"/></svg>
        :
        <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48" 
        fill={location.pathname !== '/' && location.pathname !== '/home' ? "white" : "black"}>
        <path d="M40.65 45.2 34.05 38.6Q32.65 39.6 31.025 40.325Q29.4 41.05 27.65 41.45V38.35Q28.8 38 29.875 37.575Q30.95 37.15 31.9 36.45L23.65 28.15V40L13.65 30H5.65V18H13.45L2.45 7L4.6 4.85L42.8 43ZM38.85 33.6 36.7 31.45Q37.7 29.75 38.175 27.85Q38.65 25.95 38.65 23.95Q38.65 18.8 35.65 14.725Q32.65 10.65 27.65 9.55V6.45Q33.85 7.85 37.75 12.725Q41.65 17.6 41.65 23.95Q41.65 26.5 40.95 28.95Q40.25 31.4 38.85 33.6ZM32.15 26.9 27.65 22.4V15.9Q30 17 31.325 19.2Q32.65 21.4 32.65 24Q32.65 24.75 32.525 25.475Q32.4 26.2 32.15 26.9ZM23.65 18.4 18.45 13.2 23.65 8Z"/></svg>
    }
  </button>)
};

export default Sound;
