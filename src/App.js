import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import LoadingBar from "react-top-loading-bar";

const App = () => {
  const apiKey = process.env.REACT_APP_NEWS_API_KEY;
  const [progress, setProgress] = useState(0);
  const updateProgress = (progress) => {
    setProgress(progress);
  };
  return (
    <BrowserRouter>
      <LoadingBar
        color="#0d6efd"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <Navbar />
      <Routes>
        <Route
          path="/"
          exact
          element={<News apiKey={apiKey} updateProgress={updateProgress} />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
