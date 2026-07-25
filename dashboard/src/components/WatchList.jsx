import React, { useContext, useState } from "react";

import { Tooltip, Grow } from "@mui/material";

import {
  BarChartOutlined,
  KeyboardArrowDown,
  KeyboardArrowUp,
  MoreHoriz,
} from "@mui/icons-material";

import { watchList } from "../data/data";

import GeneralContext from "./GeneralContext";
import { DoughnutChart } from "./DoughnutChart";

const WatchList = () => {
  const data = {
    labels: watchList.map((stock) => stock.name),
    datasets: [
      {
        label: "stock price",
        data: watchList.map((stock) => stock.price),
        backgroundColor: [
          "rgba(255, 99, 132, 0.5)", 
          "rgba(54, 162, 235, 0.5)", 
          "rgba(255, 206, 86, 0.5)", 
          "rgba(75, 192, 192, 0.5)", 
          "rgba(153, 102, 255, 0.5)", 
          "rgba(255, 159, 64, 0.5)", 
          "rgba(199, 199, 199, 0.5)", 
          "rgba(83, 102, 255, 0.5)", 
          "rgba(255, 99, 255, 0.5)",
          "rgba(0, 200, 83, 0.5)", 
          "rgba(255, 87, 34, 0.5)", 
          "rgba(121, 85, 72, 0.5)",
          "rgba(0, 188, 212, 0.5)",
          "rgba(233, 30, 99, 0.5)", 
          "rgba(156, 39, 176, 0.5)", 
          "rgba(63, 81, 181, 0.5)", 
          "rgba(76, 175, 80, 0.5)", 
          "rgba(255, 193, 7, 0.5)", 
          "rgba(96, 125, 139, 0.5)", 
          "rgba(139, 195, 74, 0.5)", 
        ],

        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
          "rgba(199, 199, 199, 1)",
          "rgba(83, 102, 255, 1)",
          "rgba(255, 99, 255, 1)",
          "rgba(0, 200, 83, 1)",
          "rgba(255, 87, 34, 1)",
          "rgba(121, 85, 72, 1)",
          "rgba(0, 188, 212, 1)",
          "rgba(233, 30, 99, 1)",
          "rgba(156, 39, 176, 1)",
          "rgba(63, 81, 181, 1)",
          "rgba(76, 175, 80, 1)",
          "rgba(255, 193, 7, 1)",
          "rgba(96, 125, 139, 1)",
          "rgba(139, 195, 74, 1)",
        ],

        borderWidth: 1,
      },
    ],
  };
  

  return (
    <div className="watchlist-container">
      <div className="search-container">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
          className="search"
        />
        <span className="counts"> {watchList.length} / 50</span>
      </div>

      <ul className="list">
        {watchList.map((stock, index) => {
          return <WatchListItem stock={stock} key={index} />;
        })}
      </ul>

      <DoughnutChart data={data} />
    </div>
  );
};

export default WatchList;

const WatchListItem = ({ stock }) => {
  const [showWatchListActions, setShowWatchListActions] = useState(false);

  const handleMouseEnter = (e) => {
    setShowWatchListActions(true);
  };

  const handleMouseExit = (e) => {
    setShowWatchListActions(false);
  };

  return (
    <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseExit}>
      <div className="item">
        <p className={stock.isDown ? "down" : "up"}>{stock.name}</p>
        <div className="itemInfo">
          <span className="percent">{stock.percent}</span>
          {stock.isDown ? (
            <KeyboardArrowDown className="down" />
          ) : (
            <KeyboardArrowUp className="up" />
          )}
          <span className="price">{stock.price}</span>
        </div>
      </div>
      {showWatchListActions && <WatchListActions uid={stock.name} />}
    </li>
  );
};

const WatchListActions = ({ uid }) => {
  const generalContext = useContext(GeneralContext);

  const handleBuyClick = () => {
    generalContext.openBuyWindow(uid);
  };

  const handleSellClick = () => {
    generalContext.openSellWindow(uid);
  };

  return (
    <span className="actions">
      <span>
        <Tooltip
          title="Buy(B)"
          placement="top"
          arrow
          TransitionEnd={Grow}
          onClick={handleBuyClick}
        >
          <button className="buy">Buy</button>
        </Tooltip>
        <Tooltip
          title="Sell(S)"
          placement="top"
          arrow
          TransitionEnd={Grow}
          onClick={handleSellClick}
        >
          <button className="sell">Sell</button>
        </Tooltip>
        <Tooltip
          title="Analytics(A)"
          placement="top"
          arrow
          TransitionEnd={Grow}
        >
          <button className="action">
            <BarChartOutlined className="icon" />
          </button>
        </Tooltip>
        <Tooltip title="More" placement="top" arrow TransitionEnd={Grow}>
          <button className="action">
            <MoreHoriz className="icon" />
          </button>
        </Tooltip>
      </span>
    </span>
  );
};
