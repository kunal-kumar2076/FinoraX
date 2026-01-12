import React from 'react';

function Hero() {
    return ( 
        <section className='container-fluid' id="supportHero">
            <div className='row p-5 mt-5 ' id='supportWrapper'>
                <h4>Support portal</h4>
                <a href="">Track Tickets</a>
            </div>
            <div className='row p-5'>
                <div className='col-6 p-5'>
                    <h3 className='mb-4'>Search for an answer or browse help topics<br/>to create a ticket</h3>
                    <input placeholder='Eg: how do i activate F&O, why is my order getting rejected'/><br/>
                    <a href=''>Track account opening</a>
                    <a href=''>Track segment activation</a>
                    <a href=''>Intraday</a><br/>
                    <a href=''>Margins</a>
                    <a href=''>Kite user manual</a>
                </div>
                <div className='col-6 p-5'>
                    <h3 className='mb-4'>Featured</h3>
                    <ol>
                        <li><a href=''>Current Takeovers and Delisting-january 2025</a></li>
                        <li><a href=''>Latest Intradey Leverages - MIS & CO</a></li>
                    </ol>
                </div>
            </div>
        </section>
     );
}

export default Hero;