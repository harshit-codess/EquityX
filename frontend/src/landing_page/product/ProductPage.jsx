import React from "react";
import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";

import kite from "../../assets/media/kite.png";
import coin from "../../assets/media/coin.png";
import varsity from "../../assets/media/varsity.png";
import console from "../../assets/media/console.png";
import kiteconnect from "../../assets/media/kiteconnect.png";

function Product() {
  return (
    <>
      <Hero />

      <LeftSection
        imageURL={kite}
        productName="EquityX Trade"
        productDescription="Our lightning-fast flagship trading platform with real-time market data, advanced charting tools, watchlists, and a clean, intuitive interface. Trade seamlessly across desktop, Android, and iOS."
        tryDemo=""
        learnMore=""
      />

      <RightSection
        imageURL={console}
        productName="EquityX Console"
        productDescription="Your complete investment dashboard. Track your portfolio, monitor performance, analyze trades, and gain insights through powerful reports and visualizations."
        learnMore=""
      />

      <LeftSection
        imageURL={coin}
        productName="EquityX Invest"
        productDescription="Invest in direct mutual funds with zero commission and manage your investments effortlessly. Available on both Android and iOS."
        tryDemo=""
        learnMore=""
      />

      <RightSection
        imageURL={kiteconnect}
        productName="EquityX API"
        productDescription="Build powerful trading applications using our fast and secure REST APIs. Create innovative investing experiences for your users with ease."
        learnMore=""
      />

      <LeftSection
        imageURL={varsity}
        productName="EquityX Learn"
        productDescription="Master the stock market with beginner-friendly lessons, interactive content, and practical examples designed to help you become a confident investor."
        tryDemo=""
        learnMore=""
      />

      <h4 className="text-center fw-normal">
        Want to know more about our technology stack? Check out the{" "}
        <a href="" style={{ textDecoration: "none" }}>
          EquityX Tech
        </a>{" "}
        blog.
      </h4>

      <Universe />
    </>
  );
}

export default Product;