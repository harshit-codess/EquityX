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
    <div className="container">
      <div className="row align-items-center">
        <div className="col">
          <img src={imageURL} alt={productName} className="img-fluid" />
        </div>

        <div className="col p-5">
          <h1>{productName}</h1>

          <p>{productDescription}</p>

          <div>
            <a href={tryDemo} style={{ textDecoration: "none" }}>
              Explore Platform <i className="fa-solid fa-arrow-right-long"></i>
            </a>

            <a
              href={learnMore}
              style={{ marginLeft: "50px", textDecoration: "none" }}
            >
              Learn More <i className="fa-solid fa-arrow-right-long"></i>
            </a>
          </div>

          <div className="mt-4">
            <a href="#">
              <img src={googlePlayBadge} alt="Google Play" />
            </a>

            <a href="#" style={{ marginLeft: "50px" }}>
              <img src={appstoreBadge} alt="App Store" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
