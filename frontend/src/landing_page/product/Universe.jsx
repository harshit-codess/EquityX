import React from "react";
import smallcase from "../../assets/media/smallcaseLogo.png";
import streaklogo from "../../assets/media/streakLogo.png";
import sensibull from "../../assets/media/sensibullLogo.svg";
import dittologo from "../../assets/media/dittoLogo.png";
import goldenpilogo from "../../assets/media/goldenpiLogo.png";
import ZerodhaFundhouse from "../../assets/media/zerodhaFundhouse.png";

function Universe() {
  return (
    <div className="container py-5">
      <div className="row text-center">
        <div className="col-12 mb-4">
          <h1>The EquityX Ecosystem</h1>
          <p className="text-muted">
            Extend your trading and investment experience even further with our
            partner platforms
          </p>
        </div>

        {/* Smallcase */}
        <div className="col-12 col-md-6 col-lg-4 p-4">
          <div
            className="d-flex justify-content-center align-items-center"
            style={{ height: "80px" }}
          >
            <img
              src={smallcase}
              alt="Smallcase"
              className="img-fluid"
              style={{ maxHeight: "45px" }}
            />
          </div>

          <p className="text-muted mt-3 mb-0">
            Thematic investment platform
          </p>
        </div>

        {/* Streak */}
        <div className="col-12 col-md-6 col-lg-4 p-4">
          <div
            className="d-flex justify-content-center align-items-center"
            style={{ height: "80px" }}
          >
            <img
              src={streaklogo}
              alt="Streak"
              className="img-fluid"
              style={{ maxHeight: "45px" }}
            />
          </div>

          <p className="text-muted mt-3 mb-0">
            Algo & strategy platform
          </p>
        </div>

        {/* Sensibull */}
        <div className="col-12 col-md-6 col-lg-4 p-4">
          <div
            className="d-flex justify-content-center align-items-center"
            style={{ height: "80px" }}
          >
            <img
              src={sensibull}
              alt="Sensibull"
              className="img-fluid"
              style={{ maxHeight: "45px" }}
            />
          </div>

          <p className="text-muted mt-3 mb-0">
            Options trading platform
          </p>
        </div>

        {/* Fundhouse */}
        <div className="col-12 col-md-6 col-lg-4 p-4">
          <div
            className="d-flex justify-content-center align-items-center"
            style={{ height: "80px" }}
          >
            <img
              src={ZerodhaFundhouse}
              alt="Fundhouse"
              className="img-fluid"
              style={{ maxHeight: "45px" }}
            />
          </div>

          <p className="text-muted mt-3 mb-0">
            Asset management
          </p>
        </div>

        {/* GoldenPi */}
        <div className="col-12 col-md-6 col-lg-4 p-4">
          <div
            className="d-flex justify-content-center align-items-center"
            style={{ height: "80px" }}
          >
            <img
              src={goldenpilogo}
              alt="GoldenPi"
              className="img-fluid"
              style={{ maxHeight: "45px" }}
            />
          </div>

          <p className="text-muted mt-3 mb-0">
            Fundamental research platform
          </p>
        </div>

        {/* Ditto */}
        <div className="col-12 col-md-6 col-lg-4 p-4">
          <div
            className="d-flex justify-content-center align-items-center"
            style={{ height: "80px" }}
          >
            <img
              src={dittologo}
              alt="Ditto"
              className="img-fluid"
              style={{ maxHeight: "45px" }}
            />
          </div>

          <p className="text-muted mt-3 mb-0">
            Insurance
          </p>
        </div>

        <div className="col-12 mt-5">
          <button className="btn px-5 py-2 fs-5" style={{backgroundColor: "#e74c3c", color: "white"}}>
            Signup Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Universe;