import React from 'react'
import './Stocks.css'
function Stocks() {
    return (
        <div className='stocks-page'>
            <div className='index-container'>
                <h3>Index</h3>
                <div className='indexCards'>
                    <div className='indexCard'>
                        <h5 className='indexHead'>NIFTY50</h5>
                        <div className='pricesbox'>
                            <div className='prices'>16969</div>
                            <div className='changes'></div>
                        </div>
                    </div>

                    <div className='indexCard'>
                        <h5 className='indexHead'>SENSEX</h5>
                        <div className='pricesbox'>
                            <div className='prices'></div>
                            <div className='changes'></div>
                        </div>
                    </div>

                    <div className='indexCard'>
                        <h5 className='indexHead'>BANKNIFTY</h5>
                        <div className='pricesbox'>
                            <div className='prices'></div>
                            <div className='changes'></div>
                        </div>
                    </div>
                </div>
            </div>


            <div className='topGainersContainer'>
                <h3 className='heading'>Top Gainers</h3>
                <div className='gainersList'>
                    <div className='gainersCard'>
                       <img src=''></img>
                       <h5>Adani Green</h5>     
                       <h5>124,566</h5>
                       <h6>40.16 (42.5%)</h6>
                    </div>
                    <div className='gainersCard'>
                       <img src=''></img>
                       <h5>Adani Green</h5>     
                       <h5>124,566</h5>
                       <h6>40.16 (42.5%)</h6>
                    </div>
                    <div className='gainersCard'>
                       <img src=''></img>
                       <h5>Adani Green</h5>     
                       <h5>124,566</h5>
                       <h6>40.16 (42.5%)</h6>
                    </div>
                    <div className='gainersCard'>
                       <img src=''></img>
                       <h5>Adani Green</h5>     
                       <h5>124,566</h5>
                       <h6>40.16 (42.5%)</h6>
                    </div>
                </div>
            </div>


            <div className='topLosersContainer'>
                <h3 className='heading'>Top Losers</h3>
                <div className='gainersList'>
                    <div className='gainersCard'>
                       <img src=''></img>
                       <h5>Adani Green</h5>     
                       <h5>124,566</h5>
                       <h6>40.16 (42.5%)</h6>
                    </div>
                    <div className='gainersCard'>
                       <img src=''></img>
                       <h5>Adani Green</h5>     
                       <h5>124,566</h5>
                       <h6>40.16 (42.5%)</h6>
                    </div>
                    <div className='gainersCard'>
                       <img src=''></img>
                       <h5>Adani Green</h5>     
                       <h5>124,566</h5>
                       <h6>40.16 (42.5%)</h6>
                    </div>
                    <div className='gainersCard'>
                       <img src=''></img>
                       <h5>Adani Green</h5>     
                       <h5>124,566</h5>
                       <h6>40.16 (42.5%)</h6>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Stocks
