import React from 'react'

function Stocks() {
  return (
    <div className='stocks-page'>
            <h2>Index</h2>
            <div className='indexCards'>
                <h4 className='indexHead'>NIFTY50</h4>
                <div className='pricesbox'>
                    <div className='prices'></div>
                    <div className='changes'></div>
                </div>
            </div>

            <div className='indexCards'>
                <h4 className='indexHead'>SENSEX</h4>
                <div className='pricesbox'>
                    <div className='prices'></div>
                    <div className='changes'></div>
                </div>
            </div>

            <div className='indexCards'>
                <h4 className='indexHead'>BANKNIFTY</h4>
                <div className='pricesbox'>
                    <div className='prices'></div>
                    <div className='changes'></div>
                </div>
            </div>
        </div>
  )
}

export default Stocks
