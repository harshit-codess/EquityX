import React, { useState, useEffect } from "react";
import axios from "axios";
import { VerticalGraph } from "./VerticalGraph";

// import { Holdings } from "../data/data";

import { useContext } from "react";
import { UserContext } from "./UserContext.jsx";

const Holdings = () => {
  const [allHoldings, setAllHoldings] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/allholdings").then((res) => {
      // console.log(res.data);
      setAllHoldings(res.data);
    });
  }, []);

  const labels = allHoldings.map((subArray) => subArray["name"]);

  const data = {
    labels,
    datasets: [
      {
        label: "Stock price",
        data: allHoldings.map((stock) => stock.price),
        backgroundColor: "#F15A29",
        borderColor: "#F15A29",
        borderWidth: 1,
        borderRadius: 5,
        hoverBorderColor: "yellow",
      },
    ],
  };

  const { username: user } = useContext(UserContext);


  return (
    <>
      <h3 className="title">Holdings ({allHoldings.length})</h3>

      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Qty</th>
              <th>Avg.</th>
              <th>Price</th>
              <th>CurrValue</th>
              <th>P&L</th>
              <th>Net chg.</th>
              <th>Day chg.</th>
            </tr>
          </thead>

          {allHoldings.map((stock, index) => {
            const curValue = stock.price * stock.qty;
            const isProfit = curValue - stock.avg * stock.qty >= 0.0;
            const profClass = isProfit ? "profit" : "loss";
            const dayClass = stock.isLoss ? "loss" : "profit";

            return (
              <tbody>
                {stock.user == user ? (
                  <tr key={index}>
                    <td>{stock.name}</td>
                    <td>{stock.qty}</td>
                    <td>{stock.avg.toFixed(2)}</td>
                    <td>{stock.price.toFixed(2)}</td>
                    <td>{curValue.toFixed(2)}</td>
                    <td className={profClass}>
                      {(curValue - stock.avg * stock.qty).toFixed(2)}
                    </td>
                    <td className={profClass}>{stock.net}</td>
                    <td className={dayClass}>{stock.day}</td>
                  </tr>
                ) : null}
              </tbody>
            );
          })}
        </table>
      </div>

      <div className="row">
        <div className="col">
          <h5>
            29,875.<span>55</span>{" "}
          </h5>
          <p>Total investment</p>
        </div>
        <div className="col">
          <h5>
            31,428.<span>95</span>{" "}
          </h5>
          <p>Current value</p>
        </div>
        <div className="col">
          <h5>1,553.40 (+5.20%)</h5>
          <p>P&L</p>
        </div>
      </div>
      <div className="vertical-graph">
        <div className="chart-inner">
          <VerticalGraph data={data} />
        </div>
      </div>
    </>
  );
};

export default Holdings;
