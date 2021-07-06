import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";

import Loop from "./Loop";
import RandomMusic from "./RandomMusic";
import Pause from "./Pause";
import Next from "./Next";
import Prev from "./Prev";
import { MusicContext } from "../../Context/MusicListContext";
import CurrentMusic from "../CurrentMusic/CurrentMusic";

const Control = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 45px;
  z-index: 10000;
`;
const MainControl = styled.div`
  display: flex;
  .control {
    color: #fff;
    font-weight: 600;
    font-size: 24px;
    margin: 16px 30px;
  }
`;

export default function ControlMusic() {
  const { listMusic, dispatchIndex, currentPlayIndex } =
    useContext(MusicContext);

  const [isPlay, setIsPlay] = useState(true);
  const [loopState, setLoopState] = useState(false);
  const [randomState, setRandomState] = useState(true);

  const currentMusic = listMusic[currentPlayIndex];
  const { source } = currentMusic;
  //on audio end
  source.onended = () => {
    //no loop and no random
    if (!loopState && !randomState) {
      dispatchIndex({
        type: "CHANGE_MUSIC",
        payload: {
          listMusic,
          currentPlayIndex,
          newIndex:
            currentPlayIndex === listMusic.length - 1
              ? 0
              : currentPlayIndex + 1,
        },
      });
      setIsPlay(false);
    } else if (!loopState && randomState) {
      const random = Math.round(Math.random() * (listMusic.length - 1));
      dispatchIndex({
        type: "CHANGE_MUSIC",
        payload: {
          listMusic,
          currentPlayIndex,
          newIndex: random,
        },
      });
    }
  };
  //Loop
  const changeLoopState = () => {
    setLoopState((loopState) => !loopState);
  };
  //Random
  const changeRandomState = () => {
    setRandomState((randomState) => !randomState);
  };

  //auto play
  useEffect(() => {
    setIsPlay(true);
  }, [currentPlayIndex]);
  //set default
  useEffect(() => {
    if (isPlay) {
      source.play();
      source.loop = loopState;
    }
    return () => {
      source.pause();
    };
  }, [source, isPlay, loopState, source.readyState]);

  const togglePlay = (play) => {
    setIsPlay(play);
  };
  return (
    <React.Fragment>
      <CurrentMusic isPlay={isPlay} />
      <Control>
        <Loop changeLoopState={changeLoopState} isLoop={loopState} />

        <MainControl>
          <Prev />
          <Pause togglePlay={togglePlay} isPlay={isPlay} />
          <Next />
        </MainControl>

        <RandomMusic
          changeRandomState={changeRandomState}
          isRandom={randomState}
        />
      </Control>
    </React.Fragment>
  );
}
