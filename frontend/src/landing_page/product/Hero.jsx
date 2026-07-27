import React from "react";

function Hero() {
  return (
    <div className="container mt-5 p-5 border-bottom mb-5">
      <div className="row text-center">
        <h2>EquityX Products</h2>

        <h5 className="mt-2 text-muted">
          Powerful, modern, and intuitive investing & trading platforms
        </h5>

        <p className="fs-6 mt-2 text-muted mb-5">
          Explore our{" "}
          <a href="" style={{ textDecoration: "none" }}>
            investment products →
          </a>
        </p>
      </div>
    </div>
  );
}

export default Hero;
