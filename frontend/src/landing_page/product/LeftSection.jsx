import React from "react";
import googlePlayBadge from "../../assets/media/googlePlayBadge.svg";
import appstoreBadge from "../../assets/media/appstoreBadge.svg";

function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container ">
      <div className="row">
        <div className="col">
          <img src={imageURL} alt="" />
        </div>
        <div className="col p-5 mt-5">
          <h1>{productName}</h1>
          <p>{productDescription}</p>

          <div>
            <a href={tryDemo} style={{ textDecoration: "none" }}>
              Try Demo <i class="fa-solid fa-arrow-right-long"></i>
            </a>
            <a
              href={learnMore}
              style={{ marginLeft: "50px", textDecoration: "none" }}
            >
              Learn More <i class="fa-solid fa-arrow-right-long"></i>
            </a>
          </div>
          <div className="mt-3">
            <a href="">
              <img src={googlePlayBadge} alt="" />
            </a>
            <a href="" style={{ marginLeft: "50px" }}>
              <img src={appstoreBadge} alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
