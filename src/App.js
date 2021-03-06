import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
  Footer,
  Header,
  Home,
  IndividualStudent,
  Students,
  StudentsTable,
  Trainers,
  TrainersTable,
} from "./components";
import { IndividualTrainer } from "./components/individualTrainer/individualTrainer";
// import { useStateProvider } from "./_contextApi/state";

const App = () => {
  const { trainerState, studentState, languages } = useSelector(
    ({ stateReducer }) => stateReducer
  );

  const dispatch = useDispatch();

  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/trainersRegistration"
          element={<Trainers languages={languages} dispatch={dispatch} />}
        />
        <Route
          exact
          path="/trainers"
          element={
            <TrainersTable trainerState={trainerState} dispatch={dispatch} />
          }
        />
        <Route path="/trainers/:lastName" element={<IndividualTrainer />} />

        <Route
          path="/studentsRegistrations"
          element={<Students languages={languages} dispatch={dispatch} />}
        />
        <Route
          exact
          path="/students"
          element={
            <StudentsTable studentState={studentState} dispatch={dispatch} />
          }
        />
        <Route
          path="/students/:id"
          element={
            <IndividualStudent
              studentState={studentState}
              dispatch={dispatch}
            />
          }
        />
      </Routes>

      <Footer />
    </>
  );
};

export default App;
