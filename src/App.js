import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";

import { Footer } from "./components/footer";
import { Trainers } from "./components/trainers";
import "./App.css";
import { Home } from "./components/home";
import { TrainersTable } from "./components/trainersTable";
import { Header } from "./components/header";
import { Students } from "./components/students";

const App = () => {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trainersRegistration" element={<Trainers />} />
        <Route path="/trainers" element={<TrainersTable />} />
        <Route path="/studentsRegistrations" element={<Students />} />
      </Routes>

      <Footer />
    </>
  );
};

export default App;
