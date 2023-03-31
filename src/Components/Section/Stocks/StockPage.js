import React, { useState } from "react";
import Chart from "./Chart";
import "./StockPage.css";
// import axios from "axios";
import { stocks } from "../../DashBoard/StocksData";
import { useParams } from "react-router";
function StockPage() {
  const { id } = useParams();
  const [compData, setCompData] = useState({});

  setTimeout(() => {
    setCompData(stocks.find((item) => item.symbol === id));

    let pcchange = document.getElementById("pc-change");
    let pchange = document.getElementById("p-change");
    console.log(parseInt(compData.changep));
    if (pcchange) {
      if (parseFloat(compData.changep) >= 0) {
        pcchange.style.color = "green";
        pchange.style.color = "green";
      } else {
        pcchange.style.color = "red";
        pchange.style.color = "red";
      }
    }
  }, 0);

  const [data, setdata] = useState({
    company: compData.name,
    type: "stock",
    number: 0,
    price: compData.price,
  });

    let pcchange = document.getElementById('pc-change')
  let pchange = document.getElementById('p-change')
  console.log(parseInt((compData.changep)))
  if(pcchange){
  if(parseFloat(compData.changep)>=0){
    pcchange.style.color='green';
    pchange.style.color='green';
  }else{
    pcchange.style.color='red';
    pchange.style.color='red';
  }}
  },0)

  const Clickhandlersell = async () => {
    const response = await fetch(`/api/invest/sell`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authtoken: JSON.stringify(localStorage.getItem("token")),
      },
      body: JSON.stringify(data),
    });
    opensell();
    setdata({
      company: compData.name,
      type: "stock",
      number: 0,
      price: compData.price,
    });
  };

  const Clickhandlerbuy = async () => {
    console.log(data);
    const response = await fetch(`/api/invest/buy`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authtoken: JSON.stringify(localStorage.getItem("token")),
      },
      body: JSON.stringify(data),
    });
    openbuy();
    setdata({
      company: compData.name,
      type: "stock",
      number: 0,
      price: compData.price,
    });
  };

  const confirmbuy = () => {
    if (window.confirm("Are You ready for transaction")) {
      Clickhandlerbuy();
    }
  };

  const confirmsell = () => {
    if (window.confirm("Are You ready for transaction")) {
      Clickhandlersell();
    }
  };

  const onchange = (e) => {
    setdata({ ...data, [e.target.name]: [e.target.value] });
  };

  return (
  <div className="stock-page-container">
    <div className="stock-page-box">
    <div className="stock-icon"><img src="https://assets-netstorage.groww.in/stock-assets/logos/NSE.png"></img></div>
    
    <div className="button-div">
    <h1 className="compHead">{compData['name']}</h1>
    <button className="buy-btn">Buy</button>
    <button className="sell-btn">Sell</button>
    </div>
    <div className="stock-prices">
        <h2 className="stock-price">{compData['price']}</h2>
        <p className="stock-change positive"><div id="pc-change">{compData['change']}</div><div id="p-change">({compData['changep']})</div></p>
    </div>
    <div className="stock-chart">
      <Chart name={id}/>
    </div>
    </div>
  );
}

export default StockPage;
