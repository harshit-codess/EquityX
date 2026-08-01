import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import axios from "axios";

import { useContext } from 'react';
import { UserContext } from './UserContext.jsx';

const Orders = () => {
  const [allOrders, setAllOrders] = useState([]);

  useEffect(() => {
    axios.get("https://equity-x.vercel.app/allOrders").then((res) => {
      setAllOrders(res.data);
    }) 
  }, [])

  const { username:user } = useContext(UserContext);

  return (
    <div className="orders">
      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Qty</th>
              <th>Avg</th>
              <th>Price</th>
            </tr>
          </thead>
          {allOrders.map((order, index) => {

              return (
                <tbody>
                   {(order.user == user ) ? 
                <tr key={index}>
                  <td>{order.name}</td>
                  <td>{order.qty}</td>
                  <td>{order.price.toFixed(2)}</td>
                  <td>{order.mode}</td>
                </tr> : null }
              </tbody>
              );
          })}
         
        </table>
      </div>
    </div>
  );
};

export default Orders;
