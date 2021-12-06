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
import { IndividualTrainer } from "./components/individualTrainer/individualTrainer";
import { StudentsTable } from "./components/studentsTable/studentsTable";
import { IndividualStudent } from "./components/individualStudent/IndividualStudent";

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
        <Route path="/students/:lastName" element={<IndividualStudent />} />
      </Routes>

      <Footer />
    </>
  );
};

export default App;
