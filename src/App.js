import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";
import Song from "./pages/Song";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home isLoading={isLoading} setIsLoading={setIsLoading} />} />
        <Route path="song/:id" element={<Song isLoading={isLoading} setIsLoading={setIsLoading} />} />
      </Routes>
    </div>
  );
}

export default App;
