import React from 'react';

function LeftSection({imageURL,productName,productDescription,tryDemo,learnMore,googlePlay,appStore}) {
    return ( 
        <div className='conatiner'>
            <div className='row'>
                <div className='col p-5'>
                    <img src={imageURL} style={{marginLeft:"110px"}}/>
                </div>
                <div className='col-4 p-5 mt-5' style={{marginRight:"150px",color:"#424242",font:"20px inter,serif"}}>
                    <h2>{productName}</h2>
                    <p className='text-muted' style={{lineHeight:"1.5"}}>{productDescription}</p>
                    <div className='mt-4 p-2'>
                        <a href={tryDemo} style={{textDecoration:"none"}}>Try Demo</a>
                        <a href={learnMore} style={{textDecoration:"none",marginLeft:"80px"}}>Learn more</a>
                    </div>
                    <div className='mt-5'>
                        <a href={googlePlay}><img src='media/images/googlePlayBadge.svg'/></a>
                        <a href={appStore} style={{marginLeft:"20px"}}><img src='media/images/appStoreBadge.svg'/></a>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default LeftSection;