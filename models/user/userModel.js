//import mongoose
const mongoose = require("mongoose");
//define types for each attributes
const userType = mongoose.Schema({
  name: String,
});

//export all attributes
module.exports = userType;
