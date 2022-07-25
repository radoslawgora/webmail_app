import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./views/home";
import Login from "./views/login";
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}


export default App;

