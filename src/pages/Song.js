import React, { useCallback, useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import axios from "axios";
import styles from "./styles/Song.module.scss";
import Player from "../components/Player";
import Playlist from "../components/Playlist";
import Footer from "../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic, faHome } from "@fortawesome/free-solid-svg-icons";

function Song() {
  let params = useParams();
  let songID = parseInt(params.id);

  const [songsList, setSongsList] = useState([]);
  const [currentSong, setCurrentSong] = useState({});

  useEffect(() => {
    getSong();
  }, [songID]);

  useEffect(() => {
    document.title = `${currentSong.name} | ${currentSong.artist}`;
  }, [currentSong]);

  const getSong = useCallback(async () => {
    await axios.get("/data.json").then((res) => {
      const songData = JSON.parse(res.data).filter((song) => {
        return song.id === songID;
      });
      setSongsList(JSON.parse(res.data));
      setCurrentSong(songData[0]);
    });
  });

  return (
    <div className={styles.container}>
      <div className={styles.playlist}>
        <div className={styles.playlistHeader}>
          <h2 className={styles.playlistTitle}>Playlist</h2>
          <Link to="/">
            <FontAwesomeIcon className={styles.home} icon={faHome} color="white" size="2x" />
          </Link>
        </div>
        <Playlist songsList={songsList} currentSongID={currentSong.id} />
      </div>
      <div className={styles.play}>
        <div className={styles.detailsContainer}>
          <div className={styles.cover}>
            <img src={currentSong.cover} />
          </div>
          <div className={styles.details}>
            <FontAwesomeIcon icon={faMusic} color="#80d0c7" size="4x" />
            <p className={styles.name}>{currentSong.name}</p>
            <div className={styles.artist}>
              <h2> {currentSong.artist}</h2>
            </div>
          </div>
        </div>
        <Player currentSong={currentSong} songList={songsList} setSong={setCurrentSong} />
        <Footer />
      </div>
    </div>
  );
}

export default Song;
