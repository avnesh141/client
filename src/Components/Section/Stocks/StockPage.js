import React, { useEffect, useState } from "react";
import Chart from './Chart'
import './StockPage.css'
import axios from "axios";
import { stocks } from "../../DashBoard/StocksData";
function StockPage() {
  const [symbol, setSymbol] = useState("");
  const [compData,setCompData] = useState({
    symbol: "AAPL",
    name: "Apple Inc. Common Stock",
    open: "158.8600",
    high: "160.3400",
    low: "157.8500",
    price: "160.2500",
    volume: "59256343",
    date: "2023-03-24",
    pclose: "158.9300",
    change: "1.3200",
    changep: "0.8306%",
  })
  
  setTimeout(()=>{
    
    setCompData(JSON.parse(localStorage.getItem('selectedCard')));
    let pcchange = document.getElementById('pc-change')
  let pchange = document.getElementById('p-change')
  if(pcchange){
  if(parseInt(compData.changep)>=0){
    pcchange.style.color='green';
    pchange.style.color='green';
  }else{
    pcchange.style.color='red';
    pchange.style.color='red';
  }}
  },0)

  
  
    
  
  
  return (
  <div className="stock-page-container">
    <div className="stock-page-box">
    <div className="stock-icon"><img src="https://assets-netstorage.groww.in/stock-assets/logos/NSE.png"></img></div>
    <h1>{compData['name']}</h1>
    <div className="stock-prices">
        <h2 className="stock-price">{compData['price']}</h2>
        <p className="stock-change positive"><div id="pc-change">{compData['change']}</div><div id="p-change">({compData['changep']})</div></p>
    </div>
    <div className="stock-chart">
        <Chart name={compData['symbol']}/>
    </div>
    </div>
  </div>)
}

export default StockPage;
