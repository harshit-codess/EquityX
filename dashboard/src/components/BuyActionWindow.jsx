import React, { useContext, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import GeneralContext from "./GeneralContext";
import { UserContext } from "./UserContext.jsx";

import * as motion from "motion/react-client";

import "./BuyActionWindow.css";

import axios from "axios";

function BuyActionWindow({ uid }) {
  // const navigate = useNavigate();
  const generalContext = useContext(GeneralContext);
  const { username: user } = useContext(UserContext);

  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);

  const handleBuyClick = async () => {
    await axios.post("http://localhost:3000/newOrder", {
      user: user,
      name: uid,
      qty: stockQuantity,
      price: stockPrice,
      mode: "BUY",
    });

    generalContext.closeBuyWindow();
  };

  const handleCancelClick = () => {
    generalContext.closeBuyWindow();
  };

  return (
    <motion.div drag className="container" id="buy-window">
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              onChange={(e) => setStockQuantity(e.target.value)}
              value={stockQuantity}
            />
          </fieldset>
          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              name="price"
              id="price"
              step="0.05"
              onChange={(e) => setStockPrice(e.target.value)}
              value={stockPrice}
            />
          </fieldset>
        </div>

        <div className="buttons">
          <span>Margin required ₹140.65</span>
          <div>
            <Link className="btn btn-blue" onClick={handleBuyClick}>
              Buy
            </Link>
            <Link className="btn btn-grey" onClick={handleCancelClick}>
              Cancel
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default BuyActionWindow;
