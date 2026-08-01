import React from "react";
import pricing0 from "../../assets/media/pricing0.svg";
import intradayTrades from "../../assets/media/intradayTrades.svg";

function Hero() {
  return (
    <div className="container">
      {/* Heading */}
      <div className="row border-bottom text-center py-5">
        <div className="col-12">
          <h1>Pricing</h1>
          <h3 className="text-muted fs-5 mt-3 px-3">
            Free equity investments and flat ₹20 intraday and F&O trades
          </h3>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="row text-center py-5 g-5">
        {/* Card 1 */}
        <div className="col-12 col-md-6 col-lg-4">
          <img
            src={pricing0}
            alt="Free equity delivery"
            className="img-fluid mb-4"
            style={{ maxHeight: "170px", marginLeft: "100px"}}
          />

          <h2 className="fs-4">Free equity delivery</h2>

          <p className="text-muted px-3">
            All equity delivery investments (NSE, BSE) are absolutely free —
            ₹0 brokerage.
          </p>
        </div>

        {/* Card 2 */}
        <div className="col-12 col-md-6 col-lg-4">
          <img
            src={intradayTrades}
            alt="Intraday trades"
            className="img-fluid mb-4"
            style={{ maxHeight: "170px", marginLeft: "100px"}}
          />

          <h2 className="fs-4">Intraday and F&O trades</h2>

          <p className="text-muted px-3">
            Flat ₹20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency and commodity.
          </p>
        </div>

        {/* Card 3 */}
        <div className="col-12 col-md-6 col-lg-4 mx-md-auto">
          <img
            src={pricing0}
            alt="Free direct MF"
            className="img-fluid mb-4"
            style={{ maxHeight: "170px", marginLeft: "100px"}}
          />

          <h2 className="fs-4">Free direct MF</h2>

          <p className="text-muted px-3">
            All direct mutual fund investments are absolutely free — ₹0
            commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;