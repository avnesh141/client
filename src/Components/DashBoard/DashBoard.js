import React, { useEffect, useState } from "react";
import ComapanyCard from "./ComapanyCard";
import { stocks } from "./Stocks";

import "./Dashboard.css";

const DashBoard = () => {
  stocks.map((stock) => {
    console.log(stock);
  })
  const [cryptodata, setdata] = useState([]);
  const fetchdata = async () => {
    let url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false";
    const data = await fetch(url);
    const parsedata = await data.json();
    console.log(parsedata);
    setdata(parsedata);
  }
  useEffect(() => {
    fetchdata();
  }, [])
  
  return (
    <div className="crypto">
      {cryptodata.map((crypto, index) => {
        return (
          <div className="cryptoCard">
            <ComapanyCard
              key={index}
              name={crypto.name}
              price={crypto.current_price}
              change={crypto.price_change_24h}
              changepercent={crypto.price_change_percentage_24h}
              imgurl={crypto.image}
            />
          </div>
        );
      })}
    </div>
  );

};



export default DashBoard;
