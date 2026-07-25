import React from "react";
import education from "../../assets/media/education.svg";

function Education() {
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-6 mt-5">
          <img src={education} alt="" style={{width: "70%"}}/>
        </div>
        <div className="col-6 mt-5">
          <h1 className="mb-3 fs-2">Free and open market education</h1>
          <p className="mt-5">
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>
          <a href="" style={{ textDecoration: "none" }}>
            varsity <i className="fa-solid fa-arrow-right-long"></i>
          </a>
          <p className="mt-5">
            TradingQ&A, the most active trading and investment community in
            India for all your market related queries.
          </p>
          <a href="" style={{ textDecoration: "none" }}>
            See pricing <i className="fa-solid fa-arrow-right-long"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Education;
