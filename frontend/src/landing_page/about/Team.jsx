import React from "react";

function Team() {
  return (
    <div className="container">
      {/* Heading */}
      <div className="row py-4 mb-4">
        <div className="col-12">
          <h1 className="fs-3 text-center text-muted">People</h1>
        </div>
      </div>

      {/* Team Section */}
      <div
        className="row mt-4 align-items-center"
        style={{ lineHeight: "1.8", fontSize: "1.05rem" }}
      >
        {/* Image */}
        <div className="col-12 col-lg-6 text-center mb-5 mb-lg-0">
          {/* Desktop */}
          <img
            src="https://ui-avatars.com/api/?name=Founder&background=e9ecef&color=495057&size=300"
            alt="Founder"
            className="img-fluid rounded-circle d-none d-lg-inline"
            style={{ width: "70%", maxWidth: "320px" }}
          />

          {/* Mobile */}
          <img
            src="https://ui-avatars.com/api/?name=Founder&background=e9ecef&color=495057&size=300"
            alt="Founder"
            className="img-fluid rounded-circle d-lg-none"
            style={{
              width: "55%",
              maxWidth: "220px",
              marginLeft: "90px",
            }}
          />

          <h4 className="mt-4">Harshit</h4>
          <h6 className="mt-2 text-muted">Founder, CEO</h6>
        </div>

        {/* Content */}
        <div className="col-12 col-lg-6 p-3 p-lg-5">
          <p>
            EquityX was founded with the vision of making stock investing and
            trading simple, transparent, and accessible for everyone. Our goal
            is to provide powerful technology without unnecessary complexity.
          </p>

          <p>
            We are focused on building a modern investment platform that
            combines speed, reliability, and an intuitive user experience for
            every investor.
          </p>

          <p>
            We believe technology should empower people to make smarter
            financial decisions with confidence.
          </p>

          <p>
            Connect on{" "}
            <a href="" className="text-decoration-none">
              Homepage
            </a>{" "}
            /{" "}
            <a href="" className="text-decoration-none">
              LinkedIn
            </a>{" "}
            /{" "}
            <a href="" className="text-decoration-none">
              X (Twitter)
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;