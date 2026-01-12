import React from 'react';

function RightSection({productName,productDescription,kiteConnect,imageURL}) {
    return ( 
        <div className='container'>
            <div className='row' style={{color:"#424242",font:"20px inter,serif",marginLeft:"80px"}}>
                <div className='col mt-5 p-5'>
                    <h2>{productName}</h2>
                    <p className='text-muted' style={{lineHeight:"1.8"}}>{productDescription}</p>
                    <a href={kiteConnect}>Kite Connect</a>
                </div>
                <div className='col'>
                    <img src={imageURL}/>
                </div>
            </div>
        </div>
     );
}

export default RightSection;