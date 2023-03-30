import React, { useEffect, useState } from "react";
import ComapanyCard from "./ComapanyCard";
import "./Dashboard.css";
function Dashboard() {
  const [bought, setbought] = useState([]);
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
    setbought(finaldata);
    console.log(finaldata);
    console.log(typeof bought);
  };

  useEffect(() => {
    boughtfunc();
  },[]);

  return (
    <div className="Dashboard-page">
      <div className="topportContainer">
        {bought.map((stock, key) => {
          return (
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
    </div>
  );
}

export default Dashboard;
