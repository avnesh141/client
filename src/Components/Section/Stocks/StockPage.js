import React, { useEffect, useState } from "react";
import Chart from './Chart'
import './StockPage.css'
import axios from "axios";
import { stocks } from "../../DashBoard/StocksData";
import { useParams } from "react-router";
function StockPage() {
  const {id} = useParams();
  const [compData,setCompData] = useState({
  })
  const [imgLink,setImgLink] = useState('');

  
useEffect(()=>{
  const options = {
    method: 'GET',
    url: 'https://twelve-data1.p.rapidapi.com/logo',
    params: {symbol: id},
    headers: {
      'X-RapidAPI-Key': '654dcc368amsh5adba7be877afedp16735bjsn28793c915a11',
      'X-RapidAPI-Host': 'twelve-data1.p.rapidapi.com'
    }
  };
  
  axios.request(options).then(function (response) {
    // console.log(response.data.meta.url)
    setImgLink(response.data.meta.url)
  }).catch(function (error) {
    console.error(error);
    setImgLink("https://assets-netstorage.groww.in/stock-assets/logos/NSE.png" )
  });
},[compData])


  setTimeout(()=>{
    
  setCompData(stocks.find(item=>item.symbol===id));

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
  },2)

  
  
    
  
  
  return (
  <div className="stock-page-container">
    <div className="stock-page-box">
    <div className="stock-icon"><img src={imgLink}></img></div>
    {/* */}
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
  </div>)
}

export default StockPage;
