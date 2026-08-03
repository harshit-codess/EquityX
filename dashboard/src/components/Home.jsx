import React from "react";

import Dashboard from "./Dashboard";
import TopBar from "./TopBar";
import BuyActionWindow from "./BuyActionWindow";

import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

import { UserContext } from "./UserContext";
import { BrowserRouter } from "react-router";

const Home = () => {
  const [username, setUsername] = useState("");

  useEffect(() => {
    const verifyCookie = async () => {
      // if (!cookies.token) {
      //    window.location.href = "http://localhost:5173/login";
      // }
      try {
        const { data } = await axios.post(
          "http://localhost:3000/verify",
          {},
          { withCredentials: true },
        );

        const { status, user } = data;
        if (status) {
          setUsername(user);
          toast(`Hello ${user}`, {
            position: "top-right",
          });
        } else {
          window.location.href = "http://localhost:5173/login";
          toast(`Error found`, {
            position: "top-right",
          });
        }
      } catch (err) {
        window.location.href = "http://localhost:5173/login";
      }
    };

    verifyCookie();
  }, []);

  return (
    <>
      <ToastContainer />
      <UserContext.Provider value={{ username }}>
        <TopBar />
        <Dashboard />
      </UserContext.Provider>
    </>
  );
};

export default Home;
