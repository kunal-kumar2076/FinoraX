import React, {useEffect,useState} from 'react';

import {io} from "socket.io-client";

// connect to backend server

const socket = io("https://finorax-backend.onrender.com");

function LiveStock({symbol}) {

    const[price, SetPrice] = useState(null);

    useEffect(() => {
        socket.emit("subscribe",symbol);

        // recieve live updates
        socket.on("finnhub:data",(data) => {
            if(data && data.data){
                const update = data.data[0];
                if(update && update.s === symbol){
                    SetPrice(update.p);
                }
            }
        });

        // cleanup on component unmount
        return () => {
            socket.emit("unsubscribe", symbol);
            socket.off("finnhub:data");
        };
    },[symbol]);
    
    return ( 
        <div style={{ background: "#fff", padding: 20, margin: 20, borderRadius: 10 }}>
            <h3>{symbol}</h3>
            <h2>{price ? `₹ ${price}` : "Loading..."}</h2>
        </div>
     );
}

export default LiveStock;
