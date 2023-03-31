import React from "react";
import Login from "./Components/Login_page/Login_page";
import Signup from "./Components/Signup/Signup";
import Section from "./Components/Section/Section";
import Footer from "./Components/Footer/Footer";
import { BrowserRouter as Router, Navigate } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Landing from "./Components/Landingpage/Landing"
import { Helmet } from "react-helmet";
const App = () => {
  return (
      <Router>
        <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Khula:wght@400;600;800&display=swap" rel="stylesheet" />
      </Helmet>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route exact path="/trade" element={<Section />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="*" element={<Navigate to="/" />} />
        </Routes>
          <Footer />
      </Router>
  );
};

export default App;
