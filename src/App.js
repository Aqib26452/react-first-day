import React from "react";
import "./index.js";
import "./components/input.jsx";
import "./components/account/Register.jsx";

// import { BrowserRouter as Router, Route } from "react-router-dom"; //chat gpt give
import Navebar from "./components/Navebar";
import Hero from "./components/hero";
import Login from "./components/account/login";
import Register from "./components/account/Register";
import { Route, Routes } from "react-router-dom";
// import Input from "./components/Input";

// import Inputs from "./components/input.jsx";

function App() {
  return (
    <>
      <Navebar />
      <Hero />

      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
