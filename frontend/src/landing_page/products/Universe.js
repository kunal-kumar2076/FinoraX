import React from 'react';

function Universe() {
    return ( 
        <div className='container'>
            <div className='row text-center' style={{color:"#424242",font:" 20px inter,serif"}}>
                <p className='mb-5'>Want to know more about our technology stack? Check out the Trade.tech blog.</p>
                <h2 className='mt-5'>The Trade Universe</h2>
                <p className='mt-3'>Extend your trading and investment experience even further with our partner platforms</p>
            </div>
            <div className='row mt-5 mb-5'>
                <div className='col-2'></div>
                <div className='col-3'>
                    <img src='media/images/sensibullLogo.svg' style={{width:"70%"}}/>
                    <p className='text-muted'>Options trading platform that lets youcreate strategies, analyze positions, and examine data points like open interest, FII/DII, and more.</p>
                </div>
                <div className='col-3'>
                    <img src='media/images/smallcaseLogo.png'/>
                    <p className='text-muted'>Thematic investing platformthat helps you invest in diversifiedbaskets of stocks on ETFs.</p>
                </div>
                <div className='col-3'>
                    <img src='media/images/dittoLogo.png' style={{width:"40%"}}/>
                    <p className='text-muted'>Personalized advice on lifeand health insurance. No spam and no mis-selling.</p>
                </div>
            </div>
        </div>
     );
}

export default Universe;