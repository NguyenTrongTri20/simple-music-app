import React, { useContext } from "react";
import styled from "styled-components";

import { MusicContext } from "../../Context/MusicListContext";

const MusicInfo = styled.div`
  margin-top: ${(props) => props.top || "28px"};
  margin-left: ${(props) => props.left || "0px"};
  border-bottom: ${(props) => props.BBottom || "none"};
`;
const Singer = styled.div`
  font-size: ${(props) => props.size || "20px"};
  color: ${(props) => props.color || "#73738b"};
  font-weight: 600;
  text-align: ${(props) => props.align || "center"};
`;
const MusicName = styled.div`
  font-size: ${(props) => props.size || "22px"};
  color: ${(props) => props.color || "#f6f5f9"};
  font-weight: 600;
  text-align: ${(props) => props.align || "center"};
`;

export default function MusicMainInfo() {
  const { listMusic, currentPlayIndex } = useContext(MusicContext);
  let currentMusic = listMusic[currentPlayIndex];
  let { name, singerName } = currentMusic;

  return (
    <MusicInfo>
      <Singer> {singerName} </Singer>

      <MusicName>{name}</MusicName>
    </MusicInfo>
  );
}
