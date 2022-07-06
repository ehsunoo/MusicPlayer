import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import Card from "./Card";

import styles from "./styles/Songs.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function Songs({ isLoading, setIsLoading }) {
  const [songsData, setSongsData] = useState([]);

  useEffect(() => {
    getSongs();
  }, []);

  const getSongs = async () => {
    await axios.get("/data.json").then((res) => {
      setSongsData(JSON.parse(res.data));
      setIsLoading(false);
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <FontAwesomeIcon icon={faStar} color="white" size="2x" />
        <h2>Featured Songs</h2>
      </div>
      <div className={styles.songs}>
        {!isLoading ? (
          songsData.map((song) => (
            <Link
              key={song.id}
              to={`/song/${song.id}`}
              onClick={() => {
                setIsLoading(false);
              }}
            >
              <Card name={song.name} artist={song.artist} cover={song.cover} />
            </Link>
          ))
        ) : (
          <h2 className={styles.loading}>Loading ...</h2>
        )}
      </div>
    </div>
  );
}

export default Songs;
