const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  mobileNumber: {
    type: String,
    required: true,
    unique: true,
  },
  otp: {
    type: String,
  },
  token: {
    type: String,
  },
  reactionHistory: [
    {
      date: {
        type: Date,
        default: Date.now,
      },
      conc_a: {
        type: Number,
        required: true,
      },
      conc_b: {
        type: Number,
        required: true,
      },
      conc_c: {
        type: Number,
        required: true,
      },
      conc_d: {
        type: Number,
        required: true,
      },
      color: {
        type: String,
        required: true,
      },
      product_name: {
        type: String,
        required: true,
      },
    },
  ],
});

const User = mongoose.model("User", userSchema);

module.exports = User;
