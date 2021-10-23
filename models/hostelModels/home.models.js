const mongoose = require("mongoose");

const homeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  link: { type: String, required: true },
});

module.exports = mongoose.model("home", homeSchema);
