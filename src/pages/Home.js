import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Header";
import Songs from "../components/Songs";

import styles from "./styles/Home.module.scss";

function Home({ isLoading, setIsLoading }) {
  return (
    <div className={styles.container}>
      <Navbar />
      <Songs isLoading={isLoading} setIsLoading={setIsLoading} />
      <Footer />
    </div>
  );
}

export default Home;
