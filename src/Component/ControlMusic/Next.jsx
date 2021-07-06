import React, { useContext } from "react";
import { FaFastForward } from "react-icons/fa";

import { MusicContext } from "../../Context/MusicListContext";

export default function Next() {
  const { dispatchIndex, listMusic, currentPlayIndex } =
    useContext(MusicContext);
  return (
    <FaFastForward
      style={{ cursor: "pointer" }}
      className="control"
      onClick={() =>
        dispatchIndex({
          type: "CHANGE_MUSIC",
          payload: {
            listMusic,
            currentPlayIndex,
            newIndex:
              //if current music is last music in list
              currentPlayIndex === listMusic.length - 1
                ? 0
                : currentPlayIndex + 1,
          },
        })
      }
    />
  );
}
