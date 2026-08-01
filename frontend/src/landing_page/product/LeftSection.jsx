import React from "react";
import googlePlayBadge from "../../assets/media/googlePlayBadge.svg";
import appstoreBadge from "../../assets/media/appstoreBadge.svg";

function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
}) {
  return (
    <div className="container py-5">
      <div className="row align-items-center gy-5">
        {/* Image */}
        <div className="col-12 col-lg-6 text-center">
          <img
            src={imageURL}
            alt={productName}
            className="img-fluid"
            style={{
              maxWidth: "520px",
              width: "100%",
            }}
          />
        </div>

        {/* Content */}
        <div className="col-12 col-lg-6 text-center text-lg-start px-4 px-lg-5">
          <h1 className="display-6 fw-semibold mb-4">
            {productName}
          </h1>

          <p
            className="text-muted mb-4"
            style={{ lineHeight: "1.8", fontSize: "1.05rem" }}
          >
            {productDescription}
          </p>

          {/* Links */}
          <div className="d-flex justify-content-center justify-content-lg-start flex-wrap gap-4 mb-4">
            <a href={tryDemo} className="text-decoration-none fw-semibold">
              Explore Platform
              <i className="fa-solid fa-arrow-right-long ms-2"></i>
            </a>

            <a href={learnMore} className="text-decoration-none fw-semibold">
              Learn More
              <i className="fa-solid fa-arrow-right-long ms-2"></i>
            </a>
          </div>

          {/* Store Buttons */}
          <div className="d-flex justify-content-center justify-content-lg-start flex-wrap gap-3">
            <a href="#">
              <img
                src={googlePlayBadge}
                alt="Google Play"
                className="img-fluid"
                style={{ maxWidth: "160px" }}
              />
            </a>

            <a href="#">
              <img
                src={appstoreBadge}
                alt="App Store"
                className="img-fluid"
                style={{ maxWidth: "160px" }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;