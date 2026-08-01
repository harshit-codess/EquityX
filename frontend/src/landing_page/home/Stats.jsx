import React from "react";
import ecosystem from "../../assets/media/ecosystem.png";

function Stats() {
  return (
    <section className="stats">
      <div className="stats-container">

        <div className="stats-left">
          <h2>Trust with confidence</h2>

          <div className="stats-item">
            <h3>Customer-first always</h3>
            <p>
              That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh
              crores of equity investments, making us India’s largest broker;
              contributing to 15% of daily retail exchange volumes in India.
            </p>
          </div>

          <div className="stats-item">
            <h3>No spam or gimmicks</h3>
            <p>
              No gimmicks, spam, "gamification", or annoying push notifications.
              High quality apps that you use at your pace, the way you like.
            </p>
          </div>

          <div className="stats-item">
            <h3>The Zerodha universe</h3>
            <p>
              Not just an app, but a whole ecosystem. Our investments in 30+
              fintech startups offer you tailored services specific to your
              needs.
            </p>
          </div>

          <div className="stats-item">
            <h3>Do better with money</h3>
            <p>
              With initiatives like Nudge and Kill Switch, we don't just
              facilitate transactions, but actively help you do better with your
              money.
            </p>
          </div>
        </div>

        <div className="stats-right">
          <img src={ecosystem} alt="ecosystem" className="stats-image" />

          <div className="stats-links">
            <a href="#">
              Explore our products{" "}
              <i className="fa-solid fa-arrow-right-long"></i>
            </a>

            <a href="#">
              Try Kite demo{" "}
              <i className="fa-solid fa-arrow-right-long"></i>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Stats;