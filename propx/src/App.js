import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Welcome from "./Components/Welcome";
import Login from "./Components/Login";
import Register from "./Components/Register";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
       
      </Routes>
    </Router>
  );
}

export default App;
