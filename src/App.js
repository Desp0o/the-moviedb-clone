import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/home";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
     
    </>
  );
}

export default App;
