import React, { useState } from 'react'
import './Section.css'
import Stocks from './Stocks/Stocks'
import MutualFunds from './MutualFunds/MutualFunds'
import Bonds from './Bonds/Bonds'
function Section() {

  const [active, setActive] = useState("0");

  const optionsClicked = (e) => {
    setActive(e.target.id);
    console.log(e.target.id);
  }
  return (
    <div className='scontainer'>
<<<<<<< HEAD:src/Components/Section/Section.jsx
      <div class="parallax"></div>
=======
      <div className="parallax"></div>
>>>>>>> 0a53f9424ab32486c8a97dfe2f4b67b705d11f51:src/Components/Section/Section.js
      <div className='box'>
      <section className='section-container'>
        
        <h2 className='heading'>Want to Invest ?</h2>
        <div className='optionsList'>
          <h3 id="0" className='option' onClick={optionsClicked} >Stocks</h3>
          <h3 id="1" className='option' onClick={optionsClicked}>Mutual Funds</h3>
          <h3 id="2" className='option' onClick={optionsClicked}>Bonds</h3>
        </div>
        {(active === "0") &&
          <Stocks />}
        {
          (active==="1")&& <MutualFunds />
        }
        {
          (active==="2")&&<Bonds />
        }
      </section>
      </div>
    </div>
  )
}

export default Section
