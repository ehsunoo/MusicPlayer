import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Header";
import Songs from "../components/Songs";

import styles from "./styles/Home.module.scss";

function Home() {
  return (
    <div className={styles.container}>
      <Navbar />
      <Songs />
      <Footer />
    </div>
  );
}

export default Home;
