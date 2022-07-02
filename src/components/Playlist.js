import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";
import styles from "./styles/Playlist.module.scss";

function Playlist({ songsList, currentSongID }) {
  return (
    <div className={styles.container}>
      {songsList.map((song) => (
        <Link to={`/song/${song.id}`} state={song.id} key={song.id} className={`${styles.card} ${song.id === currentSongID ? styles.selected : ""}`}>
          <img src={song.cover} />
          <span>
            <h4>{song.name}</h4>
            <p>{song.artist}</p>
          </span>
        </Link>
      ))}
    </div>
  );
}

export default Playlist;
