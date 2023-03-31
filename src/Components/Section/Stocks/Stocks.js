import React, { useEffect, useState } from 'react'
import './Stocks.css'
import { Navigate, useNavigate } from 'react-router-dom'
import { stocks } from '../../DashBoard/StocksData';
import usCompanies from './USStockCompanies';
function Stocks() {
    const navigate = useNavigate();
    const cardClicked = (e) => {
        navigate('/stockpage')
        var sym = e.target.id;
        var x=stocks.find(item => item.symbol === sym)
        console.log(x);
        localStorage.setItem('selectedCard',JSON.stringify(x));
    }

    let gainers = [...stocks].sort((a, b) => (a.changep < b.changep) ? 1 : -1)
    let losers = [...stocks].sort((a, b) => (a.changep > b.changep) ? 1 : -1)

    return (
        <div className='stocks-page'>
            <div className='index-container'>
                <h3>Index</h3>
                <div className='indexCards'>
                    <div className='indexCard'>
                        <h5 className='indexHead' id='CNX100' onClick={(e)=>cardClicked(e)}>NIFTY50</h5>
                        <div className='pricesbox'>
                            <div className='prices'>16969</div>
                            <div className='changes' style={{color:'green'}}>+40.59</div>
                        </div>
                    </div>

                    <div className='indexCard'> 
                        <h5 className='indexHead' id='SENSEX' onClick={(e)=>cardClicked(e)}>SENSEX</h5>
                        <div className='pricesbox'>
                            <div className='prices'>856565</div>
                            <div className='changes' style={{color:'green'}}>+50.2</div>
                        </div>
                    </div>

                    <div className='indexCard'>
                        <h5 className='indexHead'>BANKNIFTY</h5>
                        <div className='pricesbox'>
                            <div className='prices'>87756</div>
                            <div className='changes' style={{color:'red'}}>-53.2</div>
                        </div>
                    </div>
                </div>
            </div>


            <div className='topGainersContainer'>
                <h3 className='heading'>Top Gainers</h3>
                <div className='gainersList'>
                {
                    gainers.map((stock)=>{
                        return <div className='gainersCard'>
                        <div className='gainersContainer'>
                            <div className='companyDetails'>
                                <h5 id={stock.symbol} className='compName' onClick={(e)=>cardClicked(e)}>{stock.name}</h5>
                                <h5 className='compPrice'>{stock.price}</h5>
                                <h6 className='compChange'>{stock.changep}</h6>
                            </div>
                        </div>
                    </div>
                    })
                }
                </div>
                
            </div>


            <div className='topLosersContainer'>
                <h3 className='heading'>Top Losers</h3>
                <div className='gainersList'>
                {
                    losers.map((stock)=>{
                        return <div className='gainersCard'>
                        <div className='gainersContainer'>
                            <div className='companyDetails'>
                                <h5 id={stock.symbol} className='compName' onClick={(e)=>cardClicked(e)}>{stock.name}</h5>
                                <h5 className='compPrice'>{stock.price}</h5>
                                <h6 className='compChange'>{stock.changep}</h6>
                            </div>
                        </div>
                    </div>
                    })
                }
                </div>
            </div>

        </div>
    )
}

export default Stocks