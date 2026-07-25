const { Schema } = require("mongoose");
const bcrypt = require("bcrypt");

const UsersSchema = new Schema({
  email: {
    type: String,
    required: [true, "Your email address is required"],
    unique: true,
  },
  username: {
    type: String,
    required: [true, "Your username is required"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Your password is required"],
    min: [8, "Must be 8-digit"],
    max: 12,
  },  
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

UsersSchema.pre("save", async function() {
    this.password = await bcrypt.hash(this.password, 12);
});


module.exports = { UsersSchema };
