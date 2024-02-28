import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";

import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <Login />
      <Register />

    </Router>
  );
}

export default App;
