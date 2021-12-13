"use strict";

const mongoose = require("mongoose"),
  { Schema } = require("mongoose");




var vacationSchema = new Schema(
  {
    title: {
      required: true,
      type: String,
      unique: true
    },
    description: {
      required: true,
      type: String
    },
    heroImage: {
      required: true,
        type: String
    },
    cuisine: {
        type: String,
        enum: [ null , "Continental", "Traditional", "Haute-cuisine", "Nouvelle-cuisine", "Fusion", "Vegan", "Vegetarian", "Asian", "Indian", "Middle-Eastern", "African", "Central American", "South American" ],
        required: true
    },
    cost: {
        type: Number,
        default: 0,
        min: [0, "Vacation packages positive only"],
        required: false
    },
    maxTravelers: {
        type: Number,
        default: 0,
        max: [25, "Vacation packages not more than 25 travelers."],
        min: [0, "Vacation packages not have negative number of travelers"],
        required: false
    },
    destination: {
        type: String,
        default: "None specified",
        required: true
    },
    departureLocation: {
        type: String,
        enum: [ null , "New York (JFK)", "Boston (BOS)", "Chicago (ORD)", "Miami (MIA)", "St. Louis (STL)", "Dallas (DFW)", "Seattle (SEA)", "San Francisco (SFO)" ],
        required: true
    },
    departureDate: {
        type: Date,
        default: Date.now,
        required: true
    },
    returnDate: {
        required: true,
        type: Date,
        default: Date.now
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("vacation", vacationSchema);