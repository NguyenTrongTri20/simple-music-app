import React from "react";
import Image from "./Image";
import MusicInfo from "./MusicInfo";
import DurationBar from "./DurationBar";

export default function CurrentMusic({ isPlay }) {
  return (
    <>
      <Image isPlay={isPlay} />
      <MusicInfo />
      <DurationBar isPlay={isPlay} />
    </>
  );
}
