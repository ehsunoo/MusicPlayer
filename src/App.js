import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";
import Song from "./pages/Song";

function App() {


  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="song/:id" element={<Song />} />
      </Routes>
    </div>
  );
}

export default App;
