const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventSchema = new Schema({
  mealType: {
    type: String,
    enum: ["Breakfast", "Lunch", "Brunch", "Dinner"],
    required: true,
  },
  dateTime: {
    type: Date,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  meetingLocation: {
    type: {
      latitude: Number,
      longitude: Number,
    },
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  purpose: {
    type: String,
    required: true,
  },
  users: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
  ],
});

const Event = mongoose.model("event", eventSchema);

module.exports = Event;
