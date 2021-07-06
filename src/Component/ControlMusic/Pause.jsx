import React from "react";
import { GiPauseButton } from "react-icons/gi";
import Avatar from "@material-ui/core/Avatar";
import { FaPlay } from "react-icons/fa";

export default function Pause({ togglePlay, isPlay }) {
  return (
    <Avatar
      style={{
        padding: 8,
        borderRadius: 22,
        color: "#000",
        backgroundColor: "#fff",
        cursor: "pointer",
      }}
    >
      {isPlay ? (
        <GiPauseButton onClick={() => togglePlay(false)} />
      ) : (
        <FaPlay
          style={{ color: "#342e50", position: "absolute", left: 20 }}
          onClick={() => togglePlay(true)}
        />
      )}
    </Avatar>
  );
}
