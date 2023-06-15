import Navbar from "./components/Navbar";
import News from "./components/News";
import React, { useState } from "react";
import LoadingBar from "react-top-loading-bar";

const App = () => {
  const apiKey = process.env.REACT_APP_NEWS_API_KEY;
  const [progress, setProgress] = useState(0);
  const updateProgress = (progress) => {
    setProgress(progress);
  };
  return (
    <>
      <LoadingBar
        color="#0d6efd"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <Navbar />
      <News apiKey={apiKey} updateProgress={updateProgress} />
    </>
  );
};

export default App;
