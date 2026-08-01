import React from "react";
import homeHero from "../../assets/media/homeHero.png";


function Hero() {
  return (
    <div className="container hero">
      <div className="hero-content">
        <img src={homeHero} alt="Hero" className="hero-image" />

        <h1>Invest in everything</h1>

        <p>
          Online platform to invest in stocks, derivatives, mutual funds, ETFs,
          bonds, and more.
        </p>

        <button className="hero-btn">Signup Now</button>
      </div>
    </div>
  );
}

export default Hero;