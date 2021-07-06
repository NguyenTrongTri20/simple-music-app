import React, { createContext, useReducer, useState } from "react";

import ControlReducer from "../Component/Reducer/ControlReducer";

export const MusicContext = createContext();

export default function MusicListContext({ children }) {
  const [listMusic, setList] = useState([]);
  //fetch data
  const fetchData = async () => {
    const URL =
      "https://api.apify.com/v2/key-value-stores/EJ3Ppyr2t73Ifit64/records/LATEST?fbclid=IwAR0DqxmuCRG5IpZ80nt--iR51aQ283k7GDFfL63yU6G5GdTG3GxXvPo_fms";
    const res = await fetch(URL);
    const data = await res.json();
    const musicData = data.songs.top100_VN[0].songs;
    const formatData = musicData.map((music) => ({
      name: music.title,
      source: new Audio(music.music),
      singerName: music.creator,
      image: music.bgImage || music.avatar,
    }));
    setList(formatData);
  };
  const [currentPlayIndex, dispatchIndex] = useReducer(ControlReducer, 0);
  const data = {
    listMusic,
    fetchData,
    currentPlayIndex,
    dispatchIndex,
  };

  return <MusicContext.Provider value={data}>{children}</MusicContext.Provider>;
}
