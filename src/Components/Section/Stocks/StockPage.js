import React, { useState } from "react";
import Chart from './Chart'
function StockPage() {
  const [compName, setCompName] = useState("");
  setTimeout(() => {
    console.log(localStorage.getItem("selectedCard"));
    setCompName(localStorage.getItem("selectedCard"));
  }, 2000);
  return (
  <div className="stock-page-container">
    <div className="stock-page-box">
    <div className="stock-icon"><img src="https://assets-netstorage.groww.in/stock-assets/logos/NSE.png"></img></div>
    <h1>{compName}</h1>
    <div className="stock-prices">
        <h2 className="stock-price">16923.27</h2>
        <p className="stock-change">+129.72 (0.76%) </p>
    </div>
    <div className="stock-chart">
        <Chart />
    </div>
    </div>
  </div>)
}

export default StockPage;
