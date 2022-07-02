import React from "react";

import styles from "./styles/Card.module.scss";

function Song(props) {
  return (
    <div className={styles.container}>
      <div className={styles.cover}>
        <img src={props.cover} />
      </div>
      <div className={styles.details}>
        <h3>{props.name}</h3>
        <p>{props.artist}</p>
      </div>
    </div>
  );
}

export default Song;
