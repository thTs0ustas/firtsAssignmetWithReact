import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";

import { Footer } from "./components";
import { Trainers } from "./components";
import { Home } from "./components";
import { TrainersTable } from "./components";
import { Header } from "./components";
import { Students } from "./components";
import { IndividualTrainer } from "./components/individualTrainer/individualTrainer";
import { StudentsTable } from "./components";
import { IndividualStudent } from "./components";

const App = () => {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trainersRegistration" element={<Trainers />} />
        <Route exact path="/trainers" element={<TrainersTable />} />
        <Route path="/trainers/:lastName" element={<IndividualTrainer />} />

        <Route path="/studentsRegistrations" element={<Students />} />
        <Route exact path="/students" element={<StudentsTable />} />
        <Route path="/students/:id" element={<IndividualStudent />} />
      </Routes>

      <Footer />
    </>
  );
};

export default App;
