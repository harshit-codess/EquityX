import React from "react";

function RightSection({
  imageURL,
  productName,
  productDescription,
  learnMore,
}) {
  return (
    <div className="container py-5">
      <div className="row align-items-center gy-5">
        {/* Content */}
        <div className="col-12 col-lg-6 order-2 order-lg-1 text-center text-lg-start px-4 px-lg-5">
          <h1 className="display-6 fw-semibold mb-4">{productName}</h1>

          <p
            className="text-muted mb-4"
            style={{ lineHeight: "1.8", fontSize: "1.05rem" }}
          >
            {productDescription}
          </p>

          <a href={learnMore} className="text-decoration-none fw-semibold">
            Learn More{" "}
            <i className="fa-solid fa-arrow-right-long ms-2"></i>
          </a>
        </div>

        {/* Image */}
        <div className="col-12 col-lg-6 order-1 order-lg-2 text-center">
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
      </div>
    </div>
  );
}

export default RightSection;