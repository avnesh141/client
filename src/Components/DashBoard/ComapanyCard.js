import React from 'react'
import "./Companycard.css"

const ComapanyCard = (props) => {
  console.log(props.name);
  return (
    <div className="card">
      <img
        style={{
          width: "20%",
          height: "20%",
        }}
        src={props.imgurl}
        alt=""
      />
      <h3>{props.name}</h3>
      <h3>${props.price}</h3>
      <span>{parseFloat(props.change).toFixed(2)}</span>
      <span>({parseFloat(props.changepercent).toFixed(2)}%)</span>
    </div>
  );
}
export default ComapanyCard