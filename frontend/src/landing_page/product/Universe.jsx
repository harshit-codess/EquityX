import React from "react";
import smallcase from "../../assets/media/smallcaseLogo.png";
import streaklogo from "../../assets/media/streakLogo.png";
import sensibull from "../../assets/media/sensibullLogo.svg";
import dittologo from "../../assets/media/dittoLogo.png";
import goldenpilogo from "../../assets/media/goldenpiLogo.png";
import ZerodhaFundhouse from "../../assets/media/zerodhaFundhouse.png";

function Universe() {
  return (
    <div className="container mt-5">
      <div className="row text-center">
        <h1>The Zerodha Universe</h1>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        <div className="col-4 p-3 mt-5">
          <img src={smallcase} alt="" />
          <p className="text-small text-muted">Thematic investment platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src={streaklogo} alt="" style={{width: "40%"}} />
          <p className="text-small text-muted " >Algo & strategy platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src={sensibull} alt="" />
          <p className="text-small text-muted">Options trading platform</p> 
        </div>
        <div className="col-4 p-3 mt-5">
          <img src={ZerodhaFundhouse} alt="" style={{width: "40%"}}/>
          <p className="text-small text-muted">Asset management</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src={goldenpilogo} alt="" />
          <p className="text-small text-muted">Fundamental research platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src={dittologo} alt="" style={{width: "40%"}}/>
          <p className="text-small text-muted">Insurance</p> 
        </div>
        <button className='p-2 btn btn-primary fs-5 mb-5' style={{width:"20%", margin:"0 auto" }}>Signup Now</button>
      </div>
    </div>
  );
}

export default Universe;
