import React from "react";

function Pricing() {
  return (
    <section className="pricing">
      <div className="pricing-container">

        <div className="pricing-left">
          <h1>Unbeatable pricing</h1>

          <p>
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>

          <a href="#">
            See pricing <i className="fa-solid fa-arrow-right-long"></i>
          </a>
        </div>

        <div className="pricing-right">
          <div className="price-card">
            <h2>₹0</h2>
            <p>
              Free equity delivery and
              <br />
              direct mutual funds
            </p>
          </div>

          <div className="price-card">
            <h2>₹20</h2>
            <p>Intraday and F&amp;O</p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Pricing;