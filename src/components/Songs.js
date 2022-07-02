import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import Card from "./Card";

import styles from "./styles/Songs.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function Songs() {
  const [songsData, setSongsData] = useState([]);

  useEffect(() => {
    getSongs();
  }, []);

  const getSongs = async () => {
    await axios.get("/data.json").then((res) => {
      setSongsData(JSON.parse(res.data));
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <FontAwesomeIcon icon={faStar} color="white" size="2x" />
        <h2>Featured Songs</h2>
      </div>
      <div className={styles.songs}>
        {songsData.map((song) => (
          <Link key={song.id} to={`/song/${song.id}`}>
            <Card name={song.name} artist={song.artist} cover={song.cover} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Songs;
