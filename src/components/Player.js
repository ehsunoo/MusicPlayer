import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import styles from "./styles/Player.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause, faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";

function Player({ currentSong, songList, setSong }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
  });

  const navigate = useNavigate();

  const audioRef = useRef();

  const onPlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const onPrev = () => {
    if (currentSong.id > 1) {
      return navigate(`/song/${currentSong.id - 1}`);
    } else if (currentSong.id == 1) {
      return navigate(`/song/${songList.length}`);
    }
  };

  const onNext = () => {
    if (currentSong.id < songList.length) {
      return navigate(`/song/${currentSong.id + 1}`);
    } else if (currentSong.id == songList.length) {
      return navigate(`/song/1`);
    }
  };

  const timeUpdateHandler = (e) => {
    const currentTime = e.target.currentTime;
    const duration = e.target.duration;
    setSongInfo({ ...songInfo, currentTime, duration });

    // if song ended reset current time of audio and change play icon to pause icon
    if (duration === currentTime) {
      setIsPlaying(false);
      e.target.currentTime = 0;
    }
  };

  const timeFormatter = (time) => {
    return "0" + Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2);
  };

  const dragHandler = (e) => {
    audioRef.current.currentTime = e.target.value;
    setSongInfo({ ...songInfo, currentTime: e.target.value });
  };

  return (
    <div className={styles.container}>
      <div className={styles.slider}>
        <p>{timeFormatter(songInfo.currentTime)}</p>
        <input type="range" onChange={dragHandler} min={0} max={songInfo.duration} value={songInfo.currentTime} />
        <p>{songInfo.duration ? timeFormatter(songInfo.duration) : "Loading..."}</p>
      </div>
      <div className={styles.control}>
        <FontAwesomeIcon onClick={onPrev} icon={faAngleLeft} className={styles.previousIcon} size="2x" />
        <FontAwesomeIcon onClick={onPlay} icon={isPlaying ? faPause : faPlay} className={styles.playIcon} size="2x" />
        <FontAwesomeIcon onClick={onNext} icon={faAngleRight} className={styles.nextIcon} size="2x" />
      </div>
      <audio onLoadedMetadata={timeUpdateHandler} onTimeUpdate={timeUpdateHandler} ref={audioRef} src={currentSong.url}></audio>
    </div>
  );
}

export default Player;
