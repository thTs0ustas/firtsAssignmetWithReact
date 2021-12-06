import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { StateProvider } from "./contextApi/state";

ReactDOM.render(
  <Router>
    <StateProvider>
      <App />
    </StateProvider>
  </Router>,
  document.getElementById("root")
);
