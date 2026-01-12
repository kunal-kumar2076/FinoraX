import React from 'react';

function Hero() {
    return ( 
        <div className='container'>
            <div className='row text-center mt-5 mb-5 border-bottom'>
                <h1  style={{color:"#424242",font:"28px inter,serif"}}>Forever Trade Products</h1>
                <p style={{color:"#424242",font:"20px inter,serif",margin:"10px 0px 15px"}}>Sleek,modern,and intuitive trading platforms</p>
                <p className='mb-5'>Check out our <a href='' style={{textDecoration:"none"}}>investment offerings</a></p>
            </div>
        </div>
     );
}

export default Hero;