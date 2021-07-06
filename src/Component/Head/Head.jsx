import React from "react";
import styled from "styled-components";
import ShowList from "./ShowList";
import Volume from "./Volume";

const Head = styled.div`
  display: flex;
  justify-content: flex-end;

  .volume,
  .list {
    color: #2d63a7;
    font-size: 30px;
  }
  .volume {
    margin-right: 20px;
  }
`;

export default function Header() {
  return (
    <Head>
      <Volume />
      <ShowList />
    </Head>
  );
}
