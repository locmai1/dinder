const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  class: {
    type: String,
    required: true,
  },
  pronouns: {
    type: [String],
    default: [],
    required: true,
  },
  restrictions: {
    type: [String],
    default: [],
    required: true,
  },
  interests: {
    type: [String],
    default: [],
    required: true,
  },
  events: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "event",
    },
  ],
});

const User = mongoose.model("user", userSchema);

module.exports = User;
