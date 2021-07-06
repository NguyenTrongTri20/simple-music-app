import React, { useContext, useEffect, useState } from "react";
import Slider from "@material-ui/core/Slider";
import { withStyles } from "@material-ui/styles";

import { MusicContext } from "../../Context/MusicListContext";

const PrettoSlider = withStyles({
  root: {
    color: "#4965af",
    height: 8,
    marginTop: 30,
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: "#fff",
    border: "2px solid currentColor",
    marginTop: -8,
    marginLeft: -12,
    "&:focus, &:hover, &$active": {
      boxShadow: "inherit",
    },
  },
  active: {},
  valueLabel: {
    left: "calc(-50% + 4px)",
  },
  track: {
    height: 8,
    borderRadius: 4,
  },
  rail: {
    height: 8,
    borderRadius: 4,
  },
})(Slider);

export default function DurationBar({ isPlay }) {
  const { listMusic, currentPlayIndex } = useContext(MusicContext);
  const { source } = listMusic[currentPlayIndex];
  const duration = source.duration;

  const [value, setValue] = useState(source.currentTime);
  //display current time audio
  useEffect(() => {
    let time = setInterval(() => {
      setValue(source.currentTime);
      if (!isPlay) {
        clearInterval(time);
      }
    }, 1000);
    return () => {
      clearInterval(time);
    };
  }, [isPlay, source.currentTime]);

  return (
    <PrettoSlider
      valueLabelDisplay="auto"
      valueLabelFormat={(value) => timeConvert(value)}
      max={Math.floor(duration)}
      min={0}
      onChange={() => setValue(source.currentTime)}
      value={value}
    />
  );
}
//convert second -> minutes:second
const timeConvert = (second) => {
  second = isNaN(second) ? 0 : second;
  let timeString;
  if (second >= 60) {
    timeString = `${Math.floor(second / 60)}:${
      second % 60 < 10 ? "0" + Math.floor(second % 60) : Math.floor(second % 60)
    }`;
  } else {
    timeString = Math.floor(second);
  }
  return timeString;
};
