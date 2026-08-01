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
          "#FFD166", // Soft Yellow
          "#FFE29A",
          "#FFEFC2",
          "#4DB6E5", // Sky Blue
          "#6CC5ED",
          "#8ED5F4",
          "#8E6DB2", // Soft Purple
          "#A98AC8",
          "#C3A8DD",
          "#E5D4F2",
        ],

        borderColor: [
          "#F4B400",
          "#F4C542",
          "#F7D774",
          "#219EBC",
          "#3CB5D8",
          "#62C6E8",
          "#7B5EA7",
          "#9677BC",
          "#B59AD3",
          "#D3C1E8",
        ],

        borderWidth: 1,
        hoverOffset: 8,
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
