import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";

import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { Trainers } from "./components/trainers";
import "./App.css";
import { Home } from "./components/home";

function App() {
  return (
    <>
      <Header logImg={""} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trainersRegistration" element={<Trainers />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
