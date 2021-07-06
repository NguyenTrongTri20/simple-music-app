import React from "react";
import { ImLoop2 } from "react-icons/im";

const normal = {
  color: "#fff",
  marginTop: 18,
  cursor: "pointer",
};
const active = {
  color: "#363e62",
  marginTop: 18,
  cursor: "pointer",
};

export default function Loop({ changeLoopState, isLoop }) {
  return <ImLoop2 style={isLoop ? active : normal} onClick={changeLoopState} />;
}
