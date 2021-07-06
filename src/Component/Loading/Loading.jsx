import React from "react";
import styled from "styled-components";
import CircularProgress from "@material-ui/core/CircularProgress";

const Loading = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Popup = styled.div`
  background-color: #fff;
  width: 200px;
  height: 70px;
  padding: 4px 7px;
  border-radius: 10px;
  font-size: 18px;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
`;
function Load(props) {
  return (
    <Loading>
      <Popup>
        <CircularProgress style={{ marginRight: 10 }} />
        Loading ...
      </Popup>
    </Loading>
  );
}

export default Load;
