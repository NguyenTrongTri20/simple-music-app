import React, { useContext } from "react";
import { IoReorderTwoOutline } from "react-icons/io5";
import Avatar from "@material-ui/core/Avatar";
import styled from "styled-components";

import { MusicContext } from "../../Context/MusicListContext";

const MusicInfo = styled.div`
  margin-left: ${(props) => props.left || "0px"};
  border-bottom: ${(props) => props.BBottom || "none"};
`;
const MusicInfoItem = styled(MusicInfo)`
  width: 100%;
  padding-bottom: 70px;
  position: relative;
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
const MusicItem = styled.div`
  width: 85%;
  height: 70px;
  margin: 0 auto;
  background-color: transparent;
  color: #fff;
  display: flex;
  margin-top: 30px;
  cursor: pointer;
`;

export default function Music({ image, singerName, musicName, index }) {
  const { dispatchIndex, currentPlayIndex, listMusic } =
    useContext(MusicContext);
  return (
    <MusicItem
      onClick={() =>
        dispatchIndex({
          listMusic: listMusic,
          type: "CHANGE_MUSIC",
          payload: { currentPlayIndex, newIndex: index, listMusic },
        })
      }
    >
      <Avatar style={{ padding: 8, borderRadius: 20 }}>
        <img src={image} alt="background" style={{ width: "140%" }} />
      </Avatar>

      <MusicInfoItem top="5px" left="20px" BBottom="0.1px solid #8383857b">
        <Singer size="18px" color="#fff" align="left">
          {singerName}
        </Singer>

        <MusicName size="16px" align="left">
          {musicName}
        </MusicName>
        <IoReorderTwoOutline
          style={{
            fontSize: 40,
            color: "#bdbdc0",
            position: "absolute",
            right: 8,
            top: 8,
          }}
        />
      </MusicInfoItem>
    </MusicItem>
  );
}
