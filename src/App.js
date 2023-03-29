import React from "react";
import Login from "./Components/Login_page/Login_page";
import Signup from "./Components/Signup/Signup";
import Section from "./Components/Section/Section";
import Footer from "./Components/Footer/Footer";
import { BrowserRouter as Router, Navigate } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import DashBoard from "./Components/DashBoard/DashBoard";
const App = () => {
  return (
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/trade" element={<Section />} />
          <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/dashboard" element={<DashBoard/>}/>
          <Route exact path="*" element={<Navigate to="/" />} />
        </Routes>
          <Footer />
      </Router>
  );
};

export default App;
