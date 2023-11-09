const mongoose = require("mongoose")
const restaurantsSchema = mongoose.Schema({
restaurants_type: String,
address: String,
rating: Number
})
module.exports = mongoose.model("Restaurants",
restaurantsSchema)