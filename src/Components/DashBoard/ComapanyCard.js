import React, { useState } from 'react'
import "./Companycard.css"

const ComapanyCard = (props) => {

const [data,setdata]=useState({company:`${props.company}`,type:props.type,number:0,price:props.price})

  const Clickhandlersell = async() => {
     const response = await fetch(`http://localhost:5000/api/invest/sell`, {
       method: "POST",
       headers: {
         "Content-Type": "application/json",
         authtoken: JSON.stringify(localStorage.getItem("token")),
       },
       body: JSON.stringify(data),
     });
  }

  const confirmbuy = () => {
    if (window.confirm("are u ready for transaction"))
    {
      Clickhandlerbuy();
    }
}

  const confirmsell = () => {
    if (window.confirm("are u ready for transaction"))
    {
      Clickhandlersell();
    }
}

  const Clickhandlerbuy = async () => {
    console.log(data);
     const response = await fetch(`http://localhost:5000/api/invest/buy`, {
       method: "POST",
       headers: {
         "Content-Type": "application/json",
         authtoken: JSON.stringify(localStorage.getItem("token")),
       },
       body: JSON.stringify(data),
     });
  }


  const onchange = (e) => {
    setdata({...data, [e.target.name]: [e.target.value]})
  }

  const openbuy = () => {
   if (
     document.getElementById(`${props.id}buy`).style.display === "inline-block"
   ) {
     document.getElementById(`${props.id}buy`).style.display = "none";
   } else {
     document.getElementById(`${props.id}buy`).style.display = "inline-block";
     document.getElementById(`${props.id}sell`).style.display = "none";
   }
 };
 const opensell = () => {
   if (
     document.getElementById(`${props.id}sell`).style.display === "inline-block"
   ) {
     document.getElementById(`${props.id}sell`).style.display = "none";
   } else {
     document.getElementById(`${props.id}sell`).style.display = "inline-block";
     document.getElementById(`${props.id}buy`).style.display = "none";
   }
 };

  return (
    <div className="portList">
      <div className="portCard">
        <div className="portContainer">
          <div className="comName">
            <h5>{props.company}</h5>
            <h6>NET QTY {props.number}</h6>
          </div>
          <div className="ltp">
            <h6>LTP ₹{props.price}</h6>
            <h6>P&L ₹13.20</h6>
          </div>
          <div
            className="buy"
            onClick={(e) => {
              e.preventDefault();
              openbuy();
            }}
          >
            Buy
          </div>
          <div
            className="sell"
            onClick={(e) => {
              e.preventDefault();
              opensell();
            }}
          >
            Sell
          </div>
        </div>
        <div className="qtyifClickedbuy" id={`${props.id}buy`}>
          <p>
            Amount you want to buy:
            <input type="number" name="number" onChange={onchange} />
          </p>
          <p>Net value = Qty X LTP</p>
          <button onClick={confirmbuy}>Confirm trans.</button>
        </div>
        <div className="qtyifClickedsell" id={`${props.id}sell`}>
          <p>
            Amount you want to sell:
            <input type="number" value={data.number} name="number" onChange={onchange} />
          </p>
          <p>Net value = Qty X LTP</p>
          <button onClick={confirmsell}>Confirm trans.</button>
        </div>
      </div>
    </div>
  );
}
export default ComapanyCard