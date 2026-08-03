const { Schema } = require("mongoose");

const HoldingsSchema = new Schema ({
    user: String,
    name: String,
    qty: Number,
    avg: Number,
    price: Number,
    net: String,
    day: String,
}, { bufferCommands: false });

module.exports = { HoldingsSchema };


