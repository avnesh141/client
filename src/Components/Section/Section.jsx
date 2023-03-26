import React, { useState } from 'react'
import './Section.css'
import Stocks from './Stocks/Stocks.jsx'
function Section() {

    const [active,setActive] = useState("0");

    const optionsClicked = (e) => {
        setActive(e.target.id);
        console.log(e.target.id);
    }
  return (
    <div className='section-container'>
      <section>
        <h2 className='heading'>Want to Invest ?</h2>
        <div className='optionsList'>
            <h3 id="0" onClick={optionsClicked} >Stocks</h3>
            <h3 id="1" onClick={optionsClicked}>Mutual Funds</h3>
            <h3 id="2" onClick={optionsClicked}>Bonds</h3>
        </div>
        <hr></hr>
        {(active==0) &&
        <Stocks />}
      </section>
    </div>
  )
}

export default Section
