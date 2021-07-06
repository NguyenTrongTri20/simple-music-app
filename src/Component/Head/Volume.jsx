import React, { useContext, useState } from "react";
import { IoVolumeHigh, IoVolumeMute } from "react-icons/io5";
import { MusicContext } from "../../Context/MusicListContext";

export default function Volume() {
  const { listMusic, currentPlayIndex } = useContext(MusicContext);
  const currentMusic = listMusic[currentPlayIndex];
  const [isMuted, setMute] = useState(false);
  //mute
  const muteMusic = () => {
    currentMusic.source.muted = !isMuted;
    setMute(!isMuted);
  };
  return (
    <React.Fragment>
      {!isMuted ? (
        <IoVolumeHigh
          style={{ cursor: "pointer" }}
          className="volume"
          onDoubleClick={muteMusic}
        />
      ) : (
        <IoVolumeMute
          style={{ cursor: "pointer" }}
          className="volume"
          onDoubleClick={muteMusic}
        />
      )}
    </React.Fragment>
  );
}
