import React, { useEffect, useState } from 'react'
import './Stocks.css'
import { Navigate, useNavigate } from 'react-router-dom'
import { stocks } from '../../DashBoard/StocksData';
function Stocks() {
    const navigate = useNavigate();
    const cardClicked = (e) => {
        navigate('/stockpage')
        var sym = e.target.id;
        var x=stocks.find(item => item.symbol === sym)
        console.log(x);
        localStorage.setItem('selectedCard',JSON.stringify(x));
    }

    // const options = {
    //     method: 'GET',
    //     url: 'https://twelve-data1.p.rapidapi.com/stocks',
    //     params: {exchange: 'NSE', format: 'json'},
    //     headers: {
    //       'X-RapidAPI-Key': '654dcc368amsh5adba7be877afedp16735bjsn28793c915a11',
    //       'X-RapidAPI-Host': 'twelve-data1.p.rapidapi.com'
    //     }
    //   };
      
    //   axios.request(options).then(function (response) {
    //       setStockList(response.data);
    //   }).catch(function (error) {
    //       console.error(error);
    //   })

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
                    stocks.map((stock)=>{
                        return <div className='gainersCard'>
                        <div className='gainersContainer'>
                            <div className='companyDetails'>
                                <h5 id={stock.symbol} onClick={(e)=>cardClicked(e)}>{stock.name}</h5>
                                <h5>{stock.pclose}</h5>
                                <h6>{stock.changep}</h6>
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
                    <div className='gainersCard'>
                        <div className='gainersContainer'>
                            <img className='companyIcon' src='data:image/png;base64,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'></img>
                            <div className='companyDetails'>
                                <h5>Adani Green</h5>
                                <h5>124,566</h5>
                                <h6>40.16 (42.5%)</h6>
                            </div>
                        </div>
                    </div>
                    <div className='gainersCard'>
                        <div className='gainersContainer'>
                            <img className='companyIcon' src='data:image/png;base64,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'></img>
                            <div className='companyDetails'>
                                <h5>Adani Green</h5>
                                <h5>124,566</h5>
                                <h6>40.16 (42.5%)</h6>
                            </div>
                        </div>
                    </div>
                    <div className='gainersCard'>
                        <div className='gainersContainer'>
                            <img className='companyIcon' src='data:image/png;base64,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'></img>
                            <div className='companyDetails'>
                                <h5>Adani Green</h5>
                                <h5>124,566</h5>
                                <h6>40.16 (42.5%)</h6>
                            </div>
                        </div>
                    </div>
                    <div className='gainersCard'>
                        <div className='gainersContainer'>
                            <img className='companyIcon' src='data:image/png;base64,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'></img>
                            <div className='companyDetails'>
                                <h5>Adani Green</h5>
                                <h5>124,566</h5>
                                <h6>40.16 (42.5%)</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Stocks