import React from "react";
import Login from "./components/Login_page/Login_page";
import Signup from "./components/Signup/Signup";
import Section from "./components/Section/Section";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Navigate } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
const App = () => {
  return (
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Section />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="*" element={<Navigate to="/" />} />
        </Routes>
          <Footer />
      </Router>
  );
};

export default App;
