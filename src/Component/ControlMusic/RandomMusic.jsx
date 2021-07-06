import React from "react";
import { FaRandom } from "react-icons/fa";

const normal = {
  color: "#fff",
  marginTop: 17,
  cursor: "pointer",
};
const active = {
  color: "#363e62",
  marginTop: 17,
  cursor: "pointer",
};

export default function RandomMusic({ changeRandomState, isRandom }) {
  return (
    <FaRandom style={isRandom ? active : normal} onClick={changeRandomState} />
  );
}
