import React from "react";

function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      {/* Top Bar */}
      <div
        className="d-flex justify-content-between align-items-center p-3 mt-5"
        id="supportWrapper"
      >
        <h4 className="mb-2">Support Portal</h4>

        <a href="" className="text-decoration-none">
          Track Tickets
        </a>
      </div>

      {/* Main Content */}
      <div className="row p-3 py-lg-5">
        {/* Left Section */}
        <div className="col-12 col-lg-6 p-3 p-lg-5">
          <h1 className="fs-3 mb-4">
            Search for an answer or browse help topics to create a ticket
          </h1>

          <input
            type="text"
            className="form-control mb-4"
            placeholder="Eg. how do I activate F&O, why is my order getting rejected."
          />

          <div className="d-flex flex-wrap gap-3">
            <a href="">Track account</a>
            <a href="">Track segment activation</a>
            <a href="">Intraday margins</a>
            <a href="">Kite user manual</a>
          </div>
        </div>

        {/* Right Section */}
        <div className="col-12 col-lg-6 p-3 p-lg-5">
          <h1 className="fs-3 mb-4">Featured</h1>

          <ol className="ps-3">
            <li className="mb-3">
              <a href="">Current Takeovers and Delisting - January 2024</a>
            </li>

            <li>
              <a href="">Latest Intraday leverages - MIS & CO</a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;
