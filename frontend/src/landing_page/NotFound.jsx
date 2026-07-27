import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="container py-5">
      <div
        className="row justify-content-center text-center"
        style={{ minHeight: "60vh", alignItems: "center" }}
      >
        <div className="col-md-8">
          <h1 className="display-1 fw-bold" style={{ color: "#E74C3C" }}>
            404
          </h1>

          <h2 className="mb-3">Page Not Found</h2>

          <p className="text-muted mb-4">
            Sorry, the page you’re looking for doesn’t exist or may have been
            moved.
          </p>

          <Link
            to="/"
            className="btn"
            style={{
              backgroundColor: "#E74C3C",
              color: "#fff",
              padding: "10px 24px",
            }}
          >
            Back to EquityX
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
