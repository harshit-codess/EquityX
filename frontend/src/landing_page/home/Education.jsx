import React from "react";
import education from "../../assets/media/education.svg";

function Education() {
  return (
    <section className="education">
      <div className="education-container">
        <div className="education-image">
          <img src={education} alt="Education" />
        </div>

        <div className="education-content">
          <h1>Free and open market education</h1>

          <p>
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>

          <a href="#">
            Varsity <i className="fa-solid fa-arrow-right-long"></i>
          </a>

          <p>
            TradingQ&amp;A, the most active trading and investment community in
            India for all your market related queries.
          </p>

          <a href="#">
            See pricing <i className="fa-solid fa-arrow-right-long"></i>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Education;
