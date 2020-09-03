const mongoose = require("mongoose");
const userDataSchema = new mongoose.Schema({
  name: { type: String },
  city: String,
});

module.exports = mongoose.model("userDataCollection", userDataSchema);
