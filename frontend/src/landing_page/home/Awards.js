import React from 'react';

function Awards() {
    return ( 
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-6 p-5'>
                    <img src='media/images/largestBroker.svg'/>
                </div>
                <div className='col-6 p-5'>
                    <h2 className='mb-3'>Largest stock broker in India</h2>
                    <p>2+ million Zerodha clients contribute to over 15% of all retail order volume in india by trading and investing in:</p>
                    <div className='row'>
                        <div className='col-6'>
                            <ul>
                                <li><p>Future and Options</p></li>
                                <li><p>Commodity derivatives</p></li>
                                <li><p>Currency derivatives</p></li>
                            </ul>
                        </div>
                        <div className='col-6'>
                            <ul>  
                                <li><p>Stocks & IPOs</p></li>
                                <li><p>Direct mutual funds</p></li>
                                <li>Bonds and Gov securities</li>
                            </ul>
                        </div>
                        <img src='media/images/press-logos.png' style={{width:"90%"}}/>
                    </div>
                    
                </div>
            </div>
        </div>
     );
}

export default Awards;