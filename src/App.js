import Navbar from "./components/Navbar";
import About from "./components/About";
import News from "./components/News";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import React from "react";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<News />} />
        <Route path="/about" exact element={<About />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
