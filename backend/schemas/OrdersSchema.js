const { Schema } = require("mongoose");

const OrdersSchema = new Schema({
    user: String,
    name: String,
    qty: Number,
    price: Number,
    mode: String
}, { bufferCommands: false });

module.exports = { OrdersSchema };