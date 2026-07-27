import React from "react";

function OpenAccount() {
  return (
    <div className="container p-5 mb-5">
      <div className="row text-center">
        <h1 className="mt-5 mb-3">Open an EquityX account</h1>
        <p className="mb-4">
          Experience seamless investing with modern trading platforms, ₹0
          account opening, and flat ₹20 intraday & F&O brokerage.
        </p>
        <button
          className="p-2 btn fs-5 mb-5"
          style={{
            width: "20%",
            margin: "0 auto",
            backgroundColor: "#E74C3C",
            color: "#fff",
          }}
        >
          Sign Up Now
        </button>
      </div>
    </div>
  );
}

export default OpenAccount;