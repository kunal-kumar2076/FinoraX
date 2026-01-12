import React from 'react';

function Team() {
    return ( 
        <div className='container'>
            <div className='row'>
                <div className='col p-5 ms-5'>
                    <img src='media/images/image.jpeg' alt='Team image' style={{borderRadius:"100%"}}/>
                    <h5 className='ms-5 mt-3'>Kunal kumar</h5>
                    <p className='ms-5'>Founder,CEO</p>
                </div>
                <div className='col' style={{color:"#424242",font:"18px inter,serif",margin:"15px",fontSize:"1.2em",lineHeight:"1.8"}}>
                    <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the <br/>hurdles he faced during his decade long stint as a trader. Today, Zerodha <br/>has changed the landscape of the Indian broking industry.</p>
                    <p>He is a member of the SEBI Secondary Market Advisory Committee <br/>(SMAC) and the Market Data Advisory Committee (MDAC).</p>
                    <p>Playing basketball is his zen.</p>
                    <p>Connect on <a href='' style={{textDecoration:"none"}}>Homepage </a>/ <a href='' style={{textDecoration:"none"}}>TradingQnA  </a> / <a href='' style={{textDecoration:"none"}}>Twitter </a></p>
                </div>
            </div>
        </div>
     );
}

export default Team;