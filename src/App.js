import React from "react";
import Login from "./Components/Login_page/Login_page";
import Signup from "./Components/Signup/Signup";
import Section from "./Components/Section/Section";
import Footer from "./Components/Footer/Footer";
import { BrowserRouter as Router, Navigate } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import AboutUs from "./Components/Aboutus/AboutUs";
import StockPage from "./Components/Section/Stocks/StockPage";
import DashBoard from "./Components/DashBoard/DashBoard";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import StockPage from "./Components/Section/Stocks/StockPage"
import AboutUs from "./Components/Aboutus/AboutUs";

const App = () => {
  return (
    <>
      <ToastContainer />
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Section />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/aboutus" element={<AboutUs />} />
          <Route exact path="/stockpage" element={<StockPage />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/dashboard" element={<DashBoard />} />
          <Route exact path="/aboutus" element={<AboutUs />} />
          <Route exact path="/stockpage" element={<StockPage />} />
          <Route exact path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
