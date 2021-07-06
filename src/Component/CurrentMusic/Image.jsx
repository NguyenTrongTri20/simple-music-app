import React, { useContext } from "react";
import { makeStyles } from "@material-ui/styles";
import Avatar from "@material-ui/core/Avatar";
import { MusicContext } from "../../Context/MusicListContext";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    marginTop: 20,
  },

  rounded: {
    color: "#fff",
    width: "100%",
    height: 350,
    borderRadius: 40,
    backgroundColor: "#fff",
    transition: "all 300ms linear",
  },
  active: {
    color: "#fff",
    width: "100%",
    height: 350,
    borderRadius: "50%",
    backgroundColor: "#fff",
    animation: `$rotate 5000ms linear infinite`,
    transition: "all 200ms linear",
  },
  //animation rotate image
  "@keyframes rotate": {
    from: {
      transform: "rotate(0deg)",
    },
    to: {
      transform: "rotate(360deg)",
    },
  },
}));

export default function Image({ isPlay }) {
  const classes = useStyles();
  const { listMusic, currentPlayIndex } = useContext(MusicContext);
  let currentMusic = listMusic[currentPlayIndex];
  let { image } = currentMusic;

  return (
    <div className={classes.root}>
      <Avatar
        variant="rounded"
        className={isPlay ? classes.active : classes.rounded}
      >
        <img
          src={image}
          alt="avatar"
          style={{ width: "120%" }}
          className="avatar"
        />
      </Avatar>
    </div>
  );
}
