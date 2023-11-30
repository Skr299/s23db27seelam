const mongoose = require("mongoose");

const restaurantsSchema = mongoose.Schema({
  restaurant_type: {
    type: String,
    maxlength: 15  
  },
  address: {
    type: String,
    maxlength: 25  
  },
  rating: {
    type: Number,
    min: 0,
    max: 5
  }
});

module.exports = mongoose.model("Restaurants", restaurantsSchema);
