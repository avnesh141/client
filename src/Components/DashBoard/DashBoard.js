import React, { useEffect, useState } from "react";
import ComapanyCard from "./ComapanyCard";
import "./Dashboard.css";
function Dashboard() {
  const [boughtst, setboughtst] = useState([]);
  const [boughtcr, setboughtcr] = useState([]);
  const [invest, setinvest] = useState(0);
  const boughtfunc = async () => {
    const response = await fetch(`http://localhost:5000/api/invest/get`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authtoken: JSON.stringify(localStorage.getItem("token")),
      },
    });
    let parsedata = await response.json();
    let finaldata = Object.values(parsedata.stocks);
    let value = 0;
    finaldata.forEach((element) => {
      value += element.price * element.number;
    });
    setinvest(value);
    let newboughtst = finaldata.filter((stock) => {
      return stock.type === "stock";
    });
    setboughtst(newboughtst);
    let newboughtcr = finaldata.filter((stock) => {
      return stock.type === "crypto";
    });
    setboughtcr(newboughtcr);
  };

  const [user, setuser] = useState({});
  const funcuser = async () => {
    const response = await fetch(`http://localhost:5000/api/auth/getuser`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authtoken: JSON.stringify(localStorage.getItem("token")),
      },
    });
    const newuser = await response.json();
    setuser(newuser);
    console.log(user);
  };
  useEffect(() => {
    boughtfunc();
    funcuser();
  });

  return (
    <div className="Dashboard-page">
      <div className="topportContainer">
        <h2>{user.name}</h2>
        <div>
          <h3>Amount:{user.amount}</h3>
        </div>
        <div>
          <h3>Invested:{invest}</h3>
        </div>
        {boughtst.length && (
          <div className="boughtStocks">
            <h3>Stocks</h3>
            {boughtst.map((stock, key) => {
              return (
                // stock.type === "stock" && (
                <ComapanyCard
                  company={stock.company}
                  number={stock.number}
                  price={stock.price}
                  type={stock.type}
                  id={stock._id}
                  key={key}
                />
                // )
              );
            })}
          </div>
        )}
        {boughtcr.length && (
          <div className="boughtCrypto">
            <h3>Crypto</h3>
            {boughtcr.map((stock, key) => {
              return (
                // stock.type==="crypto" &&
                <ComapanyCard
                  company={stock.company}
                  number={stock.number}
                  price={stock.price}
                  type={stock.type}
                  id={stock._id}
                  key={key}
                />
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
