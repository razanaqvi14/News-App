import Navbar from "./components/Navbar";
import About from "./components/About";
import News from "./components/News";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import React from "react";

const App = () => {
  const apiKey = process.env.REACT_APP_NEWS_API_KEY;
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<News apiKey={apiKey} />} />
        <Route path="/about" exact element={<About />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
