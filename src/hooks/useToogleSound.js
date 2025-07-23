import useSound from "use-sound";
import arcadeBeatSound from "../assets/arcade-beat.mp3";
// Import Font Awesome components and icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeMute, faVolumeHigh } from "@fortawesome/free-solid-svg-icons";
import "./useToogleSound.css";
import React, { createContext, useContext, useState } from "react";

const SoundContext = createContext();

export const SoundProvider = ({ children }) => {
  const [isSoundOn, setIsSoundOn] = useState(true);

  const [play, { pause }] = useSound(arcadeBeatSound, {
    volume: 0.5,
    autoplay: true,
    loop: true,
  });

  const sound_on = () => {
    if (isSoundOn) return; // Prevent playing sound if already on
    play();
    setIsSoundOn(true);
  };

  const sound_off = () => {
    if (!isSoundOn) return; // Prevent pausing sound if already off
    pause();
    setIsSoundOn(false);
  };

  const is_sound_enabled = () => {
    return isSoundOn;
  };

  const toogle_sound = () => {
    isSoundOn ? sound_off() : sound_on();
  };

  return (
    <SoundContext.Provider value={{ isSoundOn, sound_on, sound_off, toogle_sound, is_sound_enabled }}>
      {children}
    </SoundContext.Provider>
  );
};

export const useSoundContext = () => useContext(SoundContext);
export const ToogleSoundButton = () => {
  const { isSoundOn, sound_on, sound_off } = useSoundContext(); // Updated to use useSoundContext
  return isSoundOn ? (
    <button onClick={sound_off} className="music-menu-icon">
      <FontAwesomeIcon icon={faVolumeMute} size="2xl" />
    </button>
  ) : (
    <button onClick={sound_on} className="music-menu-icon">
      <FontAwesomeIcon icon={faVolumeHigh} size="2xl" />
    </button>
  );
};
