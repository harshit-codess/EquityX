require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const { HoldingsModel } = require("./model/HoldingsModel");
const { PositionsModel } = require("./model/PositionsModel");
const { OrdersModel } = require("./model/OrdersModel");

const { SignUp, Login, Logout } = require("./controllers/AuthController");
const { userVerification } = require("./controllers/AuthMiddleware");

const jwt = require("jsonwebtoken");

const port = process.env.PORT || 3000;
const url = process.env.MONGO_URL;

const app = express();

app.use(cors({
    origin: [  process.env.FRONTEND_URL,
      process.env.DASHBOARD_URL,
    ],
    credentials: true,
  }));
app.use(bodyParser.json());

const cookieParser = require('cookie-parser');

app.use(cookieParser()); 

// app.get("/addHoldings", (req, res) => {
// let tempHoldings = [
//   {
//     user: "test6",
//     name: "BHARTIARTL",
//     qty: 2,
//     avg: 538.05,
//     price: 541.15,
//     net: "+0.58%",
//     day: "+2.99%",
//   },
//   {
//     user: "test6",
//     name: "HDFCBANK",
//     qty: 2,
//     avg: 1383.4,
//     price: 1522.35,
//     net: "+10.04%",
//     day: "+0.11%",
//   },
//   {
//     user: "test6",
//     name: "HINDUNILVR",
//     qty: 1,
//     avg: 2335.85,
//     price: 2417.4,
//     net: "+3.49%",
//     day: "+0.21%",
//   },
//   {
//     user: "test6",
//     name: "INFY",
//     qty: 1,
//     avg: 1350.5,
//     price: 1555.45,
//     net: "+15.18%",
//     day: "-1.60%",
//     isLoss: true,
//   },
//   {
//     user: "test6",
//     name: "ITC",
//     qty: 5,
//     avg: 202.0,
//     price: 207.9,
//     net: "+2.92%",
//     day: "+0.80%",
//   },
//   {
//     user: "test6",
//     name: "KPITTECH",
//     qty: 5,
//     avg: 250.3,
//     price: 266.45,
//     net: "+6.45%",
//     day: "+3.54%",
//   },
//   {
//     user: "test6",
//     name: "M&M",
//     qty: 2,
//     avg: 809.9,
//     price: 779.8,
//     net: "-3.72%",
//     day: "-0.01%",
//     isLoss: true,
//   },
//   {
//     user: "test6",
//     name: "RELIANCE",
//     qty: 1,
//     avg: 2193.7,
//     price: 2112.4,
//     net: "-3.71%",
//     day: "+1.44%",
//   },
//   {
//     user: "test6",
//     name: "SBIN",
//     qty: 4,
//     avg: 324.35,
//     price: 430.2,
//     net: "+32.63%",
//     day: "-0.34%",
//     isLoss: true,
//   },
//   {
//     user: "test6",
//     name: "SGBMAY29",
//     qty: 2,
//     avg: 4727.0,
//     price: 4719.0,
//     net: "-0.17%",
//     day: "+0.15%",
//   },
//   {
//     user: "test6",
//     name: "TATAPOWER",
//     qty: 5,
//     avg: 104.2,
//     price: 124.15,
//     net: "+19.15%",
//     day: "-0.24%",
//     isLoss: true,
//   },
//   {
//     user: "test6",
//     name: "TCS",
//     qty: 1,
//     avg: 3041.7,
//     price: 3194.8,
//     net: "+5.03%",
//     day: "-0.25%",
//     isLoss: true,
//   },
//   {
//     user: "test6",
//     name: "WIPRO",
//     qty: 4,
//     avg: 489.3,
//     price: 577.75,
//     net: "+18.08%",
//     day: "+0.32%",
//   },
// ];

//   tempHoldings.forEach((currHolding) => {
//     let newHolding = new HoldingsModel({
//       user: currHolding.user,
//       name: currHolding.name,
//       qty: currHolding.qty,
//       avg: currHolding.avg,
//       price: currHolding.price,
//       net: currHolding.net,
//       day: currHolding.day,
//     });

//     newHolding.save();
//   });

//   res.send("Done!");
// });

// app.get("/addPositions", (req, res) => {
//     let tempPositions = [
//   {
//     product: "CNC",
//     name: "EVEREADY",
//     qty: 2,
//     avg: 316.27,
//     price: 312.35,
//     net: "+0.58%",
//     day: "-1.24%",
//     isLoss: true,
//   },
//   {
//     product: "CNC",
//     name: "JUBLFOOD",
//     qty: 1,
//     avg: 3124.75,
//     price: 3082.65,
//     net: "+10.04%",
//     day: "-1.35%",
//     isLoss: true,
//   },
// ];

//     tempPositions.forEach((currHolding) => {
//         let newPosition = new PositionsModel({
//             product: currHolding.product,
//             name: currHolding.name,
//             qty: currHolding.qty,
//             avg: currHolding.avg,
//             price: currHolding.avg,
//             net: currHolding.net,
//             day: currHolding.day,
//             isLoss: currHolding.isLoss,
//         });

//         newPosition.save();
//     });

//     res.send("Done!");

// });

app.get("/allHoldings", async (req, res) => {
  let allHoldings = await HoldingsModel.find({});
  res.json(allHoldings);
});

app.get("/allPositions", async (req, res) => {
  let allPositions = await PositionsModel.find({});
  res.json(allPositions);
});

app.get("/allOrders", async (req, res) => {
  let allOrders = await OrdersModel.find({});
  res.json(allOrders);
});

app.post("/newOrder", async (req, res) => {
  let newOrder = new OrdersModel({
    user: req.body.user,
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode: req.body.mode,
  });

  const currHolding = await HoldingsModel.findOne({
    name: req.body.name,
  });

  const qty = Number(req.body.qty);
  const price = Number(req.body.price);

  const newQty = currHolding ? currHolding.qty + qty : qty;
  const newNet = currHolding ? currHolding.net + qty * price : qty * price;
  const newAvg = newNet / newQty;

  const newHolding = new HoldingsModel({
    user: req.body.user,
    name: req.body.name,
    qty: newQty,
    avg: newAvg,
    price: price,
    net: newNet,
    day: Date.now(),
  });

  await newHolding.save();
  await newOrder.save();

  res.send("Order saved");
});

app.delete("/deleteHolding", async (req, res) => {
  const { name: holdingName, qty: holdingQty, price: holdingPrice } = req.body;
  const holding = await HoldingsModel.findOne({ name: holdingName });

  if (!holding) {
    res.status(404).json({
      message: "Stock is not present in holding",
    });
  }

  if (holding.qty == holdingQty && holding.price == holdingPrice) {
    await HoldingsModel.deleteOne({ name: holdingName });
    res.send("Stock is selled");
  } else {
    res.status(404).json({
      message: "Enter correct qunatity and price",
    });
  }
});

app.post("/signup", SignUp);

app.post("/login", Login);

app.post("/verify", userVerification);

app.post("/logout", Logout);


app.listen(port, () => {
  console.log("App started");
  mongoose.connect(url);
  console.log("DB conected");
});
