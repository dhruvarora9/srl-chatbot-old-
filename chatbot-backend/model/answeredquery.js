const mongoose = require("mongoose");

const answeredQuery = new mongoose.Schema({
  query: {
    type: String,
    required: true,
  },
  response: {
    type: String,
    required: true,
  },
});


module.exports = mongoose.model("answeredquery", answeredQuery);
