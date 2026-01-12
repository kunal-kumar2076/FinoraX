import React from 'react';

function Hero() {
    return ( 
        <div className='container'>
            <div className='row text-center mt-5 mb-5'>
                <h1 style={{font:"28px inter,serif"}}>Charges</h1>
                <p style={{color:"#9B9B9B",font:"20px inter,serif",margin:"10px 0px 15px"}}>List of all charges and taxes</p>
            </div>
            <div className='row text-center mt-3 mb-3'>
                <h1 style={{font:"28px inter,serif"}}></h1>
                <p style={{color:"#9B9B9B",font:"20px inter,serif",margin:"10px 0px 15px"}}></p>
            </div>
            <div className='row p-5 text-center'>
                <div className='col-4 p-5'>
                    <img src='media/images/pricing0.svg'/>
                    <h2 style={{color:"#424242",font:"28px inter,serif",margin:"0px 0px 20px"}}>Free equity delivery</h2>
                    <p style={{color:"#666666",font:"16px inter,serif",margin:"16px 0px 15px"}}>All equity delivery investements (NSE,BSE),<br/>are absolutely free - 0 brokerage</p>
                </div>
                <div className='col-4 p-5'>
                    <img src='media/images/intradayTrades.svg'/>
                    <h2 style={{color:"#424242",font:"28px inter,serif",margin:"0px 0px 20px"}}>Intraday and F&O trades</h2>
                    <p style={{color:"#666666",font:"16px inter,serif",margin:"16px 0px 15px"}}>Flat ₹ 20 or 0.03% (whichever is lower) per <br/>executed order on intraday trades across <br/>equity, currency, and commodity trades. Flat <br/>₹20 on all option trades.</p>
                </div>
                <div className='col-4 p-5'>
                    <img src='media/images/pricing0.svg'/>
                    <h2 style={{color:"#424242",font:"28px inter,serif",margin:"0px 0px 20px"}}>Free direct MF</h2>
                    <p style={{color:"#666666",font:"16px inter,serif",margin:"16px 0px 15px"}}>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                </div>
            </div>
        </div>
     );
}

export default Hero;