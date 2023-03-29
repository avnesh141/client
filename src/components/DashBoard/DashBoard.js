import React from 'react'
import "./Dashboard.css"
function Dashboard() {
  const openbuy = () => {
    if (document.getElementsByClassName("qtyifClickedbuy")[0].style.display === 'inline-block') {
      document.getElementsByClassName("qtyifClickedbuy")[0].style.display = 'none'
    }
    else {
      document.getElementsByClassName("qtyifClickedbuy")[0].style.display = 'inline-block';
      document.getElementsByClassName("qtyifClickedsell")[0].style.display = 'none';
    }
  }
  const opensell = () => {
    if (document.getElementsByClassName("qtyifClickedsell")[0].style.display === 'inline-block') {
      document.getElementsByClassName("qtyifClickedsell")[0].style.display = 'none'
    }
    else {
      document.getElementsByClassName("qtyifClickedsell")[0].style.display = 'inline-block';
      document.getElementsByClassName("qtyifClickedbuy")[0].style.display = 'none';
    }
  }
  return (
    <div className='Dashboard-page'>
      <div className='topportContainer'>
        <div className='portList'>
          <div className='portCard'>
            <div className='portContainer'>
              <div className="comName">
                <h5>Adani Green</h5>
                <h6>NET QTY 1</h6>
              </div>
              <div className="ltp">
                <h6>LTP ₹37.10</h6>
                <h6>P&L ₹13.20</h6>
              </div>
              <div className="buy" onClick={(e) => {
                e.preventDefault();
                openbuy();
              }}>
                Buy
              </div>
              <div className="sell" onClick={(e) => {
                e.preventDefault();
                opensell();
              }}>
                Sell
              </div>
            </div>
            <div className="qtyifClickedbuy">
              <p>Amount you want to buy:
                <input type="number" />
              </p>
              <p>
                Net value = Qty X LTP
              </p>
              <button>Confirm trans.</button>
            </div>
            <div className="qtyifClickedsell">
              <p>Amount you want to sell:
                <input type="number" />
              </p>
              <p>
                Net value = Qty X LTP
              </p>
              <button>Confirm trans.</button>
            </div>
          </div>
        </div>
        <div className='portList'>
          <div className='portCard'>
            <div className='portContainer'>
              <div className="comName">
                <h5>Adani Green</h5>
                <h6>NET QTY 1</h6>
              </div>
              <div className="ltp">
                <h6>LTP ₹37.10</h6>
                <h6>P&L ₹13.20</h6>
              </div>
              <div className="buy">
                <a href="">Buy</a>
              </div>
              <div className="sell">
                <a href="">Sell</a>
              </div>
            </div>
          </div>
        </div>
        <div className='portList'>
          <div className='portCard'>
            <div className='portContainer'>
              <div className="comName">
                <h5>Adani Green</h5>
                <h6>NET QTY 1</h6>
              </div>
              <div className="ltp">
                <h6>LTP ₹37.10</h6>
                <h6>P&L ₹13.20</h6>
              </div>
              <div className="buy">
                <a href="">Buy</a>
              </div>
              <div className="sell">
                <a href="">Sell</a>
              </div>
            </div>
          </div>
        </div>
        <div className='portList'>
          <div className='portCard'>
            <div className='portContainer'>
              <div className="comName">
                <h5>Adani Green</h5>
                <h6>NET QTY 1</h6>
              </div>
              <div className="ltp">
                <h6>LTP ₹37.10</h6>
                <h6>P&L ₹13.20</h6>
              </div>
              <div className="buy">
                <a href="">Buy</a>
              </div>
              <div className="sell">
                <a href="">Sell</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
