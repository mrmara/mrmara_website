import React, { useState, useEffect } from "react";
import { useSoundContext } from "../hooks/useToogleSound";
import "./SoundBanner.css";

const SoundBanner = () => {
  const { sound_on, is_sound_enabled } = useSoundContext();
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 20000); // 20 seconds
    return () => clearTimeout(timer);
  }, []);

  const handleEnableSound = () => {
    if (!is_sound_enabled()) {
      sound_on();
    }
    setVisible(false);
  };

  if (!visible) {
    return null;
  }

  return (
    <div className="sound-banner">
      <span>Click the sound on button to rock this 8-bit sound</span>
      <button onClick={handleEnableSound}>Sound ON</button>
    </div>
  );
};

export default SoundBanner;
