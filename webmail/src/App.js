import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./views/home";
import Login from "./views/login";
import NewMessageView from "./views/newMessageView";
import './App.css';
import SettingsView from "./views/homeViews/settingsView";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/new" element={<NewMessageView />} />
      </Routes>
    </div>
  );
}


export default App;

