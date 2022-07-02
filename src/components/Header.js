import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import styles from "./styles/Header.module.scss";
import Logo from "../assets/logo.png";

function Navbar() {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <img src={Logo} />
        <p>Music Player</p>
      </div>
      <div className={styles.searchbar}>
        <div className={styles.icon}>
          <FontAwesomeIcon color="black" icon={faMagnifyingGlass} />
        </div>
        <input disabled type="text" placeholder="Search songs, artists, albums, ..." />
      </div>
    </div>
  );
}

export default Navbar;
