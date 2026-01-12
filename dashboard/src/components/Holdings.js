// import React , {useState,useEffect} from "react";
// import { VerticalGraph } from "./VerticalGraph";

// import  axios from 'axios';

// // import { holdings } from "../data/data";

// const Holdings = () => {

//   const [allHoldings , setAllHoldings] = useState([]);

//   useEffect(() => {
//     axios.get("http://localhost:3002/allHoldings").then((res)=>{
//       console.log(res.data);
//       setAllHoldings(res.data);
//     });
//   }, []);

//   // vertical graph data
//  // const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
//   const labels = allHoldings.map((subArray) => subArray["name"]);

//   const data = {
//     labels,
//     datasets: [
//       {
//         label: 'Stock Price',
//         data: allHoldings.map((stock) => stock.price),
//         backgroundColor: 'rgba(255, 99, 132, 0.5)',
//       },
//     ],
//   };

//   //   export const data = {
//   //   labels,
//   //   datasets: [
//   //     {
//   //       label: 'Dataset 1',
//   //       data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
//   //       backgroundColor: 'rgba(255, 99, 132, 0.5)',
//   //     },
//   //     {
//   //       label: 'Dataset 2',
//   //       data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
//   //       backgroundColor: 'rgba(53, 162, 235, 0.5)',
//   //     },
//   //   ],
//   // };


//   return (
//     <>
//       <h3 className="title">Holdings ({allHoldings.length})</h3>

//       <div className="order-table">
//         <table>
//           <tr>
//             <th>Instrument</th>
//             <th>Qty.</th>
//             <th>Avg. cost</th>
//             <th>LTP</th>
//             <th>Cur. val</th>
//             <th>P&L</th>
//             <th>Net chg.</th>
//             <th>Day chg.</th>
//           </tr>

//           {allHoldings.map((stock, index) => {
//             const curValue = stock.price * stock.qty;
//             const isProfit = curValue - stock.avg * stock.qty >= 0.0;
//             const profClass = isProfit ? "profit" : "loss";
//             const dayClass = stock.isLoss ? "loss" : "profit";

//             return (
//               <tr key={index}>
//                 <td>{stock.name}</td>
//                 <td>{stock.qty}</td>
//                 <td>{stock.avg.toFixed(2)}</td>
//                 <td>{stock.price.toFixed(2)}</td>
//                 <td>{curValue.toFixed(2)}</td>
//                 <td className={profClass}>
//                   {(curValue - stock.avg * stock.qty).toFixed(2)}
//                 </td>
//                 <td className={profClass}>{stock.net}</td>
//                 <td className={dayClass}>{stock.day}</td>
//               </tr>
//             );
//           })}
//         </table>
//       </div>

//       <div className="row">
//         <div className="col">
//           <h5>
//             29,875.<span>55</span>{" "}
//           </h5>
//           <p>Total investment</p>
//         </div>
//         <div className="col">
//           <h5>
//             31,428.<span>95</span>{" "}
//           </h5>
//           <p>Current value</p>
//         </div>
//         <div className="col">
//           <h5>1,553.40 (+5.20%)</h5>
//           <p>P&L</p>
//         </div>
//       </div>
//       <VerticalGraph data={data}/>
//     </>
//   );
// };

// export default Holdings;

import React, { useState, useEffect } from "react";
import { VerticalGraph } from "./VerticalGraph";
import axios from "axios";
import { io } from "socket.io-client";

// Connect to backend Socket.IO
const socket = io("http://localhost:3002");

// Map stock names to Finnhub symbols
const symbolMap = {
  "INFY": "INFY.NS",
  "ONGC": "ONGC.NS",
  "TCS": "TCS.NS",
  "KPITTECH": "KPITTECH.NS",
  "QUICKHEAL": "QUICKHEAL.NS",
  "WIPRO": "WIPRO.NS",
  "M&M": "M&M.NS",
  "RELIANCE": "RELIANCE.NS",
  "HUL": "HUL.NS",
  "BHARTIARTL": "BHARTIARTL.NS",
  "HDFCBANK": "HDFCBANK.NS",
  "HINDUNILVR": "HINDUNILVR.NS",
  "ITC": "ITC.NS",
  "SBIN": "SBIN.NS",
  "SGBMAY29": "SGBMAY29.NS",
  "TATAPOWER": "TATAPOWER.NS",
};

const Holdings = () => {
  const [allHoldings, setAllHoldings] = useState([]);

  // 1️⃣ Fetch initial holdings and subscribe to live updates
  useEffect(() => {
    let isMounted = true;

    axios.get("https://finorax-backend.onrender.com").then((res) => {
      if (!isMounted) return;

      setAllHoldings(res.data);

      // Subscribe to all Finnhub symbols
      res.data.forEach((stock) => {
        const symbol = symbolMap[stock.name] || stock.name;
        socket.emit("subscribe", symbol);
      });
    });

    // Cleanup: unsubscribe on unmount
    return () => {
      isMounted = false;
      allHoldings.forEach((stock) => {
        const symbol = symbolMap[stock.name] || stock.name;
        socket.emit("unsubscribe", symbol);
      });
    };
  }, []);

  // 2️⃣ Listen for live updates
  useEffect(() => {
    const handleLiveData = (msg) => {
      if (msg.type !== "trade" || !msg.data) return;

      setAllHoldings((prev) =>
        prev.map((stock) => {
          const symbol = symbolMap[stock.name] || stock.name;
          const updated = msg.data.find((s) => s.s === symbol);
          if (updated) {
            return { ...stock, price: updated.p }; // update LTP
          }
          return stock;
        })
      );
    };

    socket.on("finnhub:data", handleLiveData);

    return () => socket.off("finnhub:data", handleLiveData);
  }, []);

  // Vertical graph data
  const labels = allHoldings.map((stock) => stock.name);
  const data = {
    labels,
    datasets: [
      {
        label: "Stock Price",
        data: allHoldings.map((stock) => stock.price),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  return (
    <>
      <h3 className="title">Holdings ({allHoldings.length})</h3>

      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg. cost</th>
              <th>LTP</th>
              <th>Cur. val</th>
              <th>P&L</th>
              <th>Net chg.</th>
              <th>Day chg.</th>
            </tr>
          </thead>
          <tbody>
            {allHoldings.map((stock, index) => {
              const curValue = stock.price * stock.qty;
              const isProfit = curValue - stock.avg * stock.qty >= 0.0;
              const profClass = isProfit ? "profit" : "loss";
              const dayClass = stock.isLoss ? "loss" : "profit";

              return (
                <tr key={index}>
                  <td>{stock.name}</td>
                  <td>{stock.qty}</td>
                  <td>{stock.avg.toFixed(2)}</td>
                  <td>{stock.price.toFixed(2)}</td>
                  <td>{curValue.toFixed(2)}</td>
                  <td className={profClass}>
                    {(curValue - stock.avg * stock.qty).toFixed(2)}
                  </td>
                  <td className={profClass}>{stock.net}</td>
                  <td className={dayClass}>{stock.day}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="row">
        <div className="col">
          <h5>
            29,875.<span>55</span>
          </h5>
          <p>Total investment</p>
        </div>
        <div className="col">
          <h5>
            31,428.<span>95</span>
          </h5>
          <p>Current value</p>
        </div>
        <div className="col">
          <h5>1,553.40 (+5.20%)</h5>
          <p>P&L</p>
        </div>
      </div>

      <VerticalGraph data={data} />
    </>
  );
};

export default Holdings;
