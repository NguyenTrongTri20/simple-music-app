import React, { useContext, useEffect } from "react";

import styled from "styled-components";
import { HiOutlineMinusSm } from "react-icons/hi";
import { useSpring, animated, config } from "react-spring";
import { useDrag } from "react-use-gesture";
import Music from "./Music";
import { MusicContext } from "../../Context/MusicListContext";

const WrapList = styled(animated.div)`
  height: 100%;
  width: 410px;
  position: absolute;
  display: flex;
`;
const MusicItems = styled(animated.div)`
  width: 410px;
  height: 95vh;
  background-image: linear-gradient(
    rgba(106, 96, 141, 0.5) 80%,
    rgb(52, 44, 79)
  );
  backdrop-filter: blur(10px) saturate(150%);
  z-index: 10;
  position: absolute;
  top: 35px;
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
  border-bottom: 0.5px solid #493f6c;
  color: #fff;
  overflow-y: scroll;
  position: absolute;
  z-index: 0;
  /* custom scroll bar */
  /* width */
  ::-webkit-scrollbar {
    width: 3px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: transparent;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #888;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;
const Items = styled.div`
  width: 100%;
  height: 95%;
  position: absolute;
  bottom: 0;
  .music + .music {
    margin-bottom: 50px;
  }
  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    background-color: #f5f5f5;
  }
`;
export default function List({ showList, changeStateDisplay }) {
  const { listMusic } = useContext(MusicContext);
  let musicElement = listMusic.map(({ name, singerName, image }, index) => (
    <Music
      key={index}
      index={index}
      className="music"
      image={image}
      musicName={name}
      singerName={singerName}
    />
  ));
  //animation
  const [animationList, setAnimation] = useSpring(() => ({
    y: 720,
    config: config.slow,
    display: "block",
  }));
  useEffect(() => {
    if (showList) {
      setAnimation.start({ y: 0, display: "block" });
    } else {
      setAnimation.start({ to: [{ y: 720 }, { display: "none" }] });
    }
  }, [showList, setAnimation]);
  //Drag
  const bind = useDrag(({ movement: [, my], down, cancel }) => {
    if (my < 0) cancel();
    setAnimation.start(
      { y: down ? my : 0, immediate: down },
      { initial: () => [0, my.get()] }
    );
    if (!down && my > 300) {
      setAnimation.start({ y: 720 });
      changeStateDisplay(false);
    }
  });
  return (
    <WrapList style={animationList}>
      <animated.div
        {...bind()}
        style={{
          width: "100%",
          height: 50,
          top: 40,
          zIndex: 100,
          position: "absolute",
          cursor: "grab",
        }}
      >
        <HiOutlineMinusSm
          style={{
            fontSize: 50,
            color: "#f0f0f0",
            marginLeft: "45%",
          }}
        />
      </animated.div>
      <MusicItems>
        <Items>{musicElement}</Items>
      </MusicItems>
    </WrapList>
  );
}
