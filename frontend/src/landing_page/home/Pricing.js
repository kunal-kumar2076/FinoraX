import React from 'react';

function Pricing() {
    return ( 
        <div className='container'>
            <div className='row mt-5'>
                <div className='col-6'>
                    <h2>Unbeatable pricing</h2>
                    <p className='mt-3'>We pioneered the correct of discount broking and price <br/>transparency in india.Flat fees and no hidden charges</p>
                    <a href='' style={{textDecoration:'none'}}>See pricing <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                </div>
                <div className='col-6'>
                    <div className='row'>
                        <div className='col-4'>
                            <img src='media/images/pricing0.svg'/>
                            <p className='text-muted'>Free account opening</p>
                        </div>
                        <div className='col-4'>
                            <img src='media/images/pricingEquity.svg'/>
                            <p className='text-muted'>Free equity delivery and direct mutual fund</p>
                        </div>
                        <div className='col-4'>
                            <img src='media/images/intradayTrades.svg'/>
                            <p className='text-muted'>Intraday and F&O</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Pricing;