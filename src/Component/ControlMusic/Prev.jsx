import React, { useContext } from "react";
import { FaFastBackward } from "react-icons/fa";
import { MusicContext } from "../../Context/MusicListContext";

export default function Prev() {
  const { dispatchIndex, currentPlayIndex, listMusic } =
    useContext(MusicContext);
  return (
    <FaFastBackward
      style={{ cursor: "pointer" }}
      className="control"
      onClick={() =>
        dispatchIndex({
          type: "CHANGE_MUSIC",
          payload: {
            listMusic,
            currentPlayIndex,
            //if index = 0
            newIndex: !currentPlayIndex
              ? listMusic.length - 1
              : currentPlayIndex - 1,
          },
        })
      }
    />
  );
}
