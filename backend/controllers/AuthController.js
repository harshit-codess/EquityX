const { model } = require("mongoose");
const { UsersModel } = require("../model/UsersModel.js");
const { createSecretToken } = require("../util/SecretToken");
const bcrypt = require("bcrypt");

module.exports.SignUp = async (req, res, next) => {
  try {
    const { email, username, password, createdAt } = req.body;
    const existinguser = await UsersModel.findOne({ email: email });
    if (existinguser) {
      return res.json({ message: "user already exists" });
    }

    const newUser = new UsersModel({
      email: email,
      username: username,
      password: password,
      date: createdAt,
    });
    await newUser.save();

    const token = createSecretToken(newUser._id);
    res.cookie("token", token, {
      // withCredentials: true,
      httpOnly: false,
    });

    res
      .status(201)
      .json({ message: "User signed in successfully", success: true, newUser });

    next();
  } catch (error) {
    console.error(error);
  }
};

module.exports.Login = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      return res.json({ message: "All dields are required" });
    }

    const user = await UsersModel.findOne({ username: username });
    if (!user) {
      return res.json({ message: "Incorrect password or username" });
    }

    const auth = await bcrypt.compare(password, user.password);
    if (!auth) {
      return res.json({ message: "Incorrect password or username" });
    }

    const token = createSecretToken(user._id);
    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: false,
    });

    res
      .status(201)
      .json({ message: "User logged in successfully", success: true });
    next();
  } catch (err) {
    console.error(err);
  }
};

module.exports.Logout = async (req, res) => {
  res.clearCookie("token");
  res.send("Cookie is cleared");
};
