import React from 'react';

function Brokerage() {
    return ( 
        <div className='container'>
            <div
  style={{
    border: "1px solid #e6e6e6",
    borderRadius: "6px",
    overflow: "hidden",
    boxShadow: "0 1px 0 rgba(0,0,0,0.02)",
    margin: "30px 0"
  }}
>
  <table style={{ width: "100%", borderCollapse: "collapse", tableLayout: "fixed", fontSize: "14px" }}>
    <thead>
      <tr>
        <th style={{ padding: "18px 22px", textAlign: "left", background: "#fff", borderBottom: "1px solid #e6e6e6", fontWeight: 600 }}></th>
        <th style={{ padding: "18px 22px", background: "#fff", borderBottom: "1px solid #e6e6e6", fontWeight: 600 }}>Equity delivery</th>
        <th style={{ padding: "18px 22px", background: "#fff", borderBottom: "1px solid #e6e6e6", fontWeight: 600 }}>Equity intraday</th>
        <th style={{ padding: "18px 22px", background: "#fff", borderBottom: "1px solid #e6e6e6", fontWeight: 600 }}>F&O - Futures</th>
        <th style={{ padding: "18px 22px", background: "#fff", borderBottom: "1px solid #e6e6e6", fontWeight: 600 }}>F&O - Options</th>
      </tr>
    </thead>

    <tbody>
      {/* Brokerage */}
      <tr>
        <th style={{ padding: "22px", borderBottom: "1px solid #e6e6e6", textAlign: "left", fontWeight: 600, background: "#fff" }}>
          Brokerage
        </th>
        <td style={{ padding: "22px", borderBottom: "1px solid #e6e6e6", textAlign: "center" }}>Zero Brokerage</td>
        <td style={{ padding: "22px", borderBottom: "1px solid #e6e6e6", textAlign: "center" }}>
          0.03% or Rs. 20/executed order whichever is lower
        </td>
        <td style={{ padding: "22px", borderBottom: "1px solid #e6e6e6", textAlign: "center" }}>
          0.03% or Rs. 20/executed order whichever is lower
        </td>
        <td style={{ padding: "22px", borderBottom: "1px solid #e6e6e6", textAlign: "center" }}>
          Flat Rs. 20 per executed order
        </td>
      </tr>

      {/* STT / CTT */}
      <tr style={{ background: "#fafafa" }}>
        <th style={{ padding: "22px", borderBottom: "1px solid #e6e6e6", textAlign: "left", fontWeight: 600 }}>
          STT/CTT
        </th>
        <td style={{ padding: "22px", borderBottom: "1px solid #e6e6e6", textAlign: "center" }}>0.1% on buy & sell</td>
        <td style={{ padding: "22px", borderBottom: "1px solid #e6e6e6", textAlign: "center" }}>0.025% on the sell side</td>
        <td style={{ padding: "22px", borderBottom: "1px solid #e6e6e6", textAlign: "center" }}>0.02% on the sell side</td>
        <td style={{ padding: "22px", borderBottom: "1px solid #e6e6e6" }}>
          <ul style={{ textAlign: "left", margin: 0, paddingLeft: "20px" }}>
            <li>0.125% of intrinsic value on exercised options</li>
            <li>0.1% on sell side (on premium)</li>
          </ul>
        </td>
      </tr>

      {/* Transaction charges */}
      <tr>
        <th style={{ padding: "22px", borderBottom: "1px solid #e6e6e6", textAlign: "left", fontWeight: 600 }}>
          Transaction charges
        </th>
        <td style={{ padding: "22px", borderBottom: "1px solid #e6e6e6", textAlign: "center" }}>
          NSE: 0.00297% <br /> BSE: 0.00375%
        </td>
        <td style={{ padding: "22px", borderBottom: "1px solid #e6e6e6", textAlign: "center" }}>
          NSE: 0.00297% <br /> BSE: 0.00375%
        </td>
        <td style={{ padding: "22px", borderBottom: "1px solid #e6e6e6", textAlign: "center" }}>
          NSE: 0.00173% <br /> BSE: 0
        </td>
        <td style={{ padding: "22px", borderBottom: "1px solid #e6e6e6", textAlign: "center" }}>
          NSE: 0.03503% (premium) <br /> BSE: 0.0325% (premium)
        </td>
      </tr>

      {/* GST */}
      <tr style={{ background: "#fafafa" }}>
        <th style={{ padding: "22px", borderBottom: "1px solid #e6e6e6", textAlign: "left", fontWeight: 600 }}>
          GST
        </th>
        <td style={{ padding: "22px", borderBottom: "1px solid #e6e6e6", textAlign: "center" }}>
          18% on (brokerage + SEBI + transaction charges)
        </td>
        <td style={{ padding: "22px", borderBottom: "1px solid #e6e6e6", textAlign: "center" }}>
          18% on (brokerage + SEBI + transaction charges)
        </td>
        <td style={{ padding: "22px", borderBottom: "1px solid #e6e6e6", textAlign: "center" }}>
          18% on (brokerage + SEBI + transaction charges)
        </td>
        <td style={{ padding: "22px", borderBottom: "1px solid #e6e6e6", textAlign: "center" }}>
          18% on (brokerage + SEBI + transaction charges)
        </td>
      </tr>

      {/* SEBI charges */}
      <tr>
        <th style={{ padding: "22px", borderBottom: "1px solid #e6e6e6", textAlign: "left", fontWeight: 600 }}>
          SEBI charges
        </th>
        <td style={{ padding: "22px", borderBottom: "1px solid #e6e6e6", textAlign: "center" }}>₹10 / crore</td>
        <td style={{ padding: "22px", borderBottom: "1px solid #e6e6e6", textAlign: "center" }}>₹10 / crore</td>
        <td style={{ padding: "22px", borderBottom: "1px solid #e6e6e6", textAlign: "center" }}>₹10 / crore</td>
        <td style={{ padding: "22px", borderBottom: "1px solid #e6e6e6", textAlign: "center" }}>₹10 / crore</td>
      </tr>

      {/* Stamp charges */}
      <tr style={{ background: "#fafafa" }}>
        <th style={{ padding: "22px", textAlign: "left", fontWeight: 600 }}>Stamp charges</th>
        <td style={{ padding: "22px", textAlign: "center" }}>0.015% or ₹1500 / crore (buy)</td>
        <td style={{ padding: "22px", textAlign: "center" }}>0.003% or ₹300 / crore (buy)</td>
        <td style={{ padding: "22px", textAlign: "center" }}>0.002% or ₹200 / crore (buy)</td>
        <td style={{ padding: "22px", textAlign: "center" }}>0.003% or ₹300 / crore (buy)</td>
      </tr>
    </tbody>
  </table>
</div>
        </div>
     );
}

export default Brokerage;