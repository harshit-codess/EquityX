import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="container p-5 mb-5" style={{marginLeft: "300px"}}>
      <div className="row text-start">
        
          <h1 className="mt-5 mb-3 text-muted">404 Not Found</h1>
          <p>We couldn’t find the page you were looking for.</p> <br />
          <p>
            Visit <Link to="/">Zerodha’s home page</Link>
          </p>

      </div>
    </div>
  );
}

export default NotFound;
