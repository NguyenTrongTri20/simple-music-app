import React from "react";
import { AiOutlineUnorderedList } from "react-icons/ai";

export default function ShowList({ changeStateDisplay }) {
  return (
    <AiOutlineUnorderedList onClick={changeStateDisplay} className="list" />
  );
}
